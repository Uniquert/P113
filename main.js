function preload(){
    
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(393, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill(144, 238, 144);
    stroke(144, 238, 144);

    circle(50, 50, 50);
    circle(50, 430, 50);
    circle(590, 50, 50);
    circle(590, 430, 50);

    fill(0, 78, 255);
    stroke(0, 78, 255);

    rect(70, 40, 500, 20);
    rect(70, 420, 500, 20);
    rect(40, 70, 20, 340);
    rect(580, 70, 20, 340);
}

function take_snapshot() {
    save("geoffrey.png");
}


 