import json
from channels.generic.websocket import AsyncWebsocketConsumer 
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from channels.db import database_sync_to_async
from.models import Quest_Ans
from.models import RoomInfo
from.models import Winorloss
import asyncio
import time
import threading

# Function to left justify a string with leading zeros
import random

# QnCount = 0
class Consumers(AsyncWebsocketConsumer): 
    @database_sync_to_async
    def get_questions(self):
        return list(Quest_Ans.objects.values("question")) 
    async def connect(self):
        # self.channel_layer
        self.timer_interval = None  # Timer instance
        # self.QnCount = 0  # Assuming you have this variable initialized
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        # self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'game_{self.room_name}'
        self.Questions = await self.get_questions() 
        self.QuestionNumbers = [i for i in range(0,50)]
        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()
        self.loop = asyncio.get_event_loop()
        # RoomInfo.objects.create({"user_name":"mani"})

        await self.send(text_data=json.dumps({"type":"user_id" ,"userId":CreateUserId()})) 
        
    # def on_user_join(self, initial_time):
    #     if not self.timer_interval or not self.timer_interval.is_alive():
    #         self.start_timer(initial_time)

    async def disconnect(self, close_code):
        # Leave room group
        # if hasattr(self, 'timer_interval') and self.timer_interval:
        self.timer_interval.cancel()
            
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
        
        
        self.disconnect()

    async def update_time(self, time_count):
        print(time_count, "time_count")
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'respond',
                'data': {"type": "sync_time", "time": time_count}
            }
        ) 
        
    def start_timer(self, time_count):
        if time_count <= 0: 
            self.timer_interval.cancel()
            text_data_json = {
                'type': 'next_qn',
            }
            asyncio.run_coroutine_threadsafe(self.next_qn(text_data_json), self.loop)
            
            # return  # Stop timer if initial time is non-positive
        else:
            time_count -= 1 
            asyncio.run_coroutine_threadsafe(self.update_time(time_count), self.loop)
            self.timer_interval = threading.Timer(1, self.start_timer, args=(time_count,))
            self.timer_interval.start()
             
    async def next_qn(self, text_data): 
        text_data_json = text_data 
        if text_data_json['type'] == 'next_qn':

            print(len(self.QuestionNumbers),"self.QuestionNumbers")
            if(len(self.QuestionNumbers)>0):
                self.QnCount = random.choice(self.QuestionNumbers)  
                answer_data = await get_Answer(str(self.Questions[self.QnCount]['question']))
                time_count = 31
                self.start_timer(time_count)
                text_data_json = {
                    **text_data_json,
                    **answer_data,
                    'QnCount':self.QnCount,
                    'Qn_number': len(self.Questions)-len(self.QuestionNumbers)
                }
                self.QuestionNumbers.remove(self.QnCount)
            else:
                text_data_json = {"type":"game_end"}
                
            
            
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'respond',
                'data': text_data_json
            }
        )

    
    async def HidePopup(self, Hide_time_count):
        print("Hide popup")
        if Hide_time_count == 1:
            if hasattr(self, 'hide_popup_interval') and self.hide_popup_interval:
                self.hide_popup_interval.cancel()
 
                
                text_data_json = {
                    'type': 'next_qn',
                }
                await self.next_qn(text_data_json)
        else:
            Hide_time_count += 1
            self.hide_popup_interval = threading.Timer(1, asyncio.run, args=(self.HidePopup(Hide_time_count),))
            self.hide_popup_interval.start()
           
    async def receive(self, text_data):
        text_data_json = json.loads(text_data) 
        if text_data_json['type'] == 'start_game':
            self.QnCount = random.choice(self.QuestionNumbers)

            answer_data = await get_Answer(str(self.Questions[self.QnCount]['question']))
            print(self.QnCount,answer_data,self.QuestionNumbers)
            
            time_count = 31
            self.start_timer(time_count)
            text_data_json = {
                **text_data_json,
                ** answer_data,
                "QnCount": self.QnCount,
                 'Qn_number': len(self.Questions)-len(self.QuestionNumbers)
            }
            self.QuestionNumbers.remove(self.QnCount)
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'respond',
                    'data': text_data_json
                })

        if text_data_json['type'] == 'check_answer':
            User_result = await result(text_data_json['userAns'],str(self.Questions[int(text_data_json['qnCount'])]['question']))
            
            data = {
            "type":"result",
            "result":User_result["result"], 
            "ans":User_result["ans"],
            "user_ans":text_data_json['userAns']
            }

            if(User_result["result"]=="win"):
                if hasattr(self, 'timer_interval') and self.timer_interval:
                    self.timer_interval.cancel()
                else:
                    data1 = {"type":"stop_timer_req"}
                    await self.channel_layer.group_send(
                        self.room_group_name,
                        {
                            'type': 'respond',
                            'data': data1
                        }) 
                    
                # self.timer_interval.cancel()
                data = {
                        **data,
                        "winner":text_data_json["userId"]
                      }
                await self.channel_layer.group_send(
                    self.room_group_name,
                    {
                        'type': 'respond',
                        'data': data
                    }) 
                if hasattr(self, 'timer_interval') and self.timer_interval:
                # asyncio.run_coroutine_threadsafe(self.HidePopup(0), self.loop)
                    Hide_time_count = 0
                    await self.HidePopup(Hide_time_count)
            else: 
                await self.send(text_data=json.dumps(data)) 
        if(text_data_json['type']=='stop_timer') :
                if hasattr(self, 'timer_interval') and self.timer_interval:
                    self.timer_interval.cancel()
                    Hide_time_count = 0
                    await self.HidePopup(Hide_time_count)

        if(text_data_json['type']=='highlight' or text_data_json['type']=='highlight_All'):

            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'respond',
                    'data': text_data_json
                })

            
            # await self.channel_layer.group_send({
            #     "type":'respond',
            #     data:text_data_json
            #     })
            
    async def respond(self, event):
        data = event['data'] 
        if(data['type']=='start_game'):
            # answer_data = data['answer_data'] 
            # start_data = {
            #     'type': 'start_game',
            #     **answer_data  # Using dictionary unpacking to merge dictionaries
            # } 
            await  self.send(text_data=json.dumps(data)) 
        if(data['type']=='sync_time'):
            time = data['time']
            start_data = {
                'type': 'sync_time',
                'time': time  # Using dictionary unpacking to merge dictionaries
            } 
            await  self.send(text_data=json.dumps(start_data)) 
        if(data['type']=='next_qn'):
            await  self.send(text_data=json.dumps(data)) 
        if(data['type']=='result'):
            await  self.send(text_data=json.dumps(data)) 

        if(data['type']=='stop_timer_req'):
            await  self.send(text_data=json.dumps(data)) 

        if(data['type']=='highlight'):
            await  self.send(text_data=json.dumps(data)) 

        if(data['type']=='highlight_All'):
            await  self.send(text_data=json.dumps(data))      
        if(data['type']=='game_end'):
            await  self.send(text_data=json.dumps(data))      

            

@database_sync_to_async
def get_Answer(qn): 
    AnsData = Quest_Ans.objects.filter(question__contains=qn).values("answer")
    AnsData = list(AnsData)[0]["answer"] 
    SpaceCount = str(AnsData).count(" ") 
    SpaceInfo = []
    spaceLen = 0
    for i in range(0,len(AnsData)):
        if AnsData[i]==" ":
            spaceLen = i
            SpaceInfo.append(i)
    SpaceInfo.append(len(AnsData)-SpaceCount) 
    return { 
        "shuffled_letters": ShuffleLetters(AnsData),
        "length":len(AnsData)-(len(SpaceInfo)-1),
        "spaceInfo":SpaceInfo
    }

def ShuffleLetters(AnsData):
    LetterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    import random
    AnsData = str(AnsData)
    # Assuming ans is a string containing the answer
    AnswerWord = AnsData.upper()
    ShuffleArr = list(AnswerWord)

    # Inserting random letters into the array
    while len(ShuffleArr) < 30:
        randtemp = random.randint(0, len(LetterArr) - 1)
        if randtemp > 0:
            ShuffleArr.append(LetterArr[randtemp])

    # Shuffling all the letters
    random.shuffle(ShuffleArr)
    
    i = 0
    while i < 30:
        if ShuffleArr[i] == " ":
            ShuffleArr.pop(i)
            randtemp = random.randint(0, len(LetterArr) - 1)
            if randtemp > 0:
                ShuffleArr.append(LetterArr[randtemp])
                i -= 1
        i += 1
    # return ShuffleArr.join()
    return ', '.join(ShuffleArr)

@database_sync_to_async
def result(userAns,qn):
        # userAns =  req.GET.get('userAns', '')
        # qn =  req.GET.get('qn', '')
        # print(qn, "qnerrrrrrr")
        # Use `question__contains=qn` for filtering with ArrayField
        AnsData = Quest_Ans.objects.filter(question__contains=qn).values("answer")
        AnsData = str(list(AnsData)[0]["answer"]).upper()
        AnsData = AnsData.replace(" ", "")
        userAns = userAns.replace(" ", "")
        
        print(userAns,AnsData,"AnsData")
        if(userAns == AnsData):
            result = "win"
            # return JsonResponse({'result':"win"}, safe=False) 
        else:
            result="try again"
        return {"result":result,"ans":AnsData}
            # return JsonResponse({'result':"loss"}, safe=False)
            
def CreateUserId():
    return f"user_{random.randint(0,100)}"