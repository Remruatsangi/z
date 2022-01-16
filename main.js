objects=""
status=""
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function modelLOaded(){
    console.log("Model Loaded!")
    status=true;
}
function start(){
    objectDetector= ml5.ObjectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    objects_name= document.getElementById("objects_name").value;
}
function gotResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects= results;
}
function draw(){
    image(video,0,0,380,380)
}