//console.log('ml5 version:', ml5.version);
let mobilenet;
//let dog;
let video;
let label='';
let prob;
function modelReady(){
    console.log("model is ready");
    mobilenet.predict(gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        label = results[0].label;
        prob = results[0].confidence;
        
        mobilenet.predict(gotResult);
    }
    

}
// function imageReady(){
//     image(dog, 0 , 0 , width , height);
// }
function setup(){
    createCanvas(640,480);
    video = createCapture(VIDEO);
    //dog.hide();
    video.hide();
    
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet',video,modelReady);

}
function draw(){
    image(video,0,0);
    fill(0);
    textSize(64);
    text(label,10,height-100);
}
