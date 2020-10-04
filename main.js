var canvas = document.createElement("CANVAS");
document.body.appendChild(canvas);
//Define CTX And Set Canvas Width/Height
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
//Variables
var menu = {
 x: 0,
 y: 0,
 width: 0,
 height: window.innerHeight,
};
var textX = -100;
var color = "#000000";
var loop = setInterval(draw, interval);
var interval = 1;
var pixelWidth = window.innerWidth / screen.width;
var pixelHeight = window.innerHeight / screen.height;
//Functions
function requirements(){
 scrollTo(10, 10);
 ctx.fillStyle = "orange";
 ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
 ctx.fillStyle = "black";
 pixelWidth = screen.width / window.innerWidth;
 pixelHeight = screen.height / window.innerHeight;
}
function checkMenu(event) {
 xCoordinate = event.clientX;
 yCoordinate = event.clientY;
 if(xCoordinate <= (38) && yCoordinate <= (38)){
   menu.width = 200;
   if(menu.width >= 200){
     menu.width = 200;
     color = "#FFFFFF";
     textX = 55;
   }
 }
 else if(xCoordinate > (200)){
   menu.width = 0;
   if(menu.width <= 0){
     menu.width = 0;
     color = "#000000";
     textX = -100;
   }
 }
}
function checkMenuClick(event){
  xCoordinate = event.clientX;
  yCoordinate = event.clientY;
  if (xCoordinate >= 55 && xCoordinate <= 137.24609375 && yCoordinate >= 100 &&menu.width > 0){
    console.log("hi");
  } 
}
CanvasRenderingContext2D.prototype.roundedRectangle = function(x, y, width, height, rounded) {
  const radiansInCircle = 2 * Math.PI
  const halfRadians = (2 * Math.PI)/2
  const quarterRadians = (2 * Math.PI)/4  
  
  // top left arc
  this.arc(rounded + x, rounded + y, rounded, -quarterRadians, halfRadians, true)
  
  // line from top left to bottom left
  this.lineTo(x, y + height - rounded)

  // bottom left arc  
  this.arc(rounded + x, height - rounded + y, rounded, halfRadians, quarterRadians, true)  
  
  // line from bottom left to bottom right
  this.lineTo(x + width - rounded, y + height)

  // bottom right arc
  this.arc(x + width - rounded, y + height - rounded, rounded, quarterRadians, 0, true)  
  
  // line from bottom right to top right
  this.lineTo(x + width, y + rounded)  

  // top right arc
  this.arc(x + width - rounded, y + rounded, rounded, 0, -quarterRadians, true)  
  
  // line from top right to top left
  this.lineTo(x + rounded, y)  
}
function clamp(a, left, right){
  if(a < left || a > right){
    return a;
  } else if (a >= left){
    return left;
  } else {
    return right;
  }
}
//Draw
function draw(){
 requirements();
 ctx.fillStyle = "red";
 ctx.fillRect(menu.x, menu.y, menu.width, menu.height);
 ctx.fillStyle = "black"
 ctx.strokeStyle = color;
 ctx.moveTo(13, 15);
 ctx.lineTo(38, 15);
 ctx.stroke();
 ctx.moveTo(13, 25);
 ctx.lineTo(38, 25);
 ctx.stroke();
 ctx.moveTo(13, 35);
 ctx.lineTo(38, 35);
 ctx.stroke();
 ctx.fillStyle = "white";
 ctx.font = "20px Arial";
 ctx.fillText("Favorites", textX, 100);
 ctx.fillText("Explore", textX, 150);
 ctx.fillText("Settings", textX, 200);
}
//Event Handlers
document.addEventListener("mousemove", checkMenu);
document.addEventListener("click", checkMenuClick);
