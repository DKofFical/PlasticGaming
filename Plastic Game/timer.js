var maxTime;
var resetTime;
var lastRecordedTime;


function setupTimer()
{
	frameRate(30);

	// modify this for when you want to countdown from.
	maxTime = 20;
	resetTime = false;

}

function manageTime(x,y)
{
	if (resetTime == false)
	{
		resetTime = true;
		lastRecordedTime = frameCount + maxTime * 30;
	}
	else
	{
		if (frameCount >= lastRecordedTime)
		{
			resetTime = false;

			// uses function from health.js
			canvasID++;
			typingBox.value("");
		}
	}
	showTimeBar(50,530);

}

function resetTime()
{
	lastRecordedTime = 0;
}

function showTimeBar(x,y)
{
	fill(255,255,255);
	rect(x,y,(lastRecordedTime - frameCount),50);

	textSize(18);
	fill(0,0,0);
	var s = int((lastRecordedTime - frameCount) / 30 + 1);
	text("Time Remaining: "+s,x+30,y+30);
	textSize(12);
}