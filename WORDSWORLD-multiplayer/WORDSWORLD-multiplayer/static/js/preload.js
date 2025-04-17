
 
Playbutton = PIXI.Sprite.from("../static/image/PlayBut.png");
Playbutton.anchor.set(0.5, 0.5);
Playbutton.x = 921.5;
Playbutton.y = 144.5;
Playbutton.scale.x = 0.5;
Playbutton.scale.y = 0.5;
Playbutton.interactive = true
Playbutton.on("pointerdown", function () {
  button_click.play();
  Playbutton.scale.x = 0.4;
  Playbutton.scale.y = 0.4;
})
Playbutton.on("pointerup", function () {
  Playbutton.scale.x = 0.5;
  Playbutton.scale.y = 0.5;
  setTimeout(() => {
    bgMusic.play();
    bgMusic.loop = true 
    preload()
  }, 10);
})
app.stage.addChild(Playbutton)
function preload() {
  // document.getElementById("tsparticle").style.display = "block"
  document.getElementById("tsparticle").style.visibility = "visible"

  

  document.body.style.backgroundImage = "url('../static/image/menubg.jpg')";
  app.renderer.view.classList.remove("border","border-black");
  app.stage.removeChildren();
  if (ExitFlag == true) {
    document.removeEventListener("keypress", keyEventFun); 
  }

  gameSelectCont = new PIXI.Container()
  gameSelectShape = new PIXI.Graphics();
  gameSelectShape.beginFill(0x000000).drawRoundedRect(0, 0, 400, 400,25);
  gameSelectShape.alpha = 0.5
  gameSelectShape.pivot.set(gameSelectShape.width/2,gameSelectShape.height/2)
  gameSelectShape.x = AppWidth/2
  gameSelectShape.y = appHeight/2
  gameSelectCont.addChild(gameSelectShape)

  app.renderer.view.style.backgroundImage = ""
//............
  qnNumbersArr =  Array.from({ length: 50 }, (_, i) => i);
  let randomIndex = Math.floor(Math.random() * qnNumbersArr.length);
  // Get the randomly selected value
  qnCount = qnNumbersArr[randomIndex];
  qnNumber = QnsArr.length-qnNumbersArr.length;
  qnNumbersArr.splice(randomIndex, 1);

//   let clickEvent_Close = new MouseEvent("click", {
//     bubbles: true,
//     cancelable: true,
//     view: window
// }); 

// document.getElementById("result_close").dispatchEvent(clickEvent_Close); 
//................
  shapeAll.children = [];
  UserAnsText = "";
  UserAnsarr = [];
  letterBgArr = [];
  AnsShapeArr = [];
  map2 = {};
  map = {};
  positionX = 0;
  positionY = 0;
  timeCount = 16;
  count = 0;
  clearInterval(timerInterval)
  clearTimeout(timerTimeout)
  clearTimeout(resetTime)
  clearTimeout(onLoadTime)


  var Img = practice_btn.src; 
  practice_btn.onload = () => {
    console.log("loaded");
  };


  gametypebg1 = new PIXI.BaseTexture(Img);
  gametypebg = new PIXI.Texture(gametypebg1);

  gametype1 = PIXI.Sprite.from(gametypebg);
  gametype1.anchor.set(0.5, 0.5);
  // gametype1.x = (app.stage.width / 2);
  // gametype1.y =(app.stage.height / 2)
  gametype1.scale.x = 0.5;
  gametype1.scale.y = 0.3;
  FreeTxt = new PIXI.Text("Free Mode", { fill: "white", fontSize: "30px" });
  FreeTxt.anchor.set(0.5, 0.5);
  FreeTxt.x = gametype1.x;
  FreeTxt.y = gametype1.y;
  GameTypeCon1 = new PIXI.Container()
  GameTypeCon1.addChild(gametype1, FreeTxt)
  // setTimeout(() => {
  //   GameTypeCon1.pivot.x = GameTypeCon1.width/2
  //   GameTypeCon1.pivot.y = GameTypeCon1.height/2
  // }, 100);

  GameTypeCon1.x = AppWidth/2
  GameTypeCon1.y = appHeight/2-125


  var Img = challange_btn.src;
  challange_btn1 = new PIXI.BaseTexture(Img);
  challange_btnTexture = new PIXI.Texture(challange_btn1);


  gametype2 = PIXI.Sprite.from(challange_btnTexture);
  gametype2.anchor.set(0.5, 0.5);
  // gametype2.x = (app.stage.width / 2) + 850;
  // gametype2.y = 100 + 200;
  gametype2.scale.x = 0.5;
  gametype2.scale.y = 0.3;
  TurboTxt = new PIXI.Text("Turbo Mode", { fill: "white", fontSize: "30px" });
  TurboTxt.anchor.set(0.5, 0.5);
  TurboTxt.x = gametype2.x;
  TurboTxt.y = gametype2.y;

  GameTypeCon2 = new PIXI.Container();
  GameTypeCon2.addChild(gametype2, TurboTxt);
  // setTimeout(() => {
  //   GameTypeCon2.pivot.x = GameTypeCon2.width/2
  //   GameTypeCon2.pivot.y = GameTypeCon2.height /2
  // }, 100); 

  GameTypeCon2.x =  AppWidth/2;//820 + 25
  GameTypeCon2.y =  appHeight/2;//380



  //........................................
  var Img = muliplayer_btn.src;
  muliplayer_btn1 = new PIXI.BaseTexture(Img);
  muliplayer_btnTexture = new PIXI.Texture(muliplayer_btn1);

  gametype3 = PIXI.Sprite.from(muliplayer_btnTexture);
  gametype3.anchor.set(0.5, 0.5);
  // gametype3.x = (app.stage.width / 2) + 850;
  // gametype3.y = 100 + 200;
  gametype3.scale.x = 0.5;
  gametype3.scale.y = 0.3;
  TurboTxt = new PIXI.Text("Challenge Friends", { fill: "white", fontSize: "30px" });
  TurboTxt.anchor.set(0.5, 0.5);
  TurboTxt.x = gametype3.x;
  TurboTxt.y = gametype3.y;
  
  GameTypeCon3 = new PIXI.Container() 
  GameTypeCon3.addChild(gametype3, TurboTxt)
  // GameTypeCon3.pivot.x = GameTypeCon3.width * 2.2
  // GameTypeCon3.pivot.y = GameTypeCon3.height + 30
  GameTypeCon3.x =  AppWidth/2;//GameTypeCon3.width+ 220 + 25
  GameTypeCon3.y =  appHeight/2+125;//GameTypeCon3.height+180 
  GameTypeCon3.cursor = "pointer"
  GameTypeCon3.interactive = true

  let launchModalBtn = document.getElementById("launchModalBtn");

  // Function to programmatically trigger click event on the button
  function ShowMuliplayeMenu() {
      // document 
      // Create a new MouseEvent of type 'click'
      let clickEvent = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
      });
      // Dispatch the click event to the button element
      launchModalBtn.dispatchEvent(clickEvent);
  }
 

  GameTypeCon3.on("pointerdown", function () {
    GameTypeCon3.scale.x = 0.9
    button_click.play();
    GameTypeCon3.scale.y = 0.9 
  }) 
  GameTypeCon3.on("pointerup", function () {
    GameTypeCon3.scale.x = 1
    GameTypeCon3.scale.y = 1 
    ShowMuliplayeMenu()
  })
 
  //.........................................

  gameSelectCont.addChild(GameTypeCon1, GameTypeCon2,GameTypeCon3)

  app.stage.addChild(gameSelectCont)

  GameTypeCon1.interactive = true
  GameTypeCon1.on("pointerdown", function () {

    button_click.play();
    GameTypeCon1.scale.x = 0.9
    GameTypeCon1.scale.y = 0.9


  })
  GameTypeCon1.on("pointerup", function () {
    Gametypeval = 1
    GameTypeCon1.scale.x = 1
    GameTypeCon1.scale.y = 1
    setTimeout(() => {
      main();
    }, 3);
  })


  GameTypeCon2.interactive = true

  GameTypeCon2.on("pointerdown", function () {
    GameTypeCon2.scale.x = 0.9
    button_click.play();
    GameTypeCon2.scale.y = 0.9
  })

  GameTypeCon2.on("pointerup", function () {
    Gametypeval = 2
    GameTypeCon2.scale.x = 1
    GameTypeCon2.scale.y = 1
    setTimeout(() => {//..............code to justify the letter of time ( helped to keed timetext as 2 digit)...................
      main();
    }, 1);
  })

}