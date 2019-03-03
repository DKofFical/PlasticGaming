var typingBox;
var words1;
var answer1;
var words2;
var answer2;
var words3;
var answer3;
var words4;
var answer4;
var ding;


function preloadTyping()
{
	ding = loadImage('https://dkoffical.github.io/codinggame/Actual%20Coding%20Game/sounds/ding.mp3');
}


function setupTyping()
{
	// question bank number 1
	wordsMax1 = 5;
	words1 = new Array(wordsMax1);
	answer1 = new Array(wordsMax1);
	wordsMax2 = 5;
	words2 = new Array(wordsMax2);
	answer2 = new Array(wordsMax2);
	wordsMax3 = 5;
	words3 = new Array(wordsMax3);
	answer3 = new Array(wordsMax3);
	wordsMax4 = 5;
	words4 = new Array(wordsMax4);
	answer4 = new Array(wordsMax4);

	answer1[1] = "89";
	answer1[2] = "43";
	answer1[3] = "91";
	answer1[4] = "73";
	answer2[1] = "46";
	answer2[2] = "11";
	answer2[3] = "27";
	answer2[4] = "45";
	answer2[5] = "55";
	answer2[6] = "19";
	answer3[1] = "60";
	answer3[2] = "57";
	answer3[3] = "156";
	answer3[4] = "112";
	answer3[5] = "100";
	answer3[6] = "54";
	answer3[7] = "84";
	answer3[8] = "68";
	answer4[1] = "16";
	answer4[2] = "2";
	answer4[3] = "7";
	answer4[4] = "11";
	answer4[5] = "21";
	answer4[6] = "3";
	answer4[7] = "13";
	answer4[8] = "6";
	answer4[9] = "41";
	answer4[10] = "14";

	words1[1] = "16+73=";
	words1[2] = "24+19=";
	words1[3] = "78+13=";
	words1[4] = "47+26=";
	words2[1] = "89-43=";
	words2[2] = "28-17=";
	words2[3] = "95-68=";
	words2[4] = "74-29=";
	words2[5] = "92-37=";
	words2[6] = "48-29=";
	words3[1] = "15x4=";
	words3[2] = "19x3=";
	words3[3] = "13x12=";
	words3[4] = "8x14=";
	words3[5] = "10x10=";
	words3[6] = "27x2=";
	words3[7] = "7x12=";
	words3[8] = "17x4=";
	words4[1] = "96/6=";
	words4[2] = "34/17=";
	words4[3] = "91/13=";
	words4[4] = "88/8=";
	words4[5] = "84/4=";
	words4[6] = "81/27=";
	words4[7] = "13/1=";
	words4[8] = "90/15=";
	words4[9] = "82/2=";
	words4[10] = "98/7=";
	// question bank number 1


	// setup textbox
	typingBox = createInput('');
	typingBox.position(300,230);
	typingBox.size(120,60);

	


}



function showQuestion(x)
{
	if (canvasID >= 100 && canvasID < 199)
	{
		fill(0,0,0);
		text(words1[x],110,200);
		textSize(50);

		if (typingBox.value() == answer1[x])
		{
			var s = int((lastRecordedTime - frameCount) / 30 + 1);
			resetTime = false;
			typingBox.value("");
			addHealth(5*(+s));
			console.log('adding health');
			nextLevel();


			//add sound effect
		}
	}
	if (canvasID >= 200 && canvasID < 299)
	{
		fill(0,0,0);
		text(words2[x],110,200);
		textSize(50);

		if (typingBox.value() == answer2[x])
		{
			var s = int((lastRecordedTime - frameCount) / 30 + 1);
			resetTime = false;
			typingBox.value("");
			addHealth(10*(+s));
			console.log('adding health');
			nextLevel();
		}
	}
	if (canvasID >= 300 && canvasID < 399)
	{
		fill(0,0,0);
		text(words3[x],110,200);
		textSize(50);

		if (typingBox.value() == answer3[x])
		{
			var s = int((lastRecordedTime - frameCount) / 30 + 1);
			resetTime = false;
			typingBox.value("");
			addHealth(15*(+s));
			console.log('adding health');
			nextLevel();
		}
	}
	if (canvasID >= 400 && canvasID < 499)
	{
		fill(0,0,0);
		text(words4[x],110,200);
		textSize(50);

		if (typingBox.value() == answer4[x])
		{
			var s = int((lastRecordedTime - frameCount) / 30 + 1);
			resetTime = false;
			typingBox.value("");
			addHealth(20*(+s));
			console.log('adding health');
			nextLevel();
		}
	}


function nextLevel()
{
	canvasID++;
	

}



	/*()
	else if (array == 2 && typingBox.value() == "43")
	{
//		canvasID = 102;
		typingBox.value("43");
		resetTime = false;
		resetTime();
	}
	else if (array == 3 && typingBox.value() == "91")
	{
		canvasID = 103;
		typingBox.value("91");
		resetTime = false;
	}
	else if (array == 4 && typingBox.value() == "73")
	{
		canvasID = 104;
		typingBox.value("73");
		resetTime = false;
	}
	*/

	// calls function in timer.js
	manageTime(50,500);
	drawHealth(-1);
	textSize(50);

}
