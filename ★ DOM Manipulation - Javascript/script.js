window.onload = function(e){

console.log("Script running!");

const p = document.querySelector('p');


//Practice adding and removing classes to and from objects
p.classList.add('red');
console.log(p);

p.classList.add("big");
console.log(p);

p.classList.remove("red");
console.log(p);

//button practice
const button = document.querySelector('button');
let size = 50;


//Mouse over event listener
button.addEventListener("mouseover", (event) =>
{
	button.innerHTML = "Don't click!";
	button.classList.add("danger");

});

//Mouse out event listener
button.addEventListener("mouseout", (event) =>
{
	button.innerHTML = "Click me!";
	button.classList.remove("danger");
	size = 50; //resets button original size
	button.style.width = size + "px";
	button.style.height = size + "px";
});

//Button gets bigger as you move your mouse
button.addEventListener("mousemove", (event) =>
{
	size = size + 1;
	button.style.width = size + "px";
	button.style.height = size + "px";

});

//Box global key practice
const randomHexColor = () =>{
	return "#" + ("000000" + Math.floor(Math.random() * 16777216).toString(16)).slice(-6).toUpperCase();
};

const box = document.querySelector("#box");
let shiftLeft = 100;
let shiftTop = 100;

//Generates a random color in box when mouse moves
document.addEventListener("mousemove", (event) =>
{
	box.style.backgroundColor = randomHexColor();

});

//Moves box if corresponding arrow key pressed
document.addEventListener("keydown", (event) =>
{
	// Let's log the keydown event so we can explore what properties it has.
	console.log(event);

	if (event.key === "ArrowDown")
	{
		shiftTop = shiftTop + 5;
	}
	else if (event.key === "ArrowUp")
	{
		shiftTop = shiftTop - 5;
	}
	else if (event.key === "ArrowLeft")
	{
		shiftLeft = shiftLeft - 5;
	}
	else if (event.key === "ArrowRight")
	{
		shiftLeft = shiftLeft + 5;
	}

	 // update the position of the box
  box.style.left = shiftLeft + 'px';
  box.style.top = shiftTop + 'px';

});

signinButton = document.querySelector("#sign-in");
signinButton.addEventListener("click", (event) =>
{
	window.location = "/C:/Users/dsing/Documents/CSSI/CSSI_NOTES/Javascript/ScriptingExample4EventListeners/signin.html"
});


};
