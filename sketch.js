//console.log('ml5 version:', ml5.version);
let mobilenet;
let dog;
function modelReady(){
    console.log("model is ready");
    mobilenet.predict(dog,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }

}
function imageReady(){
    image(dog, 0 , 0 , width , height);
}
function setup(){
    createCanvas(640,480);
    dog = createImg('images/dog.png',imageReady);
    dog.hide();
    
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet',modelReady);

}
