const form = document.querySelector('.form');
const errorWarning = document.querySelector('.error-warning');
const errorIcon = document.querySelector('.error-icon');
const inputEmail = document.querySelector('.input-email');
const button = document.querySelector('.submit');
const thankYou = document.querySelector('.thank-you');

button.addEventListener('click', function(){
    const email = inputEmail.value;
    if (validateEmail(email)){
        thankYou.style.display="flex";
        errorWarning.style.display="none";
        errorIcon.style.display="none";
        form.style.borderColor="hsl(0, 36%, 70%)";
        form.style.borderWidth="1px";
    } else {
        thankYou.style.display="none";
        errorWarning.style.display="flex";
        errorIcon.style.display="flex";
        form.style.borderColor="hsl(0, 93%, 68%)";
        form.style.borderWidth="3px";
    }
});

function validateEmail(email) {
    const validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validate.test(String(email).toLowerCase());
}