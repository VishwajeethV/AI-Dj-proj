MUSIC1="music2.mp3"
MUSIC2="music.mp3"


function preload() {
    song=loadSound("music.mp3");  
    song=loadSound("music2.mp3");  
}
function setup() {
    canvas=createCanvas(400,300);
    canvas.position(450,225);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw() {
    image(video,0,0,400,300);
}