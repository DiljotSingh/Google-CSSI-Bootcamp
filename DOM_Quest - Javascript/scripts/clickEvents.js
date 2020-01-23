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

console.log("Running Click Events Script");

//In the first row of boxes - when you click a box, change the other boxes to the same color


document.addEventListener("click", (event) =>
{
	if (event.target == document.querySelector("#box1"))
	{
		//tried to access background color by doing box2.style.backgroundColor = box1.style.backgroundColor;
		console.log("box1");
		box2.style.backgroundColor = "red";
		box3.style.backgroundColor = "red";
		
	}
	else if (event.target == document.querySelector("#box2"))
	{
		console.log("box2");
		box1.style.backgroundColor = "pink";	
		box3.style.backgroundColor = "pink";


	}
	else if (event.target == document.querySelector("#box3"))
	{
		console.log("box3");
		box1.style.backgroundColor = "orange";
		box2.style.backgroundColor = "orange";

	}
	else if (event.target == document.querySelector("#box4"))
	{
		if (box4.classList.contains("active"))
		{
			box4.classList.add("box");
			box4.classList.remove("active");
		
		}
		else if (box4.classList.contains("box"))
		{
			box4.classList.add("active");
			
		}
	}
	else if (event.target == document.querySelector("#box5"))
	{
		if (box5.classList.contains("box") && !box5.classList.contains("active"))
		{
			box5.classList.add("active");
			
		}
		else{
			box5.classList.remove("active");
			
		}
		
		
		
		
	}

	
	
	
});



