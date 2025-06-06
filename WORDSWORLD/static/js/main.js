function main() {
  app.renderer.view.classList.add("border", "border-black", "shadow");
  document.getElementById("tsparticle").style.visibility = "hidden";

  // ............creating a stage to keep all  things ......................................................
  app.stage.removeChild(gameSelectCont);
  // document.getElementById("bgdiv").style.backgroundImage = "url(" + wordimage2.src + ")";
  // document.getElementById("bgdiv").style.backgroundSize = "cover";
  // document.getElementById("bgdiv").style.backgroundColor = "transparent"
  ExitFlag = false;
  app.renderer.view.style.opacity = "0";
  app.renderer.view.style.transform = " scale(0.5)";
  app.renderer.view.style.transformOrigin = " center center  ";

  onLoadTime = setTimeout(() => {
    app.renderer.view.style.transform =
      " scale(" + window.innerHeight / appHeight + ")  "; //  implemented transion effet
    app.renderer.view.style.transformOrigin = " center center ";
    app.renderer.view.style.transition = " 1s ";
    app.renderer.view.style.transitionTimingFunction = " linear ";
    app.renderer.view.style.left = window.innerWidth / 2 - AppWidth / 2 + "px";
    app.renderer.view.style.top = window.innerHeight / 2 - appHeight / 2 + "px";
    app.renderer.view.style.opacity = "1";
  }, 100);
  setTimeout(() => {
    fitCanvas()
  }, 700);
  document.body.style.backgroundImage = "url(" + wordimage2.src + ")";
  document.body.style.backgroundSize = "cover";

  document.body.style.width = window.innerWidth + "px";
  document.body.style.height = window.innerHeight + "px";
  // app.renderer.view.style.backgroundImage =  "url(" + wordimage2.src + ")"; //"url("+wordimage2.src+")";
  app.renderer.view.style.backgroundSize = "cover";

  //.............................................stage creation ENDED.......................................
  // ..................creating points table ...............................................................
  // preload()

  // myanim.play();
  // app.stage.addChild(myanim);

  app.stage.addChild(shapeAll);

  // ............................................
  top_bar_container = new PIXI.Container();

  app.stage.addChild(top_bar_container);

  top_bar = new PIXI.Graphics();
  top_bar.beginFill(0x000, 0.5).drawRect(0, 0, AppWidth, 150);
  top_bar.pivot.set(top_bar.width / 2, top_bar.height / 2);
  top_bar.x = AppWidth / 2;
  top_bar.y = 0;
  top_bar_container.addChild(top_bar);
  // Pointsbg
  var pointsContainer = new PIXI.Container();
  PointBench = new PIXI.Graphics();
  PointBench.beginFill(0xd1d100, 1).drawRoundedRect(0, 0, 150, 30, 10);
  PointBench.pivot.set(PointBench.width, PointBench.height / 2);
  PointBench.x = 180 + PointsPosX;
  PointBench.y = 270 + PointsPosY;

  PointstextVal = new PIXI.Text("0", { fill: "black", fontSize: "20px" });
  PointstextVal.anchor.set(1, 0.5);
  PointstextVal.x = 155 + PointsPosX;
  PointstextVal.y = 270 + PointsPosY;

  profile_bg = new PIXI.Graphics();
  profile_bg.beginFill(0x00ff00, 1).drawCircle(0, 0, 25);
  profile_bg.pivot.set(profile_bg.width, profile_bg.height / 2);
  profile_bg.x = PointstextVal.x - PointstextVal.width - 70; //PointBench.x-PointBench.width/2-32 //180 + PointsPosX;##FFA500
  profile_bg.y = 270 + PointsPosY + PointBench.height / 2 + 10;

  profiletext = new PIXI.Text("M", {
    fill: "white",
    fontSize: "25px",
    dropShadow: true,
    dropShadowDistance: 2,
  });
  profiletext.anchor.set(0.5, 0.5);
  profiletext.x = profile_bg.x - 50; //190 + PointsPosX;
  profiletext.y = 270 + PointsPosY;

  Pointstext = new PIXI.Text("POINTS :", { fill: "black", fontSize: "20px" });
  Pointstext.anchor.set(1, 0.5);
  Pointstext.x = PointstextVal.x - PointstextVal.width - 5; //190 + PointsPosX;
  Pointstext.y = 270 + PointsPosY;

  pointsContainer.addChild(
    PointBench,
    Pointstext,
    PointstextVal,
    profile_bg,
    profiletext
  );
  pointsContainer.y = -185;
  pointsContainer.x = 120;
  top_bar_container.addChild(pointsContainer);

  var Img = hint_icon.src;
  hint_icon_basetexture = new PIXI.BaseTexture(Img);
  hint_icon_texture = new PIXI.Texture(hint_icon_basetexture);
  hint_icon_img = PIXI.Sprite.from(hint_icon_texture);
  hint_icon_img.anchor.set(0.5, 0.5);
  hint_icon_img.x = top_bar.width - 70;
  hint_icon_img.y = top_bar.height / 4 - 10;
  hint_icon_img.scale.x = 0.15;
  hint_icon_img.scale.y = 0.15;
  // top_bar_container.addChild(hint_icon_img);

  // ................. creating table for time.............................................................
  // .................. creating delete button..............................................................
  ClearButtt = new PIXI.BaseTexture(del_but);
  ClearButt = new PIXI.Texture(ClearButtt);
  ClearBut = PIXI.Sprite.from(ClearButt);
  ClearBut.anchor.set(0.5, 0.5);
  ClearBut.x = 1283;
  ClearBut.y = 508;
  ClearBut.scale.x = 0.2;
  ClearBut.scale.y = 0.2;
  ClearBut.interactive = true;
  app.stage.addChild(ClearBut);
  ClearBut.on("pointerdown", function () {
    ClearBut.scale.x = 0.18;
    ClearBut.scale.y = 0.18;


    // box_hover = new Audio("static/sounds/box_hover.wav");
    box_hover.play()
  });

  ClearBut.on("pointerup", function () {
    ClearBut.scale.x = 0.2;
    ClearBut.scale.y = 0.2;
    // this.deleteFun()
    Main.deleteFun();
  });

  Exitfun(70, top_bar.height / 4);
  function Exitfun(posX, posY) {
    ExitBut = PIXI.Sprite.from("../static/image/ExitBut_img.png");
    ExitBut.x = posX;
    ExitBut.y = posY;
    console.log(ExitBut.width / 2);
    ExitBut.anchor.set(0.5, 0.5);
    ExitBut.scale.x = 0.25;
    ExitBut.scale.y = 0.25;
    ExitBut.interactive = true;
    top_bar_container.addChild(ExitBut);
    ExitBut.on("pointerdown", function () {
      ExitBut.scale.x = 0.2;
      ExitBut.scale.y = 0.2;
    });
    ExitBut.on("pointerup", function () {
  button_click.play();

      ExitFlag = true;
      ExitBut.scale.x = 0.25;
      ExitBut.scale.y = 0.25;
      preload();
    });
  }
  Qntext = new PIXI.Text("2", {
    fill: "white",
    fontSize: 30,
    wordWrap: true,
    wordWrapWidth: AppWidth / 2,
    align: "center",
  });
  Qntext.anchor.set(0.5, 0.5);
  Qntext.x = 1350 / 2;
  Qntext.y = 130;
  app.stage.addChild(Qntext);
  //....................creating function that used to create all letters for the game .....................
  this.CreateShuffledLetters = function (qntxt, ans) {
    // ......................qn text creation...............................................................
    Qntext.text = qnNumber + 1 + ". " + qntxt;
    console.log(ShuffleArr);
    //.............. creating shuffled letter shapes to see in stage ........................................
    var map = {};
    for (i = 0; i < ShuffleArr.length; i++) {
      map["name_" + i] = LetterAndShape(
        ShuffleArr[i],
        520 + positionX * 65,
        60 + positionY * 65,
        1,
        this
      ); // using  class that create all shapes............................................................

      positionX += 1;
      if (positionX == 6) {
        positionX = 0;
        positionY += 1;
      }

      // }
    }

    //.................. creating empty shapes to let the user to fill  .....................................
    var AnsAllshape = new PIXI.Container();
    AnsAllshape.x = shapeAll.x;
    AnsAllshape.pivot.x = shapeAll.x / 2;

    Yval = 400;
    decval = 0;
    console.log(SpaceInfo, "SpaceInfoSpaceInfo");
    for (index = 0; index < SpaceInfo.length; index++) {
      console.log(SpaceInfo[index]);
      setBlankboxes(SpaceInfo[index] - decval, Yval);
      decval = SpaceInfo[index];
      SpaceInfo[index];
      Yval += 73;
    }

    function setBlankboxes(Anslength1, Yval) {
      for (k = 0; k <= Anslength1 - 1; k++) {
        map2["shape_" + k] = LetterAndShape(
          "",
          AppWidth / 2 - (Anslength1 / 2) * 85 + k * 85,
          // AppWidth / 2,
          Yval,
          0,
          this
        );
        AnsShapeArr.push(map2["shape_" + k]);
        console.log(AnsShapeArr[k].position,"AnsShapeArr")
        ClearBut.x = map2["shape_" + k].x + map2["shape_" + k].width;
        ClearBut.y = map2["shape_" + k].y + 150;
      }
    }
  };

  //.........................................................................................................

  document.addEventListener("keypress", keyEventFun, false);
  document.onkeydown = function (event) {
    var key = event.keyCode || event.charCode;
    if (key == 8 || key == 46) Main.deleteFun();
  };
  this.deleteFun = function () {
    if (count > 0 && count <= Anslength) {
      UserAnsarr.pop();
      letterBgArr.pop();

      count -= 1;
      Interactiveflag = false;
      // if (AnswerWord[count] == " ") {
      //   UserAnsarr.pop();
      //   count -= 1;
      // }
      Main.AnswerPlace("");
    }
  };
  this.letterListener = function (txt_obj) {
    txt = txt_obj.Innertext;
    if (count >= 0 && count <= Anslength - 1) {
      // box_click = new Audio("static/sounds/box_click.wav");
      box_click.play();

      Interactiveflag = true;
      // if (AnswerWord[count] == " ") {
      //   UserAnsarr.push(AnswerWord[count]);
      //   count += 1;
      // }
      UserAnsarr.push(txt_obj); 

      Main.AnswerPlace(txt);
      // if(count<Anslength-1){
      count += 1;
      // }
    }
  };

  this.DisableBtn = (btn) => {
    btn.alpha = 0.7;
    btn.scale.set(1);
    btn.interactive = false;
  };

  // ..... this function will be activated when user clicks any letter and it will add text to empty space...

  this.AnswerPlace = function (text) {
    console.log(AnsShapeArr[count].position,"AnsShapeArr222")
    map2["shape_" + count] = LetterAndShape(
      text,
      AnsShapeArr[count].x,
      AnsShapeArr[count].y,
      2,
      this
    );
    if (count == Anslength - 1 && text) {
      UserAnsarr.forEach((element) => {
        UserAnsText = UserAnsText + String(element.Innertext);
      });

      //..................to verify if user ans.........................................
      $.ajax({
        url: "result",
        type: "GET",
        dataType: "json",
        data: { userAns: UserAnsText, qn: QnsArr[qnCount] },
        success: function (data) {
          console.log(data.result);
          Roundresult = data.result;

          if (Roundresult == "win") {
            pointval += 1;
            PointBench.width = PointBench.width - PointstextVal.width;
            PointstextVal.text = "" + pointval;
            PointBench.width = PointBench.width + PointstextVal.width;
            Pointstext.x = PointstextVal.x - PointstextVal.width - 5; //190 + PointsPosX;

            profile_bg.x = PointstextVal.x - PointstextVal.width - 70; //PointBench.x-PointBench.width/2-32 //180 + PointsPosX;##FFA500
            profiletext.x = profile_bg.x - 50; //190 + PointsPosX;
            letterBgArr.forEach(element => {
              console.log(element)
              element.tint =0x00ff00;
            });
            if (Gametypeval == 2) {
              clearTimeout(timerTimeout);
              gameReset = true;
              // win_snd = new Audio("static/sounds/win_snd.wav");
              win_snd.play();
              showWin("Great Job! :)");
              // setTimeout(() => {
              //   ResetAll();
              // }, 500);
            } else {
              setTimeout(() => {
                // win_snd = new Audio("static/sounds/win_snd.wav");
              win_snd.play();

                showWin("Great Job! :)");
              }, 100);
            }
          } else {
            winpopupContainer.visible = true;
            // loss_snd = new Audio("static/sounds/loss_snd.wav");
          loss_snd.play();

            winPopupTxt.text = "Try Again!!"; 
 
            
            letterBgArr.forEach(element => {
              console.log(element)
              element.tint =0xff0000;
            });
            // qnCount++;
            // ShuffleArr = [];
            // app.stage.removeChild(Qntext);

            setTimeout(() => {
              letterBgArr.forEach(element => {
                element.tint ="white"
              });
              winpopupContainer.visible = false;
              shapeAll.children = [];
              UserAnsText = "";
              UserAnsarr = [];
              letterBgArr = [];

              AnsShapeArr = [];
              positionX = 0;
              positionY = 0;
              // timeCount = 16;
              count = 0;
              UserAnsText = "";
              Main.CreateShuffledLetters(QnsArr[qnCount], AnsArr[qnCount]);
            }, 500);
          }
        },
        error: function (error) {
          console.error("Error:", error);
        },
      });
    }
  };

  winpopupContainer = new PIXI.Container();
  winpopupContainer.visible = false;
  win_Image = "../static/image/win_Image.png";
  winImage11 = new PIXI.BaseTexture(win_Image);
  winImage1 = new PIXI.Texture(winImage11);
  winImage = PIXI.Sprite.from(winImage1);
  winImage.anchor.set(0.5, 0.5);
  winImage.x = app.screen.width / 2;
  winImage.y = app.screen.height / 2 - 50;
  winImage.scale.x = 0.7;
  winImage.scale.y = 0.3;
  winImage.interactive = true;

  winPopupTxt = new PIXI.Text("", { fill: "white", fontSize: "35px" });
  winPopupTxt.anchor.set(0.5);
  winPopupTxt.x = winImage.x;
  winPopupTxt.y = winImage.y;

  winpopupContainer.addChild(winImage, winPopupTxt);

  app.stage.addChild(winpopupContainer);

  function showWin(result) {

    winpopupContainer.visible = true;
    winPopupTxt.text = result;
    // myanim.stop();
    WinTime = setTimeout(() => {
      letterBgArr.forEach(element => {
        element.tint ="white"
      });
      HideWin();
    }, 1000);
  }
  function HideWin() {
    winpopupContainer.visible = false;
    // myanim.play();
    // resetTime = setTimeout(() => {
    ResetAll();
    // }, 500);
  }
  // ...................to call next qn and reset all the value at initial state............................
  function ResetAll() {
    // QnsArr.lenth-1
    // if(Gametypeval==3){
    // qnCount++;
    // qnCount = Math.random(qnNumbersArr) 
    let randomIndex = Math.floor(Math.random() * qnNumbersArr.length);
// Get the randomly selected value
     qnCount = qnNumbersArr[randomIndex];
    qnNumber = QnsArr.length-qnNumbersArr.length;
    qnNumbersArr.splice(randomIndex, 1);
    ShuffleArr = [];

    // app.stage.removeChild(Qntext);
    shapeAll.children = [];
    UserAnsText = "";
    UserAnsarr = [];
    letterBgArr = [];

    AnsShapeArr = [];
    positionX = 0;
    positionY = 0;
    timeCount = 16;
    count = 0;
    // }else{
    $.ajax({
      url: "get-Answer",
      type: "GET",
      dataType: "json",
      data: { qn: QnsArr[qnCount] },
      success: function (data) {
        console.log(data.data); // Access data directly, assuming 'data' is the key returned
        // Iterate through 'data' if needed
        ShuffleArr = data.data.split(",");
        Anslength = Number(data.length);
        SpaceInfo = data.spaceInfo;
        console.log(SpaceInfo);
        if (qnNumber <= QnsArr.length - 1) {
          Main.CreateShuffledLetters(QnsArr[qnCount], AnsArr[qnCount]);
        } else if (pointval >= QnsArr.length - 1) {
          showCertificate();
        } else {
          preload();
        }
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
    // }
  }
  function showCertificate() {
    app.stage.removeChildren();
    CertificateImg = PIXI.Sprite.from("../static/image/Certificate.jpg");
    CertificateImg.visible = true;
    CertificateImg.anchor.set(0.5, 0.5);
    CertificateImg.x = 650;
    CertificateImg.y = 300;
    CertificateImg.scale.x = 1.4;
    CertificateImg.scale.y = 1.4;
    app.stage.addChild(CertificateImg);

    Exitfun(1130, 50);

    LevelEnd = new PIXI.Text(" Level Completed!!! ", {
      fill: "red",
      fontSize: "25px",
      fontFamily: "BEBAS",
      fontStyle: "bold",
    });
    LevelEnd.x = 550;
    LevelEnd.y = 555;

    app.stage.addChild(LevelEnd);
  }

  // function getAnswer_req(){}

  if (Gametypeval == 2) {
    // timeBench = PIXI.Sprite.from(PointBenchh);
    // timeBench.anchor.set(0.5, 0.5);
    // timeBench.x = AppWidth/2//200 + TimePosX;
    // timeBench.y = 105 + TimePosY;
    // timeBench.scale.x = 0.06;
    // timeBench.scale.y = 0.06;#00FF00

    timeBench = new PIXI.Graphics();
    timeBench.beginFill(0xffffff, 0.7).drawRoundedRect(0, 0, 120, 39);
    timeBench.pivot.set(timeBench.width / 2, timeBench.height / 2);
    timeBench.x = top_bar.width / 2;
    timeBench.y = top_bar.height / 4;
    console.log(timeBench);

    // timeBench.style.fill = 0xffffff

    Timetext = new PIXI.Text("YOUR TIME", { fill: "white", fontSize: "25px" });
    Timetext.anchor.set(0.5, 0.5);
    Timetext.x = 193 + TimePosX;
    Timetext.y = 100 + TimePosY;

    TimetextVal = new PIXI.Text("0", { fill: "white", fontSize: "25px" });
    TimetextVal.anchor.set(0.5, 0.5);
    TimetextVal.x = top_bar.width / 2; //193 + TimePosX;
    TimetextVal.y = top_bar.height / 4; //130 + TimePosY;
    top_bar_container.addChild(timeBench, TimetextVal);
    // top_bar_container.addChild(timeBench, Timetext, TimetextVal);

    //...............Interval to create time duration..........................................................
    timerInterval = setInterval(() => {
      timeCount -= 1;
      timeCount1 = String(timeCount).leftJustify(2, "0");
      TimetextVal.text = "00:00:" + timeCount1;
      if (timeCount == 0) {
        // loss_snd = new Audio("static/sounds/loss_snd.wav");
        loss_snd.play();

        winpopupContainer.visible = true;
        winPopupTxt.text = "You Lost!! :(";
        timerTimeout = setTimeout(() => {
          winpopupContainer.visible = false;
          if (gameReset == false) {
            ResetAll();
          } else {
            gameReset = false;
          }
        }, 900);
        // showWin("You Lost!! :(");
      }
      if (timeCount < 6) {
        timeBench.tint = 0xff0000;
      } else {
        timeBench.tint = 0x00ff00;
      }
    }, 1000);
  }

  // if(gameT)
  Main = this;
  Parent = Main;

  // if (Gametypeval == 3) {
  //   // socket.send("hello")

  //   get_answer_data = {
  //     type: "get-answer",
  //     qn: QnsArr[0],
  //   };
  //   socket.send(JSON.stringify(get_answer_data));
  // } else {
    console.log(qnCount,"qnCount")
  $.ajax({
    url: "get-Answer",
    type: "GET",
    dataType: "json",
    data: { qn: QnsArr[qnCount] },
    success: function (data) {
      console.log(data.data, "data data"); // Access data directly, assuming 'data' is the key returned
      // Iterate through 'data' if needed
      // data.data.forEach(element => {
      //   // AnsArr.push(element["answer"])
      ShuffleArr = data.data.split(",");
      Anslength = Number(data.length);
      SpaceInfo = data.spaceInfo;
      console.log(SpaceInfo, "SpaceInfo");
      //   });
      Main.CreateShuffledLetters(QnsArr[qnCount], AnsArr[qnCount]);
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });
  // }
}
// socket.onmessage =
//...........................................................................................................
