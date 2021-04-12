var Bpac;
var RedPac , BluePac , Pac , PinkPac , OrangePac;
var Fruit1 , Fruit2; 
var darkBluePac; 
var whitePac;

function preload(){
  // for the images to be uploaded  
    Pac = loadAnimation("pac/fullpac.png","pac/halfpac.png","pac/semihalfpac.png");
    RedPac = loadAnimation("redpac/redpacleft1.png","redpac/redpacleft2.png","redpac/redpacdown1.png","redpac/redpacdown2.png",
    "redpac/redpacright1.png","redpac/redpacright2.png","redpac/redpacup1.png","redpac/redpacup 2.png"
    );
    BluePac = loadAnimation("bluepac/bluepacdown1.png","bluepac/bluepacdown2.png","bluepac/bluepacleft1.png","bluepac/blueleft2.png",
    "bluepac/bluepacup1.png","bluepac/bluepacup2.png","bluepac/bluepacright1.png","bluepac/blueright2.png"
    );
    PinkPac = loadAnimation("pinkpac /pinkpacup1.png","pinkpac/pinkpacup2.png","pinkpac/pinkpacdown1.png","pinkpac/pinkpacdown2.png",
    "pinkpac/pinkpacleft1.png","pinkpac/pinkpacleft2.png","pinkpac/pinkpacright1.png","pinkpacright2.png"
    );
    OrangePac = loadAnimation("orangepc/orangepacup1.png","orangepac/orangepacup2.png","orangepac/orangepacdown1.png","orangepac/orangepacdown2.png",
    "orangepac/orangepacright1.png","orangepac/orangepacright2.png","orangepac/orangepacleft1.png","orangepac/orangepacleft2.png"
    );    
    Fruit1 = loadImage("fruits/berry.png");
    Fruit2 = loadImage("fruits/strawberry.png");
    darkBluePac = loadAnimation("differentimage/advantagepac1.png","differentimage/advantagepac2.png");
    whitePac = loadAnimation("differentimage/Death1.png","differentimage/Death2.png");

}

function setup() {
    createCanvas(700,300);
    Bpac  = createSprite(200,200,20,20);
    


}

function draw() {
    background(0);
    drawSprites();

}