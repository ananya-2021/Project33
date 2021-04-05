const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var bg;
var snow = [];
var sound;

function preload(){
  bg = loadImage("bgImg.jpg");
  sound = loadSound("snowSound.mp3");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
    
  var canvas=createCanvas(600,400);

  for(var i=0;i<200;i++){
    snow.push(new Snow(random(0,600),random(0,600),20,20));
   }
  
}

function draw() {
  background(bg);  

  Engine.update(engine);

  if(frameCount%4 === 0){
    for(var i = 0;i<200;i = i+1){
        snow[i].display();
       }
}

sound.loop();
}