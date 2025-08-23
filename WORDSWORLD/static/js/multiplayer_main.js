function main_mult() {
  // app.renderer.view.classList.add("border", "border-black", "shadow");
  document.getElementById("tsparticle").style.visibility = "hidden";
  // ............creating a stage to keep all  things ......................................................
  app.stage.removeChild(gameSelectCont);
  ExitFlag = false;

  // app.renderer.view.style.opacity = "0";
  // app.renderer.view.style.transform = " scale(0.5)";
  // app.renderer.view.style.transformOrigin = "center center";
  // onLoadTime = setTimeout(() => {
  //   app.renderer.view.style.transform =
  //     " scale(" + window.innerHeight / appHeight + ")  "; //  implemented transion effet
  //   app.renderer.view.style.transformOrigin = " center center ";
  //   app.renderer.view.style.transition = " 1s ";
  //   app.renderer.view.style.transitionTimingFunction = " linear ";
  //   app.renderer.view.style.left = window.innerWidth / 2 - AppWidth / 2 + "px";
  //   app.renderer.view.style.top = window.innerHeight / 2 - appHeight / 2 + "px";
  //   app.renderer.view.style.opacity = "1";
  // }, 100);
  document.body.style.backgroundImage = "url(" + wordimage2.src + ")";
  document.body.style.backgroundSize = "cover";

  document.body.style.width = "0px"; //window.innerWidth+"px"
  document.body.style.height = "0px"; //window.innerHeight+"px"
  // app.renderer.view.style.backgroundImage =  "url(" + wordimage2.src + ")"; //"url("+wordimage2.src+")";
  app.renderer.view.style.backgroundSize = "cover";

  setTimeout(() => {
    fitCanvas();
  }, 700);
  //.............................................stage creation ENDED.......................................
  // ..................creating points table ...............................................................
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
  pointsContainer.y = -185-35;
  pointsContainer.x = 120-230;

  top_bar_container.addChild(pointsContainer);

  // ............................................

  var pointsContainer_opp = new PIXI.Container();
  PointBench_opp = new PIXI.Graphics();
  PointBench_opp.beginFill(0x007fff, 1).drawRoundedRect(0, 0, 150, 30, 10);
  PointBench_opp.pivot.set(PointBench_opp.width, PointBench_opp.height / 2);
  PointBench_opp.x = 180 + PointsPosX;
  PointBench_opp.y = 270 + PointsPosY;

  PointstextVal_opp = new PIXI.Text("0", { fill: "white", fontSize: "20px" });
  PointstextVal_opp.anchor.set(1, 0.5);
  PointstextVal_opp.x = 155 + PointsPosX;
  PointstextVal_opp.y = 270 + PointsPosY;

  profile_bg_opp = new PIXI.Graphics();
  profile_bg_opp.beginFill(0x0ffff0, 1).drawCircle(0, 0, 25);
  profile_bg_opp.pivot.set(profile_bg_opp.width, profile_bg_opp.height / 2);
  profile_bg_opp.x = PointstextVal_opp.x - PointstextVal_opp.width - 70; //PointBench_opp.x-PointBench_opp.width/2-32 //180 + PointsPosX;##FFA500
  profile_bg_opp.y = 270 + PointsPosY + PointBench_opp.height / 2 + 10;

  profiletext_opp = new PIXI.Text("M", {
    fill: "black",
    fontSize: "25px",
    dropShadow: true,
    dropShadowColor: "white",
    dropShadowDistance: 2,
  });
  profiletext_opp.anchor.set(0.5, 0.5);
  profiletext_opp.x = profile_bg_opp.x - 50; //190 + PointsPosX;
  profiletext_opp.y = 270 + PointsPosY;

  Pointstext_opp = new PIXI.Text("POINTS :", {
    fill: "white",
    fontSize: "20px",
  });
  Pointstext_opp.anchor.set(1, 0.5);
  Pointstext_opp.x = PointstextVal_opp.x - PointstextVal_opp.width - 5; //190 + PointsPosX;
  Pointstext_opp.y = 270 + PointsPosY;

  pointsContainer_opp.addChild(
    PointBench_opp,
    Pointstext_opp,
    PointstextVal_opp,
    profile_bg_opp,
    profiletext_opp
  );
  pointsContainer_opp.y = -185;
  pointsContainer_opp.x = -750;

  top_bar_container.addChild(pointsContainer_opp);

  //..............................................
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
  });

  ClearBut.on("pointerup", function () {
    ClearBut.scale.x = 0.2;
    ClearBut.scale.y = 0.2;
    // this.deleteFun()

    // del_snd = new Audio("static/sounds/del_snd.wav");
    del_snd.play();
    
    Mult_Main.deleteFun();
  });

  Exitfun(70+350, top_bar.height / 4);
  function Exitfun(posX, posY) {
    ExitBut = PIXI.Sprite.from("../static/image/ExitBut_img.png");
    ExitBut.x = posX;
    ExitBut.y = posY-35;
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
  Qntext = new PIXI.Text("Loading...", {
    fill: "white",
    fontSize: 30,
    wordWrap: true,
    wordWrapWidth: AppWidth / 2,
    align: "center",
    fontWeight:"bold",
    dropShadow:true,
    dropShadowAlpha:0.3   
  });
  Qntext.anchor.set(0.5, 0.5);
  Qntext.x = 1350 / 2;
  Qntext.y = 130;
  app.stage.addChild(Qntext);
  //....................creating function that used to create all letters for the game .....................
  this.CreateShuffledLetters = function (qntxt, ans) {
    HideWin();
    app.stage.interactiveChildren = true;

    // ......................qn text creation...............................................................
    Qntext.text = qnNumber + 1 + ". " + qntxt;
 let TotalHeight = 0;
    let statingYpos = 0;
    //.............. creating shuffled letter shapes to see in stage ........................................
function placeLettersCentered(letters, screenWidth, screenHeight, gapX, gapY, createShapeFn) {
    let total = letters.length;

    // Best-fit columns (close to square, but capped at 6)
    let cols = Math.ceil(Math.sqrt(total));
    cols = Math.min(cols, 6);

    // Rows needed
    let rows = Math.ceil(total / cols);
    TotalHeight = rows;
    // Calculate grid total width & height
    let gridWidth = (cols - 1) * gapX;
    let gridHeight = (rows - 1) * gapY;

    // Top-left starting point so grid is centered
    let startX = (screenWidth - gridWidth) / 2;
    let startY = (screenHeight - gridHeight) / 2;
    statingYpos = startY;
    let map = {};
    let i = 0;

    for (let row = 0; row < rows; row++) {
        // How many letters in this row
        let lettersInRow = (row === rows - 1) 
            ? total - i 
            : cols;

        // Calculate centering offset for last row
        let rowWidth = (lettersInRow - 1) * gapX;
        let offsetX = (gridWidth - rowWidth) / 2;

        for (let col = 0; col < lettersInRow; col++) {
            let x = startX + col * gapX + offsetX;
            let y = startY + row * gapY;

            map["name_" + i] = createShapeFn(letters[i], x, y, 1, this, i);
            i++;
        }
    }

    return map;
}

// Example usage:
 map = placeLettersCentered(
    ShuffleArr,
    1366, // Screen width
    440,  // Screen height
    80,   // X gap between letters
    80,   // Y gap between letters
    LetterAndShape.bind(this)
);



    //.................. creating empty shapes to let the user to fill  .....................................
    var AnsAllshape = new PIXI.Container();
    AnsAllshape.x = shapeAll.x;
    AnsAllshape.pivot.x = shapeAll.x / 2;
    Yval = (TotalHeight)*80+statingYpos+30
    decval = 0;
    for (index = 0; index < SpaceInfo.length; index++) {
      setBlankboxes(SpaceInfo[index] - decval, Yval);
      decval = SpaceInfo[index];
      SpaceInfo[index];
      Yval += 80;
    }

function setBlankboxes(Anslength1, Yval) {
    let maxPerRow = 9;            // max letters allowed visually per row
    let baseBoxSize = 65;         // your original box spacing
    let rowWidth = Anslength1 * baseBoxSize;

    // If row is too long, calculate a shrink scale
    let scaleFactor = 1;
    if (Anslength1 > maxPerRow) {
        rowWidth = maxPerRow * baseBoxSize;
        scaleFactor = (maxPerRow / Anslength1); // shrink to fit
    }

    for (let k = 0; k < Anslength1; k++) {
        let x = AppWidth / 2 - (rowWidth / 2) + k * baseBoxSize * scaleFactor;

        map2["shape_" + k] = LetterAndShape(
            "",
            x-10,
            Yval,
            0,
            this,
            k
        );

        // Scale the letter box if needed
        map2["shape_" + k].scale.set(scaleFactor);
        map2["shape_" + k].scaleFactor = scaleFactor

        AnsShapeArr.push(map2["shape_" + k]);

        // Position clear button relative to row
        ClearBut.x = AppWidth / 2;
        ClearBut.y = map2["shape_" + k].y + 225;
    }
}
  };
  //.........................................................................................................

  document.addEventListener("keypress", keyEventFun, false);
  document.onkeydown = function (event) {
    var key = event.keyCode || event.charCode;
    if (key == 8 || key == 46) Mult_Main.deleteFun();
  };
 
  this.deleteFun = function () {
    if (count > 0 && count <= Anslength) {
     UserAnsarr.pop();
     deleteObj =  UserAnsarr1.pop();
      letterBgArr.pop();
      count -= 1;
      Interactiveflag = false; 
      if(deleteObj.index)Parent.EnableBtn(map["name_" + deleteObj.index])

      Mult_Main.AnswerPlace("");
    }
  };

  this.letterListener = function (txt_obj,index=null) {
    txt = txt_obj.Innertext;
    txt_obj.index = index;

    if (count >= 0 && count < Anslength) {
      Interactiveflag = true;
      // box_click = new Audio("static/sounds/box_click.wav");
      box_click.play();

      UserAnsarr.push(txt);
  UserAnsarr1.push(txt_obj);

      // count += 1;

      Mult_Main.AnswerPlace(txt);
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
  this.EnableBtn = (btn) => {
    btn.alpha = 1;
    btn.scale.set(1);
    btn.interactive = true;
  };
  // ..... this function will be activated when user clicks any letter and it will add text to empty space...

  this.AnswerPlace = function (text) {
    // console.log(AnsShapeArr[count].x,"AnsShapeArr")
    console.log(count, "count");
    map2["shape_" + count] = LetterAndShape(
      text,
      AnsShapeArr[count].x,
      AnsShapeArr[count].y,
      2,
      this,
      null,
      AnsShapeArr[count].scaleFactor
    );
    // if(!text){
    //   if(count>0){
    //     count -= 1;
    //   }
    // }else{
    //   if(count<Anslength){
    //     count += 1;
    //   }
    // }

    socket.send(
      JSON.stringify({
        type: "highlight",
        index: count,
        action: text ? "show_HL" : "hide_HL",
        userId: UserId,
      })
    );

    if (count == Anslength - 1 && text) {
      UserAnsarr.forEach((element) => {
        UserAnsText = UserAnsText + String(element);
      });
app.stage.interactiveChildren = false;

      //..................to verify if user ans is correct or wrong.........................................
      console.log(UserId, "UserId");
      socket.send(
        JSON.stringify({
          type: "check_answer",
          userAns: UserAnsText,
          qnCount: qnCount,
          userId: UserId,
        })
      );
    }
    // count -= 1;
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
    // WinTime = setTimeout(() => {
    //   HideWin();
    // }, 1000);
  }
  function HideWin() {
    winpopupContainer.visible = false;
  }
  // ...................to call next qn and reset all the value at initial state............................
  function ResetAll() {
    letterBgArr.forEach((element) => {
      element.tint = "white";
    });
    shapeAll.children = [];
    letterHighlight_arr = [];
    UserAnsText = "";
    UserAnsarr = [];
  UserAnsarr1 = [];

    AnsShapeArr = [];
    positionX = 0;
    positionY = 0;
    count = 0;
    Mult_Main.CreateShuffledLetters(QnsArr[qnCount], AnsArr[qnCount]);
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

  if (true) {
    timeBench = new PIXI.Graphics();
    timeBench.beginFill(0xffffff, 0.7).drawRoundedRect(0, 0, 120, 39);
    timeBench.pivot.set(timeBench.width / 2, timeBench.height / 2);
    timeBench.x = top_bar.width / 2;
    timeBench.y = top_bar.height / 4-35;
    console.log(timeBench);

    // timeBench.style.fill = 0xffffff

    Timetext = new PIXI.Text("YOUR TIME", { fill: "white", fontSize: "25px" });
    Timetext.anchor.set(0.5, 0.5);
    Timetext.x = 193 + TimePosX;
    Timetext.y = 100 + TimePosY-35;

    TimetextVal = new PIXI.Text("0", { fill: "white", fontSize: "25px" });
    TimetextVal.anchor.set(0.5, 0.5);
    TimetextVal.x = top_bar.width / 2; //193 + TimePosX;
    TimetextVal.y = top_bar.height / 4-35; //130 + TimePosY;
    top_bar_container.addChild(timeBench, TimetextVal);
    // top_bar_container.addChild(timeBench, Timetext, TimetextVal);

    //...............Interval to create time duration..........................................................
  }

  this.websocker_receivefun = (data) => {

    if (data.type == "sync_time") {
      timeCount = data.time;
      timeCount1 = String(timeCount).leftJustify(2, "0");
      TimetextVal.text = "00:00:" + timeCount1;
      if (timeCount < 6) {
        timeBench.tint = 0xff0000;
      } else {
        timeBench.tint = 0x00ff00;
      }
    }
    if (data.type == "next_qn") {
      qnCount = data.QnCount;
      qnNumber = data.Qn_number;
      ShuffleArr = data["shuffled_letters"].split(",");
      Anslength = Number(data.length);
      SpaceInfo = data.spaceInfo;
      console.log(ShuffleArr, "ShuffleArr");

      // Mult_Mult_Main.CreateShuffledLetters(QnsArr[qnCount], AnsArr[qnCount]);
      ResetAll();
    }
    if (data.type == "game_end") {
      console.log("game end");
      let clickEvent1 = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      // Dispatch the click event to the button element
      document.getElementById("result_popup-btn").dispatchEvent(clickEvent1);
      document.getElementById("total_qns").textContent = QnsArr.length;
      document.getElementById("Answered").textContent = pointval+pointval_opp;
      document.getElementById("missed").textContent = QnsArr.length-(pointval+pointval_opp);
      document.getElementById("user_1_points").textContent = pointval;//+pointval_opp;
      document.getElementById("user_2_points").textContent = pointval_opp;
      if(pointval>pointval_opp){
        document.getElementById("winner").textContent = "YOU";
      }else if(pointval==pointval_opp){
      document.getElementById("winner").textContent = "DRAW";
      }else{
      document.getElementById("winner").textContent = "OPPONENT";
      }
      preload();
      websocket.close();
  
    }

    if (data.type == "result") {
    console.log(data.ans,data.user_ans,"answer");

      if (data.result == "win") {
        if (data.winner == UserId) {
          pointval++;
          letterBgArr.forEach((element) => {
            console.log(element);
            element.tint = 0x00ff00;
          });
          // PointstextVal.text = ""+pointval;
          console.log(pointval, "pointval");

          PointBench.width = PointBench.width - PointstextVal.width;
          PointstextVal.text = "" + pointval;
          PointBench.width = PointBench.width + PointstextVal.width;
          Pointstext.x = PointstextVal.x - PointstextVal.width - 5; //190 + PointsPosX;

          profile_bg.x = PointstextVal.x - PointstextVal.width - 70; //PointBench.x-PointBench.width/2-32 //180 + PointsPosX;##FFA500
          profiletext.x = profile_bg.x - 50; //190 + PointsPosX;
          // win_snd = new Audio("static/sounds/win_snd.wav");
          win_snd.play();
          showWin("Great Job :)!");
        } else {
          pointval_opp++;
          // PointstextVal_opp.text = ""+pointval_opp

          PointBench_opp.width = PointBench_opp.width - PointstextVal_opp.width;
          PointstextVal_opp.text = "" + pointval_opp;
          PointBench_opp.width = PointBench_opp.width + PointstextVal_opp.width;
          Pointstext_opp.x = PointstextVal_opp.x - PointstextVal_opp.width - 5; //190 + PointsPosX;

          profile_bg.x = PointstextVal_opp.x - PointstextVal_opp.width - 70; //PointBench_opp.x-PointBench_opp.width/2-32 //180 + PointsPosX;##FFA500
          profiletext_opp.x = profile_bg.x - 50; //190 + PointsPosX;
          // loss_snd = new Audio("static/sounds/loss_snd.wav");
          loss_snd.play();
          showWin("You Lost :(");
        }
      } else {
        letterBgArr.forEach((element) => {
          console.log(element);
          element.tint = 0xff0000;
        });
        // alert(data.result)
        socket.send(JSON.stringify({ type: "highlight_All", userId: UserId }));
        // loss_snd = new Audio("static/sounds/loss_snd.wav");
        loss_snd.play();

        showWin("Try Again!!");

        setTimeout(() => {
          ResetAll();
          // shapeAll.children = [];
          // UserAnsText = "";
          // UserAnsarr = [];
          // AnsShapeArr = [];
          // positionX = 0;
          // positionY = 0;
          // count = 0;
          // Mult_Main.CreateShuffledLetters(QnsArr[qnCount], AnsArr[qnCount]);
        }, 500);
      }
    }
    if (data.type == "stop_timer_req") {
      console.log("stop_timer_req");
      socket.send(JSON.stringify({ type: "stop_timer" }));
    }

    if (data.type == "highlight") {
      Hightlight_Index = data.index;
      if (data.userId != UserId) {
        if (data.action == "show_HL") {
          letterHighlight_arr[Hightlight_Index].alpha = 1;
        } else {
          letterHighlight_arr[Hightlight_Index].alpha = 0;
        }
      }
    }

    if (data.type == "highlight_All") {
      // Hightlight_Index = data.index;
      console.log(data, UserId, "highlight_All");
      if (data.userId != UserId) {
        letterHighlight_arr.forEach((element) => {
          element.alpha = 0;
        });
        // if(data.action=="show_HL"){
        //   letterHighlight_arr[Hightlight_Index].alpha=1;
        // }else{
        //   letterHighlight_arr[Hightlight_Index].alpha=0;
        // }
      }
    }
  };

  Mult_Main = this;
  Parent = Mult_Main;
}
//...........................................................................................................
