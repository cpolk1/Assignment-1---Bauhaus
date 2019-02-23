function setup() {
  //creates canvas size
  myCanvas = createCanvas(1024, 768);
  //pulls in the image of the piece used as inspiration for the code
  myCanvas.parent("Photogram");
}

function draw() {
  //assigns variables later used for location points
  var x;
  x = 620
  var y;
  y = 30
  //in order to create the grey rectangle loop in the background, adding another element to the original concept
  background(0);
  fill(63,100);
  for (var i = 120; i <400; i+=60) {
    rect(i, 240, i + 360, 480);
  }
  //Creating the first rectangle inwhich the other shapes sit on top of
  noFill();
  stroke(204);
  strokeWeight(9);
  quad(0, 550, 150, 740, 950, 234, 750, 200);
  //Creating the odd, X-like shape that appears ontop of the above rectangle
  beginShape();
  fill(204);
  vertex(120, 405);
  vertex(190, 390);
  vertex(175, 380);
  vertex(150, 280);
  vertex(300, 375);
  vertex(500, 290);
  vertex(620, 375);
  vertex(580, 390);
  vertex(610, 394);
  vertex(720, 485);
  vertex(400, 510);
  vertex(300, 565);
  endShape(CLOSE);
//Instead of stripes on the x like the original artwork, this creates a stripe that follows the mouse around making it more interactive.
  fill(0, 0, 224, 140);
  noStroke();
  rect(mouseX, mouseY, x, y);
  //Another interactive element, as the mouse is pressed, the outline on the cube below changes
  if (mouseIsPressed) {
   stroke(0);
 } else {
   fill(0, 0, 224, 140);
   noStroke();
 }
  //the following shapes build the cube like element
  rect(670, 50, 50, 250)
  fill(225);
  quad(750, 200, 680, 80, 890, 90, 950, 234)
  fill(204);
  noStroke();
  quad(890, 90, 1024, 0, 1024, 200, 950, 230)
  fill(102);
  noStroke();
  triangle(680, 80, 1024, 0, 890, 90)

}
