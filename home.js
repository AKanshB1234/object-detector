
obt = [];
Status = "";

function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    
}

function modelLoaded(){
    console.log("Model is linked");
    Status =  true;
}

function showResult(error,result){
    if(error){
         console.log(error);
    }
    else{
        console.log(result);
        obt = result;
        }
} 

function start(){
    model = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("st").innerHTML = "Notified:-- Object detecting";
}

function draw(){
   image(video, 0, 0, 600, 400);
   if(Status == true){
    model.detect(video, showResult);
    for(i = 0; i < obt.length; i++)
    {
     document.getElementById("st").innerHTML = "Notified:-- Object detected";
     stroke("purple");
     noFill();
     strokeWeight(2);
     rect(obt[i].x, obt[i].y-30, obt[i].width, obt[i].height);
     conf = Math.floor(obt[i].confidence * 100);
     text(obt[i].label + conf + "%", obt[i].x, obt[i].y-30 );
    }
   }
   
}