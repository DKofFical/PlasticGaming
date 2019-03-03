
var l3instruct
var buttonLonePlayA;
var buttonLonePlayB;
var buttonLonePlayX;
var buttonLonePlayY;


function preloadInstructThree()
{
	buttonLonePlayA = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplaya.png');
	buttonLonePlayB = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplayb.png');
	l3instruct = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/l3instruct.png');

}

function setupInstructThree()
{
	buttonLonePlayX = 300;
	buttonLonePlayY = 480;

}

function drawInstructThree()
{
	background(l3instruct);

	image(buttonLonePlayA,buttonLonePlayX,buttonLonePlayY,200,75);

	if (mouseX > buttonLonePlayX && mouseX < buttonLonePlayX + 200 && mouseY > buttonLonePlayY && mouseY < buttonLonePlayY+75)

		image(buttonLonePlayB,buttonLonePlayX,buttonLonePlayY,200,75);

			if (mouseX > buttonLonePlayX && mouseX < buttonLonePlayX + 200 && mouseY > buttonLonePlayY && mouseY < buttonLonePlayY+75 && mouseIsPressed)
			{
				canvasID = 300;
			}

}