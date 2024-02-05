const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pass = document.getElementById('pass');


const err1 = document.getElementById('err1');
const err2 = document.getElementById('err2');
const err3 = document.getElementById('err3');


// 
function validate() {

    const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    const validformatRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const validpassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const cleanPhoneNumber = phone.value.replace(/[^\d]/g, '');

    let isValid = true;


    if (validEmailRegex.test(email.value)) {
        err1.innerText = "Email is valid";
        err1.style.color = 'green';
        err1.style.fontSize = '15px';
    } else {
        err1.innerText = "Email is not valid";
        err1.style.color = 'red';
        err1.style.fontSize = '15px';
        isValid = false;
    }
    if (validformatRegex.test(phone.value) && cleanPhoneNumber.length === 10) {
        err2.innerText = "Phone number is valid";
        err2.style.color = 'green';
        err2.style.fontSize = '15px';
    } else {
        err2.innerText = "Phone number is not valid";
        err2.style.color = 'red';
        err2.style.fontSize = '15px';
        isValid = false;
    }

    if (validpassRegex.test(pass.value)) {
        err3.innerText = "Password is valid";
        err3.style.color = 'green';
        err3.style.fontSize = '15px';
    } else {
        err3.innerText = "Password is not valid";
        err3.style.color = 'red';
        err3.style.fontSize = '15px';
        isValid = false;
    }


    const passwordStrength = checkPasswordStrength(pass.value);
    if (passwordStrength === 'strong') {
        err3.innerText = "Password is strong";
        err3.style.color = 'green';
        pass.style.borderBottom = "5px solid green"

    } else if (passwordStrength === 'medium') {
        err3.innerText = "Password is medium, use more case sensitive";
        err3.style.color = 'orange';
        pass.style.borderBottom = "5px solid orange"
    } else {
        err3.innerText = "Password is weak";
        err3.style.color = 'red';
        pass.style.borderBottom = "5px solid red"
        isValid = false;
    }
    return isValid;
}

function checkPasswordStrength(password) {
    if (password.length >= 12 && /\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
        return 'strong';
    } else if (password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
        return 'medium';
    } else {
        return 'weak';
    }
}