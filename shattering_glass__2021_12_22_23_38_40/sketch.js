

//setting the Var for colors to be used later on
var col = {
  r: 0,
  g: 0,
  b: 0,
};

// var for the various points to be used for my triangles
var randShape = {
  po1: 0,
  po2: 0,
  po3: 0,
  po4: 0,
  po5: 0,
  po6: 0,
  po7: 0,
  po8: 0,
};

//trying not to use hard numbers so this is the var for the background
var bgCol = {
  whiteBg: 255
}

var slider
var button
var input
var gOpacity



// Setting up a white background
function setup() {
  
  
  slider = createSlider(0,255,0,0.5);
  
  button = createButton("Opacity");
  
  button.mousePressed(glassOpacity);
  
  input = createInput("Text goes here");
  
  var p = createP("Shattering Glass");
  p.position(0,0)
  
  var p2 = createP("This is Shattering Glass! In this sketch, you can create random triangles by clicking and dragging the mouse! USe the text box to change the text that displays with your triangles. YOu can also use the slider to adjust the brightness of the triangles. The opacity button will give your triangles a random opactiy to spice them up a bit! Enjoy!")
  
  var canvas = createCanvas(700, 700);
  canvas.position(0,100)
  background(bgCol.whiteBg)
  
}

function glassOpacity(){
  gOpacity = random(0,255);
  print(gOpacity);
}


//within the draw function there is a lot going on
function draw() {

  let randomNum = random(0,255);

// below I'm using the mouse x & y to control the color of the shapes
  col.r = map(mouseX, 0, width, 0, 255);
  col.g = randomNum;
  col.b = map(mouseY, 0, width, 0, 255);

//Here I'm using random to generate the crazy triangles that follow the mouse pointer
  randShape.po1 = random(0, width);
  randShape.po2 = random(0, width);
  randShape.po3 = random(0, width);
  randShape.po4 = random(0, width);
  randShape.po5 = random(0, width);
  randShape.po6 = random(0, width);
  randShape.po7 = random(0, width);
  randShape.po8 = random(0, width);

// This is just to get rid of the stroke and color the triangles according to the mouse position

  
// this is where the shape is actually getting generated
  if(mouseIsPressed){
    text(input.value(),mouseX, mouseY);
    noStroke()
    fill(col.r + slider.value(), col.b + slider.value(), col.g + slider.value(), gOpacity);
    var glassBreaking = createElement("H1","SHATTERING GLASS")
    glassBreaking.position(0,900);
    beginShape();
    vertex(mouseX, mouseY);
    vertex(randShape.po3, randShape.po4);
    vertex(randShape.po5, randShape.po6);
    vertex(randShape.po7, randShape.po8);
    endShape(CLOSE);
    fill(col.b + slider.value(), col.g + slider.value(), col.r + slider.value(), gOpacity);
  }
  
  var resetText = " "
  
  if(isKeyPressed == true){
    resetText = createElement("H2","Glass reset!")
    resetText.position(0,950);
    createCanvas(700, 700);
    background(bgCol.whiteBg) 
  }

}