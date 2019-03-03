
var l2instruct
var buttonLonePlayA;
var buttonLonePlayB;
var buttonLonePlayX;
var buttonLonePlayY;


function preloadInstructTwo()
{
	buttonLonePlayA = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplaya.png');
	buttonLonePlayB = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplayb.png');
	l2instruct = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/l2instruct.png');

}

function setupInstructTwo()
{
	buttonLonePlayX = 300;
	buttonLonePlayY = 480;

}

function drawInstructTwo()
{
	background(l2instruct);

	image(buttonLonePlayA,buttonLonePlayX,buttonLonePlayY,200,75);

	if (mouseX > buttonLonePlayX && mouseX < buttonLonePlayX + 200 && mouseY > buttonLonePlayY && mouseY < buttonLonePlayY+75)

		image(buttonLonePlayB,buttonLonePlayX,buttonLonePlayY,200,75);

			if (mouseX > buttonLonePlayX && mouseX < buttonLonePlayX + 200 && mouseY > buttonLonePlayY && mouseY < buttonLonePlayY+75 && mouseIsPressed)
			{
				canvasID = 200;
			}

}