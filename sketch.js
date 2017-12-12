var imagex;
var imagey;
var stars;

function preload() {
    stars = loadSound('assets/Bag Raiders - Shooting Stars.mp3');
}

function setup() {
	createCanvas(600,360);
    footage = createCapture(VIDEO);
    footage.size(500,360);
    stars.play();
}

function draw() {
    background(255);
    image(footage,5,5,480,360);
    footage.loadPixels();
    
    for (var i = 0; i < 4*(footage.width*footage.height); i+=4) {
        var r = footage.pixels[i];
        var g = footage.pixels[i+1];
        var b = footage.pixels[i+2];
        var a = footage.pixels[i+3];
        
            if (stars.isPlaying()) {
                footage.pixels[i] =b;
                footage.pixels[i+1] = r;
                footage.pixels[i+2] = g;
                footage.pixels[i+3] = a;
            } else {
                return false;
                footage.pixels[i] =r;
                footage.pixels[i+1] = g;
                footage.pixels[i+2] = b;
            }
    }

}


function mouseIsPressed() {
  if ( stars.isPlaying() ) { 
    stars.stop();
  } else {
    stars.play();
  }
}
