// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

let currentlily = 1; //Keeps track of the current lily pad

/* Use a querySelector to grab your frog from your HTML */;
const frogger = document.querySelector("#frog");

/* Insert type of event are we listening for */
frogger.addEventListener("click" , (e) => {
	 // Insert what should happen when you click on the frog!
	console.log("hop");
	//Conditionals depending on currentlily
	if (currentlily == 1) //if frog is currently at first lily
	{
	//moves the frog's position to second lily pad
	frog.style.left = document.querySelector("#lilypad2").style.left;
	frog.style.top = document.querySelector("#lilypad2").style.top;

	//Changes yellow active circle from first lily to second
	document.querySelector("#lilypad2").classList.add("active");
	document.querySelector("#lilypad1").classList.remove("active");
	currentlily++; //increments lily counter
	}
	else if (currentlily == 2) //same logic
	{
	frog.style.left = document.querySelector("#lilypad3").style.left;
	frog.style.top = document.querySelector("#lilypad3").style.top;

	document.querySelector("#lilypad3").classList.add("active");
	document.querySelector("#lilypad2").classList.remove("active");
	if (document.querySelector("#lilypad3").style.visibility == "hidden")
	{
		clearInterval(myVar);
		lostGameMessage();

	}
	currentlily++;
	}
	else if (currentlily == 3) //same logic
	{
	frog.style.left = document.querySelector("#lilypad4").style.left;
	frog.style.top = document.querySelector("#lilypad4").style.top;

	document.querySelector("#lilypad4").classList.add("active");
	document.querySelector("#lilypad3").classList.remove("active");
	currentlily++;
	}
	else if (currentlily == 4) //same logic
	{
	frog.style.left = document.querySelector("#lilypad5").style.left;
	frog.style.top = document.querySelector("#lilypad5").style.top;

	document.querySelector("#lilypad5").classList.add("active");
	document.querySelector("#lilypad4").classList.remove("active");
	currentlily++;
	//stops alternating visibility interval
	clearInterval(myVar);

	//end game message
	wonGameMessage();


	}
	//If user keeps trying to hop when on last lily pad
	else{
		console.log("You already won!! Press spacebar to restart.");
	}


});

//Resets the game when spacebar is pressed (reloads the page)
document.body.onkeyup = function(e){
	if (e.keyCode == 32) //Spacebar keycode = 32
	{
		location.reload();
	}
};

//Makes frog bigger when you mouse over it
frogger.addEventListener("mouseover", (e) =>
{

	bigImg(frog); //function
});

//Returns frog size to normal when you mouse out
frog.addEventListener("mouseout", (e) =>
{

	normalImg(frog); //function
});

//Changes frog's size to 80px by 80px
function bigImg(x)
{
	x.style.height = "85px";
	x.style.width = "85px";
};

//Changes frog's size back to normal (70px by 70px)
function normalImg(x)
{
	x.style.height = "70px";
	x.style.width = "70px";
};

//Gets executed once frog reaches last lily pad, displays congratulations message
function wonGameMessage()
{
board.style.fontSize = "100px";
board.style.color = "white";
board.innerText = "You won!";
board.style.textAlign = "center";

};

//Gets executed if frog jumps on an invisible lily (water)
function lostGameMessage()
{
board.style.fontSize = "100px";
board.style.color = "red";
board.style.backgroundColor = "black";
board.innerText = "You lost!";
board.style.textAlign = "center";

}
//Makes a lilypad alternate between visible and invisible every second
myVar = setInterval(function(){
document.querySelector("#lilypad3").style.visibility = document.querySelector("#lilypad3").style.visibility == "visible" ? "hidden" : "visible";
}, 1000);
