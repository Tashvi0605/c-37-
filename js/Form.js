class Form {
  constructor() {
    this.input=createInput("").attribute("placefolder","enter your name")
    this.titleimg=createImg("assets/title.png")
    this.playbutton=createButton("play")
    this.greeting=createElement("h1")
  }
setElementposition(){
this.titleimg.position(120,10)
this.input.position(width/2-110,height/2-80)
this.playbutton.position(width/2-110,height/2-20)
this.greeting.position(width/2-110,height/2-20)
}
setElementsStyle() { 
  this.titleimg.class("gameTitle");
 this.input.class("customInput");
  this.playbutton.class("customButton");
 this.greeting.class("greeting");
}
  
hide(){
  this.greeting.hide()
  this.playbutton.hide()
  this.input.hide()

}
handleMousepressed(){
this.playbutton.mousePressed(()=>{
  this.input.hide()
  this.playbutton.hide()
  var message=`hello! ${this.input.value()} wait for another player to join` 
  this.greeting.html(message)
})


}
display(){
this.setElementposition()
this.handleMousepressed()
this.setElementsStyle()
}

}
