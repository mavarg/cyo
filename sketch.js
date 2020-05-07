//The setup function only happens once

var stapler=0;
var color1=255
var color2=255
var color3=255

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
		
}

//The draw function happens over and over again
function draw() {
  background(color1,color2-153,color3-153); //an RGB color for the canvas' background
  textSize(15);
		textFont("Courier New");
		textStyle(ITALIC);
		textAlign(CENTER);
		text("Diminishing Returns", 250, 30);
		text("Press Any Key to Change Aesthetics", 250, 470);
  stroke(204,82,0) // an RGB color for the circle's border
  fill(color1,color2,color3,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,stapler+30,stapler+30); // center of canvas, 20px dia
}

function mousePressed() {
	if(stapler>300){
		stapler=stapler+1; //once the circle reaches a "large" size, growth will be extremely slow
	}else 
		if(stapler>200){
		stapler=stapler+5;} //if the circle is between its starting size and being "large," growth will be moderate
		else{stapler=stapler+15;}//to start off, growth will be large
}

function keyPressed() {
	color1=random(255); color2=random(255); color3=random(255) //all three RGB values are randomized upon key press
}
