var block
function setup() {
  createCanvas(400,400);
  block=createSprite(300,300)
}

function draw() 
{
  background("yellow");
if(keyIsDown(DOWN_ARROW)){
  background('red')
}
if(keyIsDown(LEFT_ARROW)){
  background('blue')
}

if(keyIsDown(RIGHT_ARROW)){
  background('green')
}

if(keyIsDown(UP_ARROW)){
  background('purple')
}

}




