var canvasID;
var level1;
var level2;
var level3;
var level4;
var health;
var gif_createImg;
var conta;
var contb;
var levelwinscore
var lossa;
var lossb;
var levellosescore;
var bg;
var congrat;
var l1instruct
var buttonLonePlayA;
var buttonLonePlayB;
var buttonMainMenuPlayA;
var buttonMainMenuPlayB;
var buttonMainMenuAvatarA;
var buttonMainMenuAvatarB;
var mm;
var buttonMainMenuPlayX;
var buttonMainMenuPlayY;
var buttonMainMenuAvatarX;
var buttonMainMenuAvatarY;
var avatarchoice;
var againa;
var againb;
var ding;
var yay;



function preload()
{
	level1 = loadImage('https://dkoffical.github.io/plasticgame/images/Plastic%20Canvas%205.jpg')
	level2 = loadImage('https://dkoffical.github.io/plasticgame/images/Plastic%20Canvas%206.jpg')
	level3 = loadImage('https://dkoffical.github.io/plasticgame/images/Plastic%20Canvas%207.jpg')
	level4 = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/level4.png')
	levelwinscore = loadImage('https://dkoffical.github.io/plasticgame/images/Plastic%20Canvas%208.jpg')
	conta = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/conta.png')
	contb = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/contb.png')
  	gif_createImg = createImg("https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/runani.gif");
    lossa = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/lossa.png')
	lossb = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/lossb.png')
	levellosescore = loadImage('https://dkoffical.github.io/plasticgame/images/Plastic%20Canvas%209.jpg')
	bg = loadImage('https://dkoffical.github.io/plasticgame/images/Plastic%20Canvas%201.jpg');
	congrat = loadImage('https://dkoffical.github.io/plasticgame/images/Plastic%20Canvas%2010.jpg');
	buttonLonePlayA = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplaya.png');
	buttonLonePlayB = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplayb.png');
	l1instruct = loadImage('https://dkoffical.github.io/plasticgame/images/Plastic%20Canvas%202.jpg');
	l2instruct = loadImage('https://dkoffical.github.io/plasticgame/images/Plastic%20Canvas%203.jpg');
	l3instruct = loadImage('https://dkoffical.github.io/plasticgame/images/Plastic%20Canvas%204.jpg');
	l4instruct = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/l4instruct.png');
	buttonMainMenuPlayA = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplaya.png');
	buttonMainMenuPlayB = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonplayb.png');
	buttonMainMenuAvatarA = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonavatara.png');
	buttonMainMenuAvatarB = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/buttonavatarb.png');
	bolt = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/usainbolt.png');
	math = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/math.png');
	mm = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/mainmenu.png');
	avatarchoice = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/avatarchoice.png');
	againa = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/againa.png');
	againb = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/images/againb.png');
	ding = loadSound('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/sounds/ding.mp3');
	yay = loadSound('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/sounds/yay.mp3');

}

function setup()
{
	createCanvas(800,600);

	setupHealth();
	setupTimer();
	setupTyping();


	buttonMainMenuPlayX = 300;
	buttonMainMenuPlayY = 480;
	buttonMainMenuAvatarX = 200;
	buttonMainMenuAvatarY = 380;
	boltX = 50;
	boltY = 150;
	mathX = 500;
	mathY = 150;

	canvasID = 0;


}

function draw()
{
	background(bg);

	typingBox.hide();
	gif_createImg.hide();

	if (canvasID == 0)
	{
		Intro();
	}
	if (canvasID == 1)
	{
		MainMenu();
	}
	if (canvasID == 2)
	{
		InstructL1();
	}
	if (canvasID == 3)
	{
		InstructL2();
	}
	if (canvasID == 4)
	{
		InstructL3();
	}
	if (canvasID == 5)
	{
		InstructL4();
	}
	if (canvasID == 42)
	{
		avCh();
	}
	else if (canvasID == -1)
	{
		gameOver();
	}
	else if (canvasID == 100)
	{
		health = 0;
		background(level1);
		ding.stop();
		typingBox.show();
		gif_createImg.show();
		showQuestion(1);
	  	gif_createImg.position(150, 320);

	}
	else if (canvasID == 101)
	{
		background(level1)
		typingBox.show();
		gif_createImg.show();
		showQuestion(2);
		gif_createImg.position(150, 320);
	}
	else if (canvasID == 102)
	{
		background(level1)
		typingBox.show();
		gif_createImg.show();
		showQuestion(3);
		gif_createImg.position(150, 320);
	}
	else if (canvasID == 103)
	{
		background(level1)
		typingBox.show();
		gif_createImg.show();
		showQuestion(4);
	 	gif_createImg.position(150, 320);
	}
	else if (canvasID == 104)
	{
		if (health >= 200)
			{
				endOfSection1();
			}
		else
			{
				gameOver();
			}
	}
	else if (canvasID == 200)
	{
		background(level2)
		typingBox.show();
		gif_createImg.show();
		showQuestion(1);
	  	gif_createImg.position(150, 320);
	}
	else if (canvasID == 201)
	{
		background(level2)
		typingBox.show();
		gif_createImg.show();
		showQuestion(2);
		gif_createImg.position(150, 320);
	}
	else if (canvasID == 202)
	{
		background(level2)
		typingBox.show();
		gif_createImg.show();
		showQuestion(3);
		gif_createImg.position(150, 320);
	}
	else if (canvasID == 203)
	{
		background(level2)
		typingBox.show();
		gif_createImg.show();
		showQuestion(4);
	 	gif_createImg.position(150, 320);
	}
	else if (canvasID == 204)
	{
		background(level2)
		typingBox.show();
		gif_createImg.show();
		showQuestion(5);
		gif_createImg.position(150, 320);
	}
	else if (canvasID == 205)
	{
		background(level2)
		typingBox.show();
		gif_createImg.show();
		showQuestion(6);
	 	gif_createImg.position(150, 320);
	}
	else if (canvasID == 206)
	{
		if (health >= 920)
			{
				endOfSection2();
			}
		else
			{
				gameOver();
			}
	}
	else if (canvasID == 300)
	{
		background(level3)
		typingBox.show();
		gif_createImg.show();
		showQuestion(1);
	  	gif_createImg.position(150, 320);
	}
	else if (canvasID == 301)
	{
		background(level3)
		typingBox.show();
		gif_createImg.show();
		showQuestion(2);
		gif_createImg.position(150, 320);
	}
	else if (canvasID == 302)
	{
		background(level3)
		typingBox.show();
		gif_createImg.show();
		showQuestion(3);
		gif_createImg.position(150, 320);
	}
	else if (canvasID == 303)
	{
		background(level3)
		typingBox.show();
		gif_createImg.show();
		showQuestion(4);
	 	gif_createImg.position(150, 320);
	}
	else if (canvasID == 304)
	{
		background(level3)
		typingBox.show();
		gif_createImg.show();
		showQuestion(5);
		gif_createImg.position(150, 320);
	}
	else if (canvasID == 305)
	{
		background(level3)
		typingBox.show();
		gif_createImg.show();
		showQuestion(6);
	 	gif_createImg.position(150, 320);
	}
	else if (canvasID == 306)
	{
		background(level3)
		typingBox.show();
		gif_createImg.show();
		showQuestion(7);
	 	gif_createImg.position(150, 320);
	}
	else if (canvasID == 307)
	{
		background(level3)
		typingBox.show();
		gif_createImg.show();
		showQuestion(8);
	 	gif_createImg.position(150, 320);
	}
	else if (canvasID == 308)
	{
		if (health >= 2600)
			{
				endOfSection3();
			}
		else
			{
				gameOver();
			}
	}
	else if (canvasID == 400)
	{
		background(level4)
		typingBox.show();
		gif_createImg.show();
		showQuestion(1);
	  	gif_createImg.position(150, 320);
	}
	else if (canvasID == 401)
	{
		background(level4)
		typingBox.show();
		gif_createImg.show();
		showQuestion(2);
		gif_createImg.position(150, 320);
	}
	else if (canvasID == 402)
	{
		background(level4)
		typingBox.show();
		gif_createImg.show();
		showQuestion(3);
		gif_createImg.position(150, 320);
	}
	else if (canvasID == 403)
	{
		background(level4)
		typingBox.show();
		gif_createImg.show();
		showQuestion(4);
	 	gif_createImg.position(150, 320);
	}
	else if (canvasID == 404)
	{
		background(level4)
		typingBox.show();
		gif_createImg.show();
		showQuestion(5);
		gif_createImg.position(150, 320);
	}
	else if (canvasID == 405)
	{
		background(level4)
		typingBox.show();
		gif_createImg.show();
		showQuestion(6);
	 	gif_createImg.position(150, 320);
	}
	else if (canvasID == 406)
	{
		background(level4)
		typingBox.show();
		gif_createImg.show();
		showQuestion(7);
	 	gif_createImg.position(150, 320);
	}
	else if (canvasID == 407)
	{
		background(level4)
		typingBox.show();
		gif_createImg.show();
		showQuestion(8);
	 	gif_createImg.position(150, 320);
	}
	else if (canvasID == 408)
	{
		background(level4)
		typingBox.show();
		gif_createImg.show();
		showQuestion(9);
	 	gif_createImg.position(150, 320);
	}
	else if (canvasID == 409)
	{
		background(level4)
		typingBox.show();
		gif_createImg.show();
		showQuestion(10);
	 	gif_createImg.position(150, 320);
	}
	else if (canvasID == 410)
	{
		if (health >= 5800)
			{
				endOfSection4();
			}
		else
			{
				gameOver();
			}
	}
	else if (canvasID == 499)
	{
		Winner();
	}

	console.log(canvasID);



}

function Intro()
{
	background(bg);
	ding.stop();

	if (mouseX > 0 && mouseX < 800 && mouseY > 0 && mouseY < 600 && mouseIsPressed == true)
		{
			canvasID = -10;
		}

}
	

function MainMenu()
{
	background(mm);
	ding.stop();

	image(bolt,boltX,boltY,300,200);
	image(math,mathX,mathY,200,200);
	image(buttonMainMenuPlayA,buttonMainMenuPlayX,buttonMainMenuPlayY,200,75);
	image(buttonMainMenuAvatarA,buttonMainMenuAvatarX,buttonMainMenuAvatarY,400,75);

	
	if (mouseX > buttonMainMenuPlayX && mouseX < buttonMainMenuPlayX + 200 && mouseY > buttonMainMenuPlayY && mouseY < buttonMainMenuPlayY+75)
	{
		image(buttonMainMenuPlayB,buttonMainMenuPlayX,buttonMainMenuPlayY,200,75);
		if (mouseX > buttonMainMenuPlayX && mouseX < buttonMainMenuPlayX + 200 && mouseY > buttonMainMenuPlayY && mouseY < buttonMainMenuPlayY+75 && mouseIsPressed == true )
		{
			canvasID = -2;
		}		
	}
	
	if (mouseX > buttonMainMenuAvatarX && mouseX < buttonMainMenuAvatarX + 400 && mouseY > buttonMainMenuAvatarY && mouseY < buttonMainMenuAvatarY+75)
	{
		image(buttonMainMenuAvatarB,buttonMainMenuAvatarX,buttonMainMenuAvatarY,400,75);
		if (mouseX > buttonMainMenuAvatarX && mouseX < buttonMainMenuAvatarX + 400 && mouseY > buttonMainMenuAvatarY && mouseY < buttonMainMenuAvatarY+75 && mouseIsPressed == true)
		{
			canvasID = 42;
		}

	}
	


}
function InstructL1()
{
	background(l1instruct);
	ding.stop();

	image(buttonLonePlayA,300,480,200,75);

	if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 480 && mouseY < 480+75)

		image(buttonLonePlayB,300,480,200,75);

			if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 480 && mouseY < 480+75 && mouseIsPressed == true)
			{
				canvasID = 100;
			}

}
function InstructL2()
{
	background(l2instruct);

	image(buttonLonePlayA,300,480,200,75);

	if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 480 && mouseY < 480+75)

		image(buttonLonePlayB,300,480,200,75);

			if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 480 && mouseY < 480+75 && mouseIsPressed == true)
			{
				canvasID = 200;
			}

}
function InstructL3()
{
	background(l3instruct);

	image(buttonLonePlayA,300,480,200,75);

	if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 480 && mouseY < 480+75)

		image(buttonLonePlayB,300,480,200,75);

			if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 480 && mouseY < 480+75 && mouseIsPressed == true)
			{
				canvasID = 300;
			}

}
function InstructL4()
{
	background(l4instruct);

image(buttonLonePlayA,300,480,200,75);

	if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 480 && mouseY < 480+75)

		image(buttonLonePlayB,300,480,200,75);

			if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 480 && mouseY < 480+75 && mouseIsPressed == true)
			{
				canvasID = 400;
			}

}


function endOfSection1()
{
	background(levelwinscore)
	typingBox.hide();
	gif_createImg.hide();
	textSize(100);
	fill(0,255,255);
	text(health,500,395);

	image(conta,300,475,200,75);

	
	if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 475 && mouseY < 475+75)
	
		image(contb,300,475,200,75);
		if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 475 && mouseY < 475+75 && mouseIsPressed == true )
		{
			canvasID = -3
		}
	
}

function endOfSection2()
{
	background(levelwinscore)
	typingBox.hide();
	gif_createImg.hide();
	textSize(100);
	fill(0,255,255);
	text(health,500,395);

	image(conta,300,475,200,75);

	
	if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 475 && mouseY < 475+75)
	
		image(contb,300,475,200,75);
		if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 475 && mouseY < 475+75 && mouseIsPressed == true )
		{
			canvasID = -4
		}
	
}

function endOfSection3()
{
	background(levelwinscore)
	typingBox.hide();
	gif_createImg.hide();
	textSize(100);
	fill(0,255,255);
	text(health,500,395);

	image(conta,300,475,200,75);

	
	if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 475 && mouseY < 475+75)
	
		image(contb,300,475,200,75);
		if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 475 && mouseY < 475+75 && mouseIsPressed == true )
		{
			canvasID = -5
		}
	
}

function endOfSection4()
{
	background(levelwinscore)
	typingBox.hide();
	gif_createImg.hide();
	textSize(100);
	fill(0,255,255);
	text(health,500,395);

	image(conta,300,475,200,75);

	
	if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 475 && mouseY < 475+75)
	
		image(contb,300,475,200,75);
		if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 475 && mouseY < 475+75 && mouseIsPressed == true )
		{
			canvasID = 499
		}
	
}

function avCh()

{
	background(avatarchoice);
	if (mouseX > 96 && mouseX < 288 && mouseY > 264 && mouseY < 312 && mouseIsPressed == true )
		{
			canvasID = 2;
		}
}

function gameOver()

{
	background(levellosescore);
	typingBox.hide();
	gif_createImg.hide();
	textSize(100);
	fill(0,255,255);
	text(health,500,395);

	image(lossa,300,475,200,75);

	
	if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 475 && mouseY < 475+75)
	
		image(lossb,300,475,200,75);
		if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 475 && mouseY < 475+75 && mouseIsPressed == true )
		{
			canvasID = -10;
		}
}

function Winner()

{
	background(congrat);

	image(againa,300,150,200,75);

	if (!yay.isPlaying())
		{
			yay.play();
		}

	
	if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 150 && mouseY < 150+75)
	
		image(againb,300,150,200,75);
		if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 150 && mouseY < 150+75 && mouseIsPressed == true )
		{
			canvasID = 1
		}
	
}

function mouseReleased()
{
	if (canvasID == -10)
	{
		canvasID = 1;
	}
	if (canvasID == -2)
	{
		canvasID = 2;
	}
	if (canvasID == -3)
	{
		canvasID = 3;
	}
	if (canvasID == -4)
	{
		canvasID = 4;
	}
	if (canvasID == -5)
	{
		canvasID = 5;
	}
}




// handles all game over code

