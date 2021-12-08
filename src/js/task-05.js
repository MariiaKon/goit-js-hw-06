const input = document.getElementById('name-input')
const newValue = document.getElementById('name-output')

input.addEventListener('input', onInputEvent)

function onInputEvent (event) {
    if (input.value.trim() == '') {
        newValue.textContent = 'Anonymous';
    } else {
        newValue.textContent = input.value;
    }
}