
var l4instruct
var buttonLonePlayA;
var buttonLonePlayB;
var buttonLonePlayX;
var buttonLonePlayY;


function preloadInstructFour()
{
	buttonLonePlayA = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplaya.png');
	buttonLonePlayB = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplayb.png');
	l4instruct = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/l4instruct.png');

}

function setupInstructFour()
{
	buttonLonePlayX = 300;
	buttonLonePlayY = 480;

}

function drawInstructFour()
{
	background(l4instruct);

	image(buttonLonePlayA,buttonLonePlayX,buttonLonePlayY,200,75);

	if (mouseX > buttonLonePlayX && mouseX < buttonLonePlayX + 200 && mouseY > buttonLonePlayY && mouseY < buttonLonePlayY+75)

		image(buttonLonePlayB,buttonLonePlayX,buttonLonePlayY,200,75);

			if (mouseX > buttonLonePlayX && mouseX < buttonLonePlayX + 200 && mouseY > buttonLonePlayY && mouseY < buttonLonePlayY+75 && mouseIsPressed)
			{
				canvasID = 400;
			}

}