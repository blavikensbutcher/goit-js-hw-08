import throttle from "lodash.throttle";

const throttledResult = throttle(inputHandler, 500)

const KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const button = document.querySelector('button')
form.addEventListener('input', throttledResult);
form.addEventListener('submit', handleSubmit)

const result = {

}

function inputHandler(event) {
    result.email = form.email.value;
    result.message = form.message.value;
    localStorage.setItem(KEY, JSON.stringify(result))
}

function handleSubmit(event) {
    event.preventDefault();
    console.log(result);
    localStorage.removeItem(KEY);
    form.reset();
    
}

if (localStorage.getItem(KEY)) {
   const temp = JSON.parse(localStorage.getItem(KEY));
    if (temp) {
        form.email.value = temp.email;
        form.message.value = temp.message;
    }
}

//fff