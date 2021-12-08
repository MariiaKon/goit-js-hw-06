const currentValue = document.querySelector('#value')
const incrementBtn = document.querySelector('button[data-action="increment"]')
const decrementBtn = document.querySelector('button[data-action="decrement"]')
let counterValue = 0;

decrementBtn.addEventListener('click', decrease)
incrementBtn.addEventListener('click', increase)

function decrease() {
    counterValue -= 1
    currentValue.textContent = counterValue;
}
function increase() {
    counterValue += 1
    currentValue.textContent = counterValue;
}