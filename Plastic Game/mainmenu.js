var buttonMainMenuPlayA;
var buttonMainMenuPlayB;
var buttonMainMenuAvatarA;
var buttonMainMenuAvatarB;

var mm


var buttonMainMenuPlayX;
var buttonMainMenuPlayY;
var buttonMainMenuAvatarX;
var buttonMainMenuAvatarY;



function preloadMainMenu()
{
	buttonMainMenuPlayA = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplaya.png');
	buttonMainMenuPlayB = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplayb.png');
	buttonMainMenuAvatarA = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonavatara.png');
	buttonMainMenuAvatarB = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonavatarb.png');
	bolt = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/usainbolt.png');
	math = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/math.png');
	mm = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/mainmenu.png')
}

function setupMainMenu()
{
	
	buttonMainMenuPlayX = 300;
	buttonMainMenuPlayY = 480;
	buttonMainMenuAvatarX = 200;
	buttonMainMenuAvatarY = 380;
	boltX = 50;
	boltY = 150;
	mathX = 500;
	mathY = 150;

}

function drawMainMenu()
{
	background(mm);

	image(bolt,boltX,boltY,300,200);
	image(math,mathX,mathY,200,200);
	image(buttonMainMenuPlayA,buttonMainMenuPlayX,buttonMainMenuPlayY,200,75);
	image(buttonMainMenuAvatarA,buttonMainMenuAvatarX,buttonMainMenuAvatarY,400,75);

	
	if (mouseX > buttonMainMenuPlayX && mouseX < buttonMainMenuPlayX + 200 && mouseY > buttonMainMenuPlayY && mouseY < buttonMainMenuPlayY+75)
	
		image(buttonMainMenuPlayB,buttonMainMenuPlayX,buttonMainMenuPlayY,200,75);
		if (mouseX > buttonMainMenuPlayX && mouseX < buttonMainMenuPlayX + 200 && mouseY > buttonMainMenuPlayY && mouseY < buttonMainMenuPlayY+75 && mouseIsPressed == true )
		{
			drawInstructOne();
		}
	
	if (mouseX > buttonMainMenuAvatarX && mouseX < buttonMainMenuAvatarX + 400 && mouseY > buttonMainMenuAvatarY && mouseY < buttonMainMenuAvatarY+75)
	
		image(buttonMainMenuAvatarB,buttonMainMenuAvatarX,buttonMainMenuAvatarY,400,75);
		if (mouseX > buttonMainMenuAvatarX && mouseX < buttonMainMenuAvatarX + 400 && mouseY > buttonMainMenuAvatarY && mouseY < buttonMainMenuAvatarY+75 && mouseIsPressed == true)
		{
			canvasID = -199999
		}
	


}