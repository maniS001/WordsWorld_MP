from array import array
from django.db.models.fields.files import ImageField
from django.shortcuts import redirect, render
from.models import Quest_Ans
# from.models import RoomInfo
# from.models import Winorloss

from django.contrib.auth.models import User,auth
from django.http import JsonResponse
from django.core.serializers import serialize
import random
gameData = {}
# from django_postgres_extensions.models.expressions import Index
# from django.contrib.postgres.fields import Index,SliceArray
# Create your views here.
def get_data(request): 
    data = (Quest_Ans.objects.values("question"))
    return JsonResponse({'data': list(data)}, safe=False)

def get_Answer(req):
    qn =  req.GET.get('qn', '')
    # print(qn, "qnerrrrrrr")
    # Use `question__contains=qn` for filtering with ArrayField
    AnsData = Quest_Ans.objects.filter(question__contains=qn).values("answer")
    AnsData = list(AnsData)[0]["answer"]
    # AnsData.strip() 
    SpaceCount = str(AnsData).count(" ")
    # if(SpaceCount>0):
    #     print(str(AnsData).index(" "))
    # print(SpaceCount,"SpaceCount")
    SpaceInfo = []
    spaceLen = 0
    for i in range(0,len(AnsData)):
        if AnsData[i]==" ":
            spaceLen = i
            SpaceInfo.append(i)
    SpaceInfo.append(len(AnsData)-SpaceCount)

    print(SpaceInfo,AnsData)
    return JsonResponse({'data': ShuffleLetters(AnsData),"length":len(AnsData)-(len(SpaceInfo)-1),"spaceInfo":SpaceInfo}, safe=False)

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
    return ','.join(ShuffleArr)

def Open_Game(req): 
    return render(req,'index.html') 

def result(req):
        userAns =  req.GET.get('userAns', '')
        qn =  req.GET.get('qn', '')
        # print(qn, "qnerrrrrrr")
        # Use `question__contains=qn` for filtering with ArrayField
        AnsData = Quest_Ans.objects.filter(question__contains=qn).values("answer")
        AnsData = str(list(AnsData)[0]["answer"]).upper()
        AnsData = AnsData.replace(" ", "")
        print(userAns,AnsData,"AnsData")
        if(userAns == AnsData):
            # return "win"
            return JsonResponse({'result':"win"}, safe=False) 
        else:
            return JsonResponse({'result':"loss"}, safe=False)

def login(req):
    if req.method=='POST':
       name=req.POST['name']
       password=req.POST['pass']
       return redirect('/')
    else:
        return render(req,'login.html')

def details(req):
        v=req.GET('data')
        print(v)
        return render(req,'3.html',{'v':v})  
   
   #.................multiplayer........................
   

def Connect_Websocket(req):
    type =  req.GET.get('type')
    UserName = req.GET.get('UserName')
    if(type=='create'):
        gameId  = CreateGameId()
        gameData[gameId] = [UserName] 
        print(gameData)
        return JsonResponse({'gameId':gameId,'UserName':UserName} , safe=False) 
    else:
        # print(gameData)
        gameId = req.GET.get('gameId')
        try:
            print(gameData[gameId])
        except:
            return JsonResponse({'result':'no rooms available'} , safe=False) 
 
        if(len(gameData[gameId]))>=1:
            gameData[gameId].append(UserName) 
            return JsonResponse({'gameId':gameId,'UserName':UserName,'result':'start game'} , safe=False) 
        else:
            return JsonResponse({'result':'Invalid gameId'} , safe=False) 

  
            
            
            
         
def CreateGameId():
    return f"GAME{random.randint(0,100)}"
    
    