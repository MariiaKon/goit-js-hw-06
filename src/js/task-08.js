const loginForm = document.querySelector('.login-form')
const submitBtn = document.querySelector('button')

loginForm.addEventListener("submit", onSubmit)

function onSubmit(e) {
    e.preventDefault();

    let { elements: { email, password } } = loginForm;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    // else {
        // Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства. Для доступа к элементам формы используй
// свойство elements.
// Выведи обьект с введенными данными в консоль 
    // }
    loginForm.reset()
}





