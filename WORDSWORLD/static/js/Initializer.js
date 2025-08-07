var timestart = 1;
var LetterArr = new Array();
var letterBgArr = [];
var qnNumber = 0;
var LettercontainerArr = [];
var randtemp;
var shuffeledArr = [];
var positionX = 0;
var Qntext;
var positionY = 0;
var AnswerWord;
// var qnCount = 0
var timeCount = 16
var ExitFlag = false
var opp_Point = 0;
var timerTimeout
var resetTime
var onLoadTime
var timerInterval
var TimePosX = 45
var TimePosY = 100
// var bgMusic = new Audio("static/sounds/bgsnd.mp3");
// var box_click = new Audio("static/sounds/box_click.wav");
// var win_snd = new Audio("static/sounds/win_snd.wav");
// var loss_snd = new Audio("static/sounds/loss_snd.wav");
// var del_snd = new Audio("static/sounds/del_snd.wav");
// var button_click = new Audio("static/sounds/button_click.wav");
// var box_hover = new Audio("static/sounds/box_hover.wav");



var bgMusic = new Howl({
  src: ['static/sounds/bgsnd.mp3'],
  loop:true,
  volume: 0.75
})
var box_click = new Howl({
  src: ["static/sounds/box_click.wav"],
  
  volume: 1,
});var win_snd = new Howl({
  src: ["static/sounds/win_snd.wav"],
  
  volume: 1,
});var loss_snd = new Howl({
  src: ["static/sounds/loss_snd.wav"],
  
  volume: 1,
});var del_snd = new Howl({
  src: ["static/sounds/del_snd.wav"],
  
  volume: 1,
});
var button_click = new Howl({
  src: ["static/sounds/button_click.wav"],
  
  volume: 1,
});
var box_hover = new Howl({
  src: ["static/sounds/box_hover.wav"],
  
  volume: 1,
});

// var sound = new Howl({
//   src: ['stream.mp3'],
//   html5: true
// });
 











var letterHighlight_arr = [];
var pointval = 0;
var pointval_opp = 0;
var Obj = new Object()
var ClickedLetter = "";
var ShapesContainerArr = [];
var ShuffleArr = [];
var Anslength;
var SpaceInfo;
var shapeAll = new PIXI.Container();
// shapeAll.beginFill(0, 0).drawRect(425, 68, 500, 370);
shapeAll.y = 150;
// shapeAll.alpha = 0
var myshape1
var AnsShapeArr = []
var map2 = {}
var Interactiveflag = true
var count = 0
var gameReset = false
var UserAnsarr = []
var UserAnsText = ""
var Main;
var Mult_Main;
var socket;

var PointsPosX = 925
var PointsPosY = -50
var qnNumbersArr;
var ClearButtt, ClearButt, ClearBut, PointBench, PointBenchh, PointBenchhh;
var Gametypeval = 0
// LetterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Parent;
var AnsArr = []

var qnCount;


function keyEventFun(event) {
  var KeyText = event.key;
  var key_obj={}
  key_obj.Innertext = KeyText.toUpperCase()
  Parent.letterListener(key_obj) 
}
// const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
//to create json using arrays
    // var dataObjects = [];

    // for (var i = 0; i < QnsArr.length; i++) {
    //     var question = QnsArr[i];
    //     var answer = AnsArr[i];

    //     var dataObject = {
    //         'question': question,
    //         'answer': answer
    //     };

    //     dataObjects.push(dataObject);
    // } 
    // Now dataObjects contains an array of objects with 'question' and 'answer' keys
    // console.log(JSON.stringify(dataObjects, null, 2));
var QnsArr = [] 
$.ajax({
  url: 'get-data',
  type: 'GET',
  dataType: 'json', 
  success: function (data) { 
      console.log( data.data) 
      for (const element in data["data"]) {
       Quest_set = data["data"][element]
        QnsArr.push(Quest_set["question"]);
      } 
  },
  error: function (error) {
      console.error('Error:', error);
  }
}); 



// setTimeout(() => {
//   console.log(QnsArr)
// }, 1000);

//..............code to justify the letter of time ( helped to keed timetext as 2 digit)....................
String.prototype.leftJustify = function (length, char) {
  var fill = [];
  while (fill.length + this.length < length) {
    fill[fill.length] = char;
  }
  return fill.join("") + this;
};
//............................................................................................................................
var UserId;
var appScale;
var AppWidth = 1366
var appHeight = 768
var app = new PIXI.Application({
  width: AppWidth,
  height: appHeight,
  // transparent: true,
  backgroundAlpha: 0

});
document.body.appendChild(app.view);
app.stage.pivot.x = app.screen.width / 2;
app.stage.pivot.y = app.screen.height / 2;
app.stage.x = app.screen.width / 2;
app.stage.y = app.screen.height / 2;

fitCanvas()

function fitCanvas() {
  app.renderer.view.style.position = "absolute";
  if ((window.innerWidth / window.innerHeight) < 1366 / 768) {
    appScale = (window.innerWidth) / (1366)
  } else {
    appScale = (window.innerHeight) / (768)
  }
  app.renderer.view.style.transform = " scale(" + appScale + ")";
  app.renderer.view.style.left = window.innerWidth / 2 - AppWidth / 2 + "px"
  app.renderer.view.style.top = window.innerHeight / 2 - appHeight / 2 + "px"
  // app.renderer.view.style.backgroundColor = "tan"
  // app.renderer.view.style.top = window.innerHeight / 2 - appHeight / 2 + "px"

  app.renderer.view.style.transitionDuration = "0s"
  app.renderer.view.style.transformOrigin = " center center  ";
  document.body.style.width = window.innerWidth + "px"
  document.body.style.height = window.innerHeight + "px"
  // document.body.style.transform = " scale("+appScale+")";
  // document.body.style.bottom = "100%"
  document.body.style.backgroundSize = "cover"

  document.body.style.backgroundPosition = "center top"
  // document.body.style.transform = "scale("+window.innerHeight/768+")";
  console.log(" resize window", window.innerWidth, window.innerWidth)
}
window.onresize = function () {
  fitCanvas()
}





