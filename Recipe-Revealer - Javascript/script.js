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
window.onload = function(){
publishButton = document.querySelector("#publish");
publishButton.addEventListener("click", (e) => {
  alert("Click OK then press Ctrl+Shift+J to view the secret recipe")
});
const recipe = [];/* set recipe equal to an empty array. You will pass this into addInstructions later. */;

const addInstructions = (recipeArray) => {
// add all of the instructions into the recipeArray variable
recipeArray.forEach(function(instruction){
  recipe.push(instruction);
})
// return the array
return recipe;
};
//testing to see if works
const testArray = ["boil","grind","mix","flip"];
addInstructions(testArray);

//Returns the correct step in the array
const checkStep = (step) => {
return recipe[step-1]; //index is one less than checkStep

};
console.log(checkStep(2)); //should be 2

// Write a function checkLength
function checkLength(array)
{
  return array.length;
}
console.log(checkLength(testArray)); //4

// Write a function publishRecipe
function publishRecipe(array)
{
  array.forEach(function(step, i)
  {
    console.log("Step " + (i+1) + ": "  + step);
  })
};

publishRecipe(testArray);
};
