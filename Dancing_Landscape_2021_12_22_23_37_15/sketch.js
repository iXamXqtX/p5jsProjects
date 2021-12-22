var mountains = [];
var numMountains = 3;
var groundOne;
var skyOne;
var sunOne;
var song;
var slider;
var spectrum;
var amp;
var sunVol;
var diam;
var mtnVol;
var mtnSize;
var grndVol;
var grndSize;
  

function setup() {
  createCanvas(400, 400);
  
  songForSketch = new single();
  songForSketch.findSong("music/song_for_sketch.mp3")
  amp = new p5.Amplitude();

  for( let i = 0; i <numMountains; i++ ){
    mountains[i] = new mountain(i*60, 400, 300, 138, 138, 138);
  }
}


// this function will only show the play button when the song is actually loaded
// Code comes from coding train video 17.2 and 17.4
function loaded(){
  // song.loop();
  button = createButton("play")
  button.mousePressed(togglePlaying)
}


// toggle function for the play/pause button from coding train 17.4 
function togglePlaying(){
  if (!song.isPlaying()){
    song.play();
    button.html("pause")
  } else{
    song.pause();
    button.html("play")
  }
}

function draw() {
  background(255);
  
  song.setVolume(slider.value());
  
  skyOne = new sky(0, 0, 400,400, 0, 153, 153);
  
  skyOne.drawSky();
  
  sunOne = new sun(200, 75, 100, 255, 255, 100);
  
  sunOne.drawSun();
  
  for( let i = 0; i <numMountains; i++ ){
    mountains[i].drawMountain();
  }
  
  groundOne = new ground(0, 300, 400,50, 0, 102, 0)
  
  groundOne.drawGround();

  
 
}

//This is the class I made that has the findsong function and creates the slider
class single {
  
  findSong(songName){
    song = loadSound(songName,loaded);
    slider = createSlider(0,2,0.5,0.01); 
  } 
}

// simple class witht he functions and arguments to make the blue sky
class sky{
  
  constructor(x,y,h,w,r,g,b){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.r = r;
    this.g = g;
    this.b = b;  
  }
  
  drawSky(){
    noStroke()
    fill(this.r, this.g, this.b);
    rect(this.x, this.y,this.h, this.w);
  }
}

// class witht eh functions for the simple sun
class sun{
  
  constructor(x,y,size,r,g,b){
    this.x = x;
    this.y = y;
    this.size = size;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  drawSun(){
    sunVol = amp.getLevel();
    diam = map(sunVol, 0, 2, this.size/2, this.size)
    noStroke()
    fill(this.r, this.g, this.b)
    ellipse(this.x, this.y, diam, diam);
  }
}

// basic stuff for the mountains
class mountain{
  
  constructor(x,y,size,r,g,b){
    this.x = x;
    this.y = y;
    this.size = size;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  drawMountain(){
    mtnVol = amp.getLevel();
    mtnSize = map(mtnVol, 0, 2, this.size/2, this.size)
    noStroke()
    fill(this.r, this.g, this.b)
    triangle(this.x, this.y, this.x + this.size/2 , this.y - mtnSize, this.x + this.size, this.y )
  }
}

// super easy class for the ground
class ground{
  
  constructor(x,y,w,h,r,g,b){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  drawGround(){
    grndVol = amp.getLevel();
    grndSize = map(grndVol, 0, 2, this.h, this.h/2 )
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y + grndSize, this.w, this.h + grndSize);
  }
}
