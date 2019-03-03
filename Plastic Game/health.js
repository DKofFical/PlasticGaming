var health;


function preloadHealth()
{


}

function setupHealth()
{
	health = 0;
}

function drawHealth(setGameOverCanvasID)
{
	if (canvasID >= 100 && canvasID < 199)
	{
		fill(0,255,0);
		rect(300,30,health+50,25);
		fill(0,0,0);
		text(health,300+10,30+20)
	}
	if (canvasID >= 200 && canvasID < 299)
	{
		fill(0,255,0);
		rect(350,30,(health/4)+50,25);
		fill(0,0,0);
		text(health,350+10,30+20)
	}
	if (canvasID >= 300 && canvasID < 399)
	{
		fill(0,255,0);
		rect(350,30,(health/10)+50,25);
		fill(0,0,0);
		text(health,350+10,30+20)
	}
	if (canvasID >= 400 && canvasID < 499)
	{
		fill(0,255,0);
		rect(350,30,(health/20)+50,25);
		fill(0,0,0);
		text(health,350+10,30+20)
	}
}

function addHealth(amount)
{
	if (canvasID >= 100 && canvasID < 199)
	{
		var s = int((lastRecordedTime - frameCount) / 30 + 1);
		health += 5*(+s);
		console.log(health);	
	}

	if (canvasID >= 200 && canvasID < 299)
	{
		var s = int((lastRecordedTime - frameCount) / 30 + 1);
		health += 10*(+s);
		console.log(health);	
	}
	if (canvasID >= 300 && canvasID < 399)
	{
		var s = int((lastRecordedTime - frameCount) / 30 + 1);
		health += 15*(+s);
		console.log(health);	
	}

	if (canvasID >= 400 && canvasID < 499)
	{
		var s = int((lastRecordedTime - frameCount) / 30 + 1);
		health += 20*(+s);
		console.log(health);	
	}
}

