img = "";
status = "";
objects = [];

function preload(){
    img = loadImage("bedrooom.jpg");
}

function setup(){
canvas = createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelloaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelloaded(){
    console.log("modelloaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;   
}

function draw(){
    image(img,0,0,640,420);
    if(status != ""){
        for(i = 0; i < objects.lenght; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill("#00378f");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#00378f");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}  

function go_homeyyyyyyyyyyyyyyyyy(){
    window.location = "index.html";
}