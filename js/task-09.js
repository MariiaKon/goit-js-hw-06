function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', btnOnClick)

function btnOnClick() {
  let bodyColor = getRandomHexColor();

  currentColor.textContent = bodyColor;
  body.style.backgroundColor = bodyColor;
}

