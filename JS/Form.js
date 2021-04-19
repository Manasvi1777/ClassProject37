class Form
{
  constructor()
  {
    this.input = createInput("enter_name");
    this.title = createElement('h2');
    this.button = createButton("Start");
    this.greeting = createElement('h3');
  };
  Hide()
  {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
  display()
  {
      this.title.html("CAR RACING GAME");
      this.title.position(250,1);
           
      this.input.position(320,200);

      this.button.position(350,250);

      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();

          player.name = this.input.value();
          playerCount+=1;
          player.index=playerCount;
          player.update();;
          player.updateCount(playerCount);
          this.greeting.html("hello "+name);
          this.greeting.position(350,150)
      })  
  }
}