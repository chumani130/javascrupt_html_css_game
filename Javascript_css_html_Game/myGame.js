function startGame() {

    myGameArea.start();
  
  }
  
  var myGameArea = {
  
    canvas : document.createElement("canvas"),
  
    start : function() {
  
  this.canvas.width = 480;
  
  this.canvas.height = 270;
  
  this.context = this.canvas.getContext("2d");
  
  document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  
    }
  
  }
  var myGamePiece;

function startGame() {

  myGameArea.start();

  myGamePiece = new component(30, 30, "red", 10, 120);

}

function component(width, height, color, x, y) {

  this.width = width;

  this.height = height;

  this.x = x;

  this.y = y;

  ctx = myGameArea.context;

  ctx.fillStyle = color;

  ctx.fillRect(this.x, this.y, this.width, this.height);

}
var myGameArea = {

    canvas : document.createElement("canvas"),
  
    start : function() {
  
   this.canvas.width = 480;
  
   this.canvas.height = 270;
  
   this.context = this.canvas.getContext("2d");
  
   document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  
   this.interval = setInterval(updateGameArea, 20);
  
    },
  
    clear : function() {
  
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
    }
  
  }
  
  function component(width, height, color, x, y) {
  
    this.width = width;
  
    this.height = height;
  
    this.x = x;
  
    this.y = y;
  
    this.update = function(){
  
   ctx = myGameArea.context;
  
   ctx.fillStyle = color;
  
   ctx.fillRect(this.x, this.y, this.width, this.height);
  
    }
  
  }
  
  function updateGameArea() {
  
    myGameArea.clear();
  
    myGamePiece.update();
  
  }
  function updateGameArea() {

    myGameArea.clear();
  
    myGamePiece.x += 1;
  
    myGamePiece.update();   // example
  

  }
  function updateGameArea() {

    // myGameArea.clear();
  
    myGamePiece.x += 1;
  
    myGamePiece.update();
  
  }
  function startGame() {

    myGameArea.start();
  
    myGamePiece = new component(140, 10, "red", 10, 120);
  
  }
  function startGame() {

    myGameArea.start();
  
    myGamePiece = new component(30, 30, "blue", 10, 120);
  
  }
  function startGame() {

    myGameArea.start();
  
    myGamePiece = new component(30, 30, "red", 2, 2);
  
  }
  var redGamePiece, blueGamePiece, yellowGamePiece;

function startGame() {

  redGamePiece = new component(75, 75, "red", 10, 10);

  yellowGamePiece = new component(75, 75, "yellow", 50, 60);

  blueGamePiece = new component(75, 75, "blue", 10, 110);

  myGameArea.start();

}

function updateGameArea() {

  myGameArea.clear();

  redGamePiece.update();

  yellowGamePiece.update();

  blueGamePiece.update();

}
function updateGameArea() {

    myGameArea.clear();
  
    redGamePiece.x += 1;
  
    yellowGamePiece.x += 1;
  
    yellowGamePiece.y += 1;
  
    blueGamePiece.x += 1;
  
    blueGamePiece.y -= 1;
  
    redGamePiece.update();
  
    yellowGamePiece.update();
  
    blueGamePiece.update();
  
  }
  function stopMove() {

    myGamePiece.speedX = 0;
  
    myGamePiece.speedY = 0;
  
  }
  