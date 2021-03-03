var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.debug=true;
	fairy.setCollider("circle",470,0,130);

	star = createSprite(300,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.x=round(random(300,750))

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 ,30 ,5 ,{restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
  background(bgImg);

 keyPressed();

  drawSprites();
}

function keyPressed() {
	
	if(keyDown("left")){
		fairy.x = fairy.x-5;
	}

	if(keyDown("right")){
		fairy.x = fairy.x+5;
	}

	if(keyWentDown("down")){
		star.velocityY=3;
	}

	if(fairy.x>650){
		fairy.x=649;
	}

	if(fairy.x<150){
		fairy.x=151;
	}
	if(star.y>720||star.isTouching(fairy)){
		star.velocityY=0;
	}
}
