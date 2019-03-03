
var l1instruct
var buttonLonePlayA;
var buttonLonePlayB;
var buttonLonePlayX;
var buttonLonePlayY;


function preloadInstructOne()
{
	buttonLonePlayA = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplaya.png');
	buttonLonePlayB = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplayb.png');
	l1instruct = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/l1instruct.png');

}

function setupInstructOne()
{
	buttonLonePlayX = 300;
	buttonLonePlayY = 480;

}

function drawInstructOne()
{
	background(l1instruct);

	image(buttonLonePlayA,300,480,200,75);

	if (mouseX > 300 && mouseX < 500 && mouseY > 480 && mouseY < 480+75)

		image(buttonLonePlayB,300,buttonLonePlayY,480,75);

			if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 480 && mouseY < 480+75 && mouseIsPressed)
			{
				canvasID = 100;
			}

}