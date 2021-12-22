var albums;
var api ="https://theaudiodb.com/api/v1/json/1/discography.php?s="
var artist ="mac%20miller";
var input;

// i found that my sketch wouldn't work without a preload function 
// i found that loading with the initial artist worked
function preload(){
  url = api+artist;
  loadJSON(api+artist,gotData);

}

// set up to get user input and load the JSON according to the input
function setup(){
  createCanvas(700,700);
  
  var button = select("#search");
  button.mousePressed(searchAlbum)
  input = select("#artist")
  loadJSON(api+input.value());
  
}

// loading the JSON according 
function searchAlbum(){
  loadJSON(api+input.value(),gotData);
}

// function to assign albums the value of data once JSON is loaded
function gotData(data){
  // print(data);
  albums = data;
}

// drawing the text by using an if statment to make sure albums isn't null and then 
// a for loop to parse through the albums and draw the tittle and year released
function draw(){
  background(0);

  // print(albums.album[0]);
  textFont()
  fill(255);
  textSize(20);
  textAlign(CENTER,CENTER)
  // print(albums.album.length)
  // text(albums.album[0].strAlbum +" released in " + albums.album[0].intYearReleased,height/2, width/2)
    if(albums.album==null){
    text("try again!", width/2,height/2)
  }
  else{
    for(let i = 0; i < albums.album.length; i++){
      // print(i)
      fill(255,20,(albums.album[i].intYearReleased-2000)*10,)
      text(albums.album[i].strAlbum +" released in " + albums.album[i].intYearReleased,width/2, i*63+63)
  }
  }

} 
