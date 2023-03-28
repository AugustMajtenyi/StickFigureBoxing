/** [p5.sound]  Version: 0.3.12 - 2020-01-06 */ 
function preload() {
    P1a = loadImage('images/StickFigureBoxing/Player1_position1.png');
    P2a = loadImage('images/StickFigureBoxing/Player1_position2.png');
    P3a = loadImage('images/StickFigureBoxing/Player1_position3.png');
    P4a = loadImage('images/StickFigureBoxing/Player1_position4.png');
    P5a = loadImage('images/StickFigureBoxing/Player1_position5.png');
    P6a = loadImage('images/StickFigureBoxing/Player1_position6.png');
    P1b = loadImage('images/StickFigureBoxing/Player2_position1.png');
    P2b = loadImage('images/StickFigureBoxing/Player2_position2.png');
    P3b = loadImage('images/StickFigureBoxing/Player2_position3.png');
    P4b = loadImage('images/StickFigureBoxing/Player2_position4.png');
    P5b = loadImage('images/StickFigureBoxing/Player2_position5.png');
    P6b = loadImage('images/StickFigureBoxing/Player2_position6.png');
    Background = loadImage('images/StickFigureBoxing/SFB_Background.png')
    BP1 = loadSound('sounds/bodyPunch1.mp4')
    BP2 = loadSound('sounds/bodyPunch2.mp4')
    Block = loadSound('sounds/blockedPunch1.mp4')
    FightSound = loadSound('sounds/boxingBell1.mp4')
    //KnockoutSound = loadSound('sounds/boxingBell3.mp4')
    // crowdCheering = loadSound('crowdCheering2.mp4')
    //backgroundMusic = loadSound('backgroundMusic1.mp4')
  }
  
  let imageToDrawA
  let imageToDrawB
  let canMoveA = false
  let canMoveB = false
  let shownImageA = 0
  let shownImageB = 0
  let HealthA = 140
  let HealthB = 140
  let gameOver = 1
  let startScreen = true
  let PvP = false
  let PvC = false
  let button
  let button1
  let button2
  let resetButton
  let bodyShotsA = 0
  let bodyShotsB = 0
  let headShotsA = 0
  let headShotsB = 0
  let BlocksA = 0
  let BlocksB = 0
  let textShown
  let AImove
  let ruleScreen = false
  
  
  function setup() {
    imageToDrawA = [P1a,P2a,P3a,P4a,P5a,P6a]
    imageToDrawB = [P1b,P2b,P3b,P4b,P5b,P6b]
        
    //let canvas = document.getElementById("myCanvas");
    //let p5Canvas = createCanvas(canvas.width, canvas.height);
    //let canvas = createCanvas(800, 500);
    //canvas.("myCanvas"); // Link the canvas to the <canvas> element in the HTML
    //createCanvas(800, 500).("myCanvas")
    createCanvas(800, 500);
        canvas.style = "position:absolute; left: 50%; width: 800px; margin-left: -400px; margin-top: -750px";
    createButtons()
        //button.style = "position:absolute; left: 50%; width: 180px; margin-left: -90px; margin-top: 300px";

  }
  
  function draw() {
    if (startScreen) {
        startOfGame ();
    } 
    if (ruleScreen) {
        ruleSheet()
    } 
    if (PvP) {
          background(220);
          image(Background,-10,250,820,250)
          showText();
          showFightKeys1()
          showFightKeys2()
          showPlayer();
          showHealth();
          checkForDeath();
    } if (PvC) {
          background(220);
          image(Background,-10,250,820,250)
          showText();
          showPlayer();
          showFightKeys1()
          showHealth();
          checkForDeath();
          computerMakesMove()
    }
  }
  
  function showPlayer() {
    image(imageToDrawA[shownImageA],220,80,250,400)
    image(imageToDrawB[shownImageB],335,80,250,400)
  }
  
  
  function keyPressed() {
     if (keyCode === 83) { //KeyS
        if (PvP || PvC) {
        if (canMoveA === true) {
          canMoveA = false
          shownImageA = 1
          setTimeout(bodyShotA1,200);
          setTimeout(bodyShotA2,330);
          setTimeout(bodyShotA3,600);
          // setTimeout(shownImageA = 0, 600);
          // setTimeout(canMove = true, 600);
        }
        }
     }
     if (keyCode === 87) { //KeyW
        if (PvP || PvC) {
        if (canMoveA === true) {
          canMoveA = false
          shownImageA = 1
          setTimeout(headShotA1,200);
          setTimeout(headShotA2,400);
          setTimeout(headShotA3,550);
          setTimeout(headShotA4,800);
          setTimeout(headShotA5,1000);
          // setTimeout(shownImageA = 0, 600);
          // setTimeout(canMove = true, 600);
        }
       }
      }
      
     // if (keyCode === 65) { //KayA
     //    if (canMoveA === true) {
     //      canMoveA = false
     //      shownImageA = 5
     //      setTimeout(handsUpA1,400)
     // }
     //}
    if (keyCode === 76) { //KeyL
      if(PvP) {
        if (canMoveB === true) {
          canMoveB = false
          shownImageB = 1
          setTimeout(bodyShotB1,200);
          setTimeout(bodyShotB2,330);
          setTimeout(bodyShotB3,600);
          // setTimeout(shownImageA = 0, 600);
          // setTimeout(canMove = true, 600);
        }
      }
     }
     if (keyCode === 79) { //KeyO
       if(PvP) {
        if (canMoveB === true) {
          canMoveB = false
          shownImageB = 1
          setTimeout(headShotB1,200);
          setTimeout(headShotB2,400);
          setTimeout(headShotB3,550);
          setTimeout(headShotB4,800);
          setTimeout(headShotB5,1000);
          // setTimeout(shownImageA = 0, 600);
          // setTimeout(canMove = true, 600);
        }
       }
     }
      // if (keyCode === 39) { //RightArrow
      //    if (canMoveB === true) {
      //      canMoveB = false
      //      shownImageB = 5
      //      setTimeout(handsUpB1,400)
      //    }
      // }
      
  }
  
  
  //Animations for PlayerA
  function waitA() {
    shownImageA = 1
  }
  function bodyShotA1() {
    if (PvP || PvC){
      BP2.play()
    }
    shownImageA = 2
    causeBodyDamageA ()
  }
  function bodyShotA2() {
    shownImageA = 1
  }
  function bodyShotA3() {
    shownImageA = 0
    canMoveA = true
    if (gameOver === 0) {
        FightSound.play()
    }
  } 
  
  function headShotA1() {
    shownImageA = 3
  }
  function headShotA2() {
    shownImageA = 4
    causeHeadDamageA ()
  }
  function headShotA2() {
    shownImageA = 4
    causeHeadDamageA ()
  }
  function headShotA3() {
    shownImageA = 3
  }
  function headShotA4() {
    shownImageA = 1
  }
  function headShotA5() {
    shownImageA = 0
    canMoveA = true
    if (gameOver === 0) {
        FightSound.play()
    }
  }
  
  function handsUpA1() {
    shownImageA = 0
    canMoveA = true
  }
  
  //Animations for PlayerB
  function bodyShotB1() {
    BP2.play()
    shownImageB = 2
    causeBodyDamageB ()
  }
  function bodyShotB2() {
    shownImageB = 1
  }
  function bodyShotB3() {
    shownImageB = 0
    canMoveB = true
    if (gameOver === 0) {
        FightSound.play()
    }
  } 
  
  function waitB() {
    shownImageB = 1
  }
  function headShotB1() {
    shownImageB = 3
  }
  function headShotB2Fake() {
    shownImageB = 4
  }
  function headShotB2() {
    shownImageB = 4
    causeHeadDamageB ()
  }
  function headShotB3() {
    shownImageB = 3
  }
  function headShotB4() {
    shownImageB = 1
  }
  function headShotB5() {
    shownImageB = 0
    canMoveB = true
    if (gameOver === 0) {
        FightSound.play()
    }
  }
  
  function handsUpB1() {
    shownImageB = 0
    canMoveB = true
  }
    
    
  function showHealth () {
      //Health Measure Containers
      strokeWeight(50)
      stroke(0)
      strokeCap(SQUARE);
      line(100,55,100,203)
      line(700,55,700,203)
      strokeWeight(0)
      rectMode(CORNER)
      fill(255,35,0)
      rect(75,205,50,10)
      fill(238,166,0)
      rect(675,205,50,10)
           
      //HealthMeasure
      strokeWeight(44)
      stroke(22,188,22)
      line(100, (200 - HealthA),100, 200)
      line(700, (200 - HealthB),700, 200)
  }
  
  
  function causeBodyDamageA () {
      HealthB = HealthB - (5 * gameOver)
      bodyShotsA = bodyShotsA + 1
  }
  
  function causeBodyDamageB () {
      HealthA = HealthA - (5 * gameOver)
      bodyShotsB = bodyShotsB + 1
    
  }
  
  function causeHeadDamageA () {
    if (canMoveB === true) {
      Block.play()
      DamageA = 0
      shownImageB = 5
      BlocksB = BlocksB + 1
    } else {
      BP1.play()
      DamageA = 1
      headShotsA = headShotsA + 1
    }
    HealthB = HealthB - (DamageA * 15 * gameOver)
  }
  
  function causeHeadDamageB () {
    if (canMoveA === true) {
      Block.play()
      DamageB = 0
      shownImageA = 5
      BlocksA = BlocksA + 1
    } else {
      if (PvP || PvC) {
        BP1.play()
      }
      DamageB = 1
      headShotsB = headShotsB + 1
    }
    HealthA = HealthA - (DamageB * 15 * gameOver)
  }
  
  function checkForDeath() {
    if (HealthA < 1) {
        HealthA = 0
        canMoveA = false
        canMoveB = false
        gameOver = 0
        textShown = 'Gold Gloves Wins!'
        showStats()    
    }
    if (HealthB < 1) {
        HealthB = 0
        canMoveA = false
        canMoveB = false
        gameOver = 0
        textShown = 'Red Gloves Wins!'
        showStats()   
    }
  }
  
  
  function startOfGame () {
    if (startScreen) {
        canMoveA = false
        canMoveB = false
        HealthA = 140
        HealthB = 140
        textShown = "Stick Figure Boxing"
        fill(255)
        noStroke()
        rectMode(CORNER)
        rect(0,0,800,500)
        textSize(60);
        fill(0)
        strokeWeight(0)
        textAlign(CENTER);
        text(textShown, 400, 60);
        image(imageToDrawA[0],130,80,250,400)
        image(imageToDrawB[0],415,80,250,400)
        
    }
    
  }
  
  function start1PlayerGame () {
      startScreen = false
      console.log("started PvC")
      button.remove ()
      button1.remove ()
      button2.remove ()
      startFight ()
      PvC = true
  }
  
  function start2PlayerGame () {
      startScreen = false
      console.log("started PvP")
      button.remove ()
      button1.remove ()
      button2.remove ()
      startFight ()
      PvP = true
  }
  
  function createButtons() {
      button = createButton('Player v Player Game');
      button.size(180,50)
      //button2.position(310, 295);
      button.position($(window).width()/2 - 90,340+295)
      //button.style = "{position: absolute; width: 180px; Height: 50px; left: 50%; transform: translateX(-50%)}";
      button.mousePressed(start2PlayerGame);
  
      button1 = createButton('Player v Bot Game');
      button1.size(180,50)
      //button1.position(310, 225);
      button1.position($(window).width()/2 - 90,340+225)
      button1.mousePressed(start1PlayerGame);
    
      button2 = createButton('How To Play');
      button2.size(180,25)
      //button2.position(310, 400);
      button2.position($(window).width()/2 - 90,340+400)
      button2.mousePressed(showRules);    
  }
  
  function startFight () {
        textShown = ""
        setTimeout(startFight3,500);
        setTimeout(startFight2,1500);
        setTimeout(startFight1,2500);
        setTimeout(startFightGo,3500);
  }
  
  function startFight3 () {
        noStroke()
        textShown = "3..."
  }
  function startFight2 () {
        noStroke ()
        textShown = "2..."
  }
  function startFight1 () {
        noStroke()
        textShown = "1..."
  }
  function startFightGo() {
        FightSound.play()
        textShown = "Fight!"
        canMoveA = true
        canMoveB = true
          resetButton = createButton('Back to Start Screen');
          resetButton.size(180,25)
          //resetButton.position(310, 500);
          resetButton.position($(window).width()/2 - 90,340+500)
          resetButton.mousePressed(resetGame); 
  }
  
  function resetGame () {
      resetButton.remove()
      PvP = false
      PvC = false
      ruleScreen = false
      startScreen = true
      setTimeout(createButtons,333)
      gameOver = 1
      bodyShotsA = 0
      bodyShotsB = 0
      headShotsA = 0
      headShotsB = 0
      BlocksA = 0
      BlocksB = 0
  }
  
  function showText () {
        fill(0)
        strokeWeight(0)
        textSize(60)
        textAlign(CENTER);
        text(textShown, 400, 60);
  }
  
  function showStats () {
      //showStats
      fill(0)
      textSize(20)
      strokeWeight(0)
      textAlign(LEFT)
      text('Body Blows: ' + bodyShotsA, 135, 95)
      text('Head Shots: ' + headShotsA, 135,135)
      text('Blocks: ' + BlocksA, 135,175)
    
      textAlign(RIGHT)
      text('Body Blows: ' + bodyShotsB, 665, 95)
      text('Head Shots: ' + headShotsB, 665,135)
      text('Blocks: ' + BlocksB, 665,175)
  }
  
  function computerMakesMove() {
      if (canMoveB) {
            AImove = random(50)
        if(AImove <1) {
            AIbodyShot ()
        } 
        if (AImove>49) {
            AIheadShot ()
        }
   
      }
  }
  
  function AIbodyShot () {
      if (canMoveB === true) {
          canMoveB = false
          shownImageB = 1
          setTimeout(bodyShotB1,200);
          setTimeout(bodyShotB2,330);
          setTimeout(bodyShotB3,600);
      }
  }
  
  function AIheadShot () {
      if (canMoveB === true) {
          canMoveB = false
          shownImageB = 1
          setTimeout(headShotB1,200);
          setTimeout(headShotB2,400);
          setTimeout(headShotB3,550);
          setTimeout(headShotB4,800);
          setTimeout(headShotB5,1000);
      }
  }
  
  //NOT repeating ruleSheet function
  function showRules() {
      startScreen = false
      canMoveA = true
      canMoveB = true
      ruleScreen = true
      button.remove ()
      button1.remove ()
      button2.remove ()
          resetButton = createButton('Back to Start Screen');
          resetButton.size(180,25)
          //resetButton.position(310, 500);
          resetButton.position($(window).width()/2 - 90,340+500)
          resetButton.mousePressed(resetGame); 
  
  }
  
  //repeating ruleSheet function
  function ruleSheet() {
      let bodyPunch
      fill(255)
      rectMode(CORNER)
      rect(0,0,800,500)
      textShown = 'Rules'
      showText ()
      textSize(33)
      textAlign(CENTER)
      text('Body Blows',200, 110)
      text('Head Shots',200,280)
      text("Deplete your Opponent's Health to Win!",400,465)
      textSize(20)
      textAlign(LEFT)
      text('Basic Damage (X1)',320,150)
      text('0.6 Seconds to Complete',320,180)
      text('Cannot be Blocked',320,210)
      text('Heavy Damage (X3)',320,320)
      text('1.0 Seconds to Complete',320,350)
      text('Can be Blocked',320,380)
      textSize(12)
      text('(Players naturally block head shots if they are not busy attacking)', 320, 400)
      text('S Key (Red Gloves)',80, 160)
      text('L Key (Gold Gloves)', 80, 190)
      text('W Key (Red Gloves)',80, 330)
      text('O Key (Gold Gloves)', 80, 360)
        image(imageToDrawA[shownImageA],220,120,75,120)
          if (canMoveA) {
            canMoveA = false
            setTimeout(waitA,1000)
            setTimeout(bodyShotA1,1200);
            setTimeout(bodyShotA2,1330);
            setTimeout(bodyShotA3,1600);
          }
        image(imageToDrawB[shownImageB],200,290,75,120)
          if (canMoveB === true) {
            canMoveB = false
            setTimeout(waitB,1000)
            setTimeout(headShotB1,1200);
            setTimeout(headShotB2Fake,1400);
            setTimeout(headShotB3,1550);
            setTimeout(headShotB4,1800);
            setTimeout(headShotB5,2000);
          } 
  }
  
  
  function showFightKeys1() {
      textSize(20)
      fill(255)
      strokeWeight(0)
      text('W',185,425)
      text('S',200,460)
      noFill()
      stroke(255)
      strokeWeight(1)
      rectMode(CENTER)
      square(185,417,30,5)
      square(200,452,30,5)  
    
  }
  
  
  function showFightKeys2() {
        
      textSize(20)
      fill(255)
      strokeWeight(0)
      text('O',605,425)
      text('L',620,460)
      noFill()
      stroke(255)
      strokeWeight(1)
      rectMode(CENTER)
      square(605,417,30,5)
      square(620,452,30,5)
    
  }
