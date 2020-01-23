window.onload = function(e)
{
console.log("Script running!");

const buttons = document.querySelectorAll('button');
const box = document.querySelector('#box');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const color = button.innerHTML;
    if (button.style.background == color)
    {
      button.style.background = "";
    }
    else {
      button.style.background = color;
    }
    box.style.background = color;
  });
});


};
