var gameState=0,playerCount=0;
var database;
var form,game,player,allPlayers;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
   if (playerCount===4)
   {
     game.update(1)
   }
   if(gameState===1)
   {
       clear();
       game.play();
   }
}

