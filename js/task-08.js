const loginForm = document.querySelector('.login-form')
const submitBtn = document.querySelector('button')

loginForm.addEventListener("submit", onSubmit)

function onSubmit(e) {
    e.preventDefault();

    let { elements: { email, password } } = loginForm;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    else {
        console.log({email: email.value, password: password.value});
    }
    loginForm.reset()
}





