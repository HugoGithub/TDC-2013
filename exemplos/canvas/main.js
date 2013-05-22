window.onload = init;
  
// As an optimization, make "context" a global variable that is only set once.
var context;
  
function init(){
  context = document.getElementById('canvas').getContext('2d');    
  window.requestAnimationFrame(draw);
} // init

function draw() {
  // Save the canvas state.
  context.save();         
  
  // context.clearRect(0, 0, 160, 160);

  // centers the image on the canvas             
  context.translate(80, 80); 
  
  // Rotate moves the spiraling circle around the canvas in a large orbit.
  var time = new Date();
  context.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  
  // Translate determines the location of the small circle.
  context.translate(50, 0);  
  
  // Rotate causes the circle to spiral as it circles around the canvas.
  context.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  
  // determines the size of the loop
  context.translate(0, 5);  
  
  // This draws the circle
  context.beginPath();
  context.arc(5, 5, 4, 0, Math.PI*2, true); 
  context.stroke();
  
  // Restores the canvas to the previous state
  context.restore();
  window.requestAnimationFrame(draw);
}  // draw