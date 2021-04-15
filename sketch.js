const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
      background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("https://worldclockapi.com/api/json/est/now")



    //change the data in JSON format
    var responsejson=await response.json()
    console.log(responsejson)
    // write code slice the datetime
    var datename =responsejson.currentDateTime

    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
