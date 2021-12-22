var song;
var slider;
var spectrum;
var amp;
var vol;
var diam;
var bg;
var visuals = [];

// Below I'm setting up the canvas and creating the single and using track4
function setup() {
  createCanvas(800,850);
  bg = loadImage("images/iamqtXwhoareu.jpg");
  loveYouTomorrow = new single();
  loveYouTomorrow.findSong("music/track4.mp3");
  amp = new p5.Amplitude();
  
//   for(let i = 0; i < 4; i++){
//     visuals[i] = new visualizer(i*200 +100,height/3,200,100)
//   }
  
   

}

// this function will only show the play button when the song is actually loaded
// Code comes from coding train video 17.2 and 17.4
function loaded(){
  // song.loop();
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

// toggle function for the play/pause button from coding train 17.4 
function togglePlaying(){
  if (!song.isPlaying()){
    song.play();
    button.html("pause");
  } else{
    song.pause();
    button.html("play");
  }
}

function mouseDragged(){
  if(mouseX<=width && mouseY <= height && mouseX >= 0 && mouseY >= 0){
      let s = random(10, 100)
    let r = random(0,255)
    let g = random(0, 255)
    let b = random(0, 255)
    let z = new visualizer(mouseX, mouseY, s, r, g, b, 0 )
  
    visuals.push(z);
  }


}

// creating the background and volume slider
function draw(){
  background(bg);
  
  song.setVolume(slider.value());
  
  for(let j = 0; j < visuals.length; j++){
    visuals[j].drawAmpEllipse()
    
    if(j>50){
      visuals.splice(0,1);
    }
  

  }
  
//   topLeft = new visualizer(width-width/3, height-height/3,400, 255, 255, 0 );
//   bottomLeft = new visualizer(width-width/3, height/3,400, 255, 0, 0 );
//   topRight = new visualizer(width/3, height -height/3, 400, 0, 255, 0 );
//   bottomRight = new visualizer(width/3, height/3, 400, 255, 0, 255 ); 
  
//   topLeft.drawAmpEllipse();
//   bottomLeft.drawAmpEllipse();
//   topRight.drawAmpEllipse();
//   bottomRight.drawAmpEllipse();
  
  //Below are some tests I ran to make sure stuff was working right
  // vol = amp.getLevel();
  // diam = map(vol, 0, 1, 10, 200);
  // ellipse(width/2, height/2, diam, diam)

  
  
}




//This is the class I made that has the findsong function and creates the slider
class single {
  
  findSong(songName){
    song = loadSound(songName,loaded);
    slider = createSlider(0,1,0.5,0.01); 
  } 
}

// this is the visualizer class
class visualizer {
  
// the constructor takes arguments for the x y and color values
  constructor(_x, _y, _size, r, g, b){
    this.x = _x;
    this.y = _y;
    this.size = _size;
    this.r = r;
    this.g = g;
    this.b = b;
  }  
  
// this function actually draws the ellipse and grabs the amp info to size the ellipse
  drawAmpEllipse(){
    
    vol = amp.getLevel();
    diam = map(vol, 0, 1, 100, this.size)
    noStroke()
    fill(this.r, this.g, this.b, 255)
    ellipse(this.x, this.y, diam, diam);
  }
}