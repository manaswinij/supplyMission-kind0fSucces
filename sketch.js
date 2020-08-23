const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,groundsprite;
var package, packageSprite,packageImg;
var helicopter,helicopterImg, helicopterSprite;

function preload()
{
	helicopterImg=loadImage("helicopter.png")
	packageImg=loadImage("package.png")
}


function setup(){
    createCanvas(800, 700);
    rectMode(CENTER);
    
    engine=Engine.create()
    world=engine.world
    
    packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageImg)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterImg)
    helicopterSprite.scale=0.6
    groundSprite=createSprite(width/2,height-35,width,10)
    groundSprite.shapeColour="white"

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var package_options={
        restitution:0.2,
        isStatic:true
    }

    packageBody=Bodies.circle(width/2,200,5,package_options);
    World.add(world,packageBody);
    ground=Bodies.rectangle(width/2,65,width,10,{isStatic:true})
World.add(world,ground)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    //rect(ground.position.x,ground.position.y,400,20);
    //ellipseMode(RADIUS);
    //ellipse(package.position.x,package.position.y,30,30)
    packageSprite.x=packageBody.position.x
    packageSprite.y=packageBody.position.y
	drawSprites();

}
function keyPressed() { if (keyCode === DOWN_ARROW) { Matter.Body.setStatic(packageBody,false); } }
