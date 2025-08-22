globalThis.__PIXI_APP__ = app;
function LetterAndShape(letter,X,Y,Identity,Parent,index=null){     
        //Number_btn
        this.lettercon = new PIXI.Container(); 
        tintclr = 0xFFFFFF;
        if(!letter){
          Number_btn1 = number_btn_empty;
        }else if(letter&&Identity==2){
          Number_btn1 = Number_btn;//Answer_btn;
          tintclr = 0xFFFFFF
        } else{
          Number_btn1 = Number_btn
        } 
        var myshape_BaseTexture = new PIXI.BaseTexture(Number_btn1);
        var myshape_Texture = new PIXI.Texture(myshape_BaseTexture);
        var myshape = PIXI.Sprite.from(myshape_Texture);
        myshape.anchor.set(0.5); 
        myshape.scale.set(0.29);

        var letter_highlight = new PIXI.Graphics()
        letter_highlight.beginFill(0xFFA500).drawRoundedRect(0,0,myshape.width-5,myshape.height-5,5)
        letter_highlight.pivot.set(myshape.width/2,myshape.height/2);
        letter_highlight.position.set(2.5,2.5);
        letter_highlight.alpha = 0;

        var txt = new PIXI.Text(letter,{ fill : "white",fontSize:45,fontWeight:"bold",dropShadow:true,dropShadowAlpha:0.3,dropShadowBlur:2})
        txt.anchor.set(0.5)
        txt.x =myshape.x-3
        txt.y = myshape.y
        this.lettercon.addChild(myshape,txt)
        this.lettercon.index = index; 

        this.lettercon.interactive = true
        this.lettercon.buttonMode = true
        this.lettercon.Innertext = letter
        // myshape.anchor.set(0.5)
        this.lettercon.x = X
        this.lettercon.y = Y
        if(!letter&&Identity!=2){
          this.lettercon.x = X + myshape.width/2
          letterHighlight_arr.push(letter_highlight); 
          this.lettercon.addChildAt(letter_highlight,0) 
        }
        if(Identity==1){
        myshape.scale.set(0.4); 
          this.lettercon.on("pointerdown", function (){ 
            Parent.letterListener(this,this.index)
            Parent.DisableBtn(this)
          })
          this.lettercon.on("pointerover", function (){
            this.scale.set(0.9);   
            del_snd.play(); 
          })
          this.lettercon.on("pointerout", function (){
            this.scale.set(1);
            // this.      
          })
        }else if(Identity==2&&letter){
          letterBgArr.push(myshape)
          this.lettercon.scale.set(2);
          setTimeout(() => {
          this.lettercon.scale.set(1); 
          myshape.tint = 0x5cff0aff;
          shapeAll.children.forEach(element => {
            element.scale.set(1); 
            //  "#429e14ff" 
          });
          }, 100);
     
        }
        shapeAll.addChild(lettercon); 
        return this.lettercon;
}