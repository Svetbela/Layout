'use strict';

const email = document.getElementById('email-box');
const password = document.getElementById('password-box');
const button = document.querySelector('.form__button');

const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const user = {
    email: 'no email',
    password: 'no password'
};

button.addEventListener('click', (event) => {
    event.preventDefault();

    if (email.value === '') {
        email.style.border = '1px solid #CB2424';
        emailError.style.display = 'block';
    } else if (!validateEmail(email.value)) {
        email.style.border = '1px solid #CB2424';
        emailError.style.display = 'block';
        emailError.innerHTML = "Почта указана некорректно";
    } else {
        user.email = email.value;
        email.style.border = '1px solid #D58C51';
        emailError.style.display = 'none';
    }

    if (password.value === '') {
        password.style.border = '1px solid #CB2424';
        passwordError.style.display = 'block';
    } else if (password.value.length < 6) {
        password.style.border = '1px solid #CB2424';
        passwordError.style.display = 'block';
        passwordError.innerHTML = "Пароль должен содержать не менее 6 символов";
    } else {
        user.password = password.value;
        password.style.border = '1px solid #D58C51';
        passwordError.style.display = 'none';
    }
    
    if (validateEmail(email.value) && password.value.length >= 6) {
        console.log(user);
    }
})

