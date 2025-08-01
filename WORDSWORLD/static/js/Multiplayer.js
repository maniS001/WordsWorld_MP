//.........................................................
var socket;
let createForm = document.getElementById("createForm");
createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  UserName = e.target.userName.value;
  $.ajax({
    url: "multiplayer",
    type: "GET",
    dataType: "json",
    data: { UserName: UserName, type: "create" },
    success: function (data) {
      let clickEvent1 = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
    });
    // Dispatch the click event to the button element
    document.getElementById("copy_id_modal-btn").dispatchEvent(clickEvent1);
    document.getElementById("gameId_text").textContent = data.gameId;

    

      WebSocketConnect(data.gameId);
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });
});



// .......................................................................



// ......................................................................
let joiningForm = document.getElementById("joiningForm");
joiningForm.addEventListener("submit", (e) => {
  e.preventDefault();
  UserName = e.target.userName.value;
  gameId = e.target.gameId.value;
  $.ajax({
    url: "multiplayer",
    type: "GET",
    dataType: "json",
    data: { UserName: UserName, gameId: gameId, type: "join" },
    success: async function (data) {
      console.log(data);
      if (data.result == "start game") {
        await WebSocketConnect(data.gameId, "join");
        //    console.log("connecting to websocket")
      }
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });
});

//..........................................................
function ShowCreateForm() {
  document.getElementById("createBtn").classList.add("active");
  document.getElementById("joinBtn").classList.remove("active");
  document.getElementById("joiningForm").hidden = true;
  document.getElementById("createForm").hidden = false;
}

function ShowjoinForm() {
  document.getElementById("joinBtn").classList.add("active");
  document.getElementById("createBtn").classList.remove("active");
  document.getElementById("joiningForm").hidden = false;
  document.getElementById("createForm").hidden = true;
}
//..................................................................

function WebSocketConnect(gameId, type) {
  socket = new WebSocket("ws://wordsworld-mp.onrender.com/ws/game/" + gameId);
  // Handle WebSocket events
  socket.onopen = () => {
    console.log("WebSocket connection opened");
    if (type == "join") {
      StartData = {
        type: "start_game",
      };
      socket.send(JSON.stringify(StartData));
    }

  };

  socket.onmessage =  (event) => { 
    
    const data = JSON.parse(event.data); 
    if (data["type"] == "start_game") {
      Gametypeval = 3;
      setTimeout(async () => { 
        let clickEvent2 = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
      }); 

      document.getElementById("close-btn").dispatchEvent(clickEvent2);
      document.getElementById("close-btn1").dispatchEvent(clickEvent2);
      await main_mult();
      //.......................................
      ShuffleArr = data["shuffled_letters"].split(",");
      Anslength = Number(data.length);
      SpaceInfo = data.spaceInfo;  
      qnCount  = data.QnCount;
      console.log(qnCount)
      qnNumber = data.Qn_number;

      Mult_Main.CreateShuffledLetters(QnsArr[qnCount], AnsArr[qnCount]);
      // console.log("connected! you can start the game now!!",data)
      }, 1);
    }else if(data["type"]=="user_id"){
       console.log(data["userId"])
       UserId = data["userId"];
    }
    else{
      // console.log(data)
      Mult_Main.websocker_receivefun(data)

    }
//  if(data["type"]!=)


    console.log(data.type);
  };

  socket.onclose = () => {
    console.log("WebSocket connection closed");
  };
  // return new Promise();
}
