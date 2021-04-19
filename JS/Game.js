class Game
{
 constructor(){};
 getState()
 {
    var gs = database.ref("gameState");
    gs.on("value",function (data){
        gameState = data.val();
    })
 }

 update(states)
 {
     database.ref("/").update({
         'gameState':states
     })
 }
 async start()
 {
    if (gameState===0)
    {
        player=new Player();
        var playerCountRef = await database.ref('playerCount').once('value');
        if (playerCountRef.exists())
        {
            playerCount=playerCountRef.val();
            player.getCount();
        }
        form=new Form();
        form.display();
    }
 }
 play()
 {
     form.hide();
     textSize(20);
     text("Game Start",350,250);
     Player.getPlayersInfo();
     if (allPlayers!==undefined)
     {
         var y = 300;
         for (var i in allPlayers)
         {
           if (i==="player"+player.index)
           {
               fill("red");
           }else{
               fill("black");
           }
         y+=30;
         textSize(10);
         text(allPlayers[i].name+":"+allPlayer[i].distance,350,y);
        }
     }
     if (keyIsDown(UP_ARROW)&&player.index!==null)
     {
         player.distance+=50;
         player.update();
     }
 }
}