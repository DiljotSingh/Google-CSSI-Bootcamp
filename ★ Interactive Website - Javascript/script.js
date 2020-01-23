window.onload= function (){
//Your entire JS code here

console.log("script running!");

/*let name = 'Charlie';
console.log('Hello ' + name + '!');
let age = 15;
console.log('You are ' + age + ' years old!');

let age = 16;
if (age >= 18){
	console.log('You can vote and get your driver\'s permit!');
}
else if (age <16)
{
	console.log('You will have to wait to get your permit');
}

else if (age==16){
  console.log('You\'re EXACTLY old enough to get your permit!')
}
else{
	  console.log('You can get your driver\'s permit, but you can\'t vote yet.');

}
*/
//Sends an alert when the image of the hummingbird is clicked
document.querySelector(".blog-pics").addEventListener("click", function clicked(){
	alert("Bzzt bzzt me bird");
	document.querySelector(".blog-pics").removeEventListener("click", clicked, false);
}, false);

function pictureChange()
    {
    document.querySelector(".blog-pics").src="http://www.ucjui.com/wp-content/uploads/2017/06/20150802124613evil.jpg";
	document.querySelector(".blog-pics").style.height = "100%";
	document.querySelector(".blog-pics").style.width = "100%";
	
	document.querySelector(".blog-pics").addEventListener("click", (event) => {
	alert("fool, clicking me won't do anything!!")
	})

    }

const likeButton = document.querySelector("#like");
likeButton.addEventListener('click', (event) => {
  // run this code when the button is clicked
  // let's start with a console.log statement
  likeButton.innerHTML = 'Liked!';
  alert("Thanks for liking!");
  likeButton.style.backgroundColor = "#497dd1";
  likeButton.style.fontSize = "110%";
  likeButton.style.color = "white"
  likeButton.style.borderColor = "white";
  
});

const sadButton = document.querySelector("#actuallyabutton");
const evilButton = document.querySelector(".buttonload");
sadButton.addEventListener("click", (event) => {
	sadButton.innerHTML = "Mwahaha you fool, now you perish!!";
	sadButton.disabled = true;
	sadButton.style.border = "0px";
	alert("Oh no! You've released some bugs!");
	console.log("Button clicked!");
	evilButton.style.backgroundColor = "black";
	evilButton.style.color = "red";
	evilButton.style.fontSize = "300%";
	pictureChange();
	
});

}
