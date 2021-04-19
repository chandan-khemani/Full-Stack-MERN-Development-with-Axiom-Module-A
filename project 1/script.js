// Retrieve all HTML elements from DOM
const form_element = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input_element, error_message) {
    const formcontrol_element= input_element.parentElement;
    formcontrol_element.className='form-control error';
    const small_element= formcontrol_element.querySelector('small');
    small_element.innerText=error_message;
}
function showSuccess(input_element) {
    const formcontrol_element= input_element.parentElement;
    formcontrol_element.className='form-control success';
}



// Create event listener for submit button
form_element.addEventListener('submit', function(e){
    e.preventDefault();

    // Validating Username
    if (username.value === "") {
        showError(username, 'Username is required');
    } else if(username.value.length < 5 || username.value.length >15){
        showError(username, 'Username should be of 5 to 15 characters.');

    }
    // Checks username contains alphanumeric letters
    else if(!username.value.match(/^[A-Za-z0-9]+$/)){
        showError(username, 'Username should be Alphanumeric.');

    }
    else {
        showSuccess(username);
    }

    // Validating Email id 
    if (email.value === "") {
        showError(email, 'Email Id is required');
    } else if(email.value.length < 5 || email.value.length >15){
        showError(email, 'Email Id should be of 5 to 15 characters.');

    }
    else {
        showSuccess(email);
    }

    // Validating Password
    if (password.value === "") {
        showError(password, 'Password is required');
    } else if(password.value.length < 5 || password.value.length >15){
        showError(password, 'Password should be of 5 to 15 characters.');

    }
    else {
        showSuccess(password);
    }

    // Validating Confirm Password
    if (password2.value === "") {
        showError(password2, 'Re-Enter Password for confirmation');
    } else if(password2.value.length < 5 || password2.value.length >15){
        showError(password2, 'Confirm Password should be of 5 to 15 characters.');

    } else if(password2.value.length !== password.value.length){
        showError(password2, 'Confirmation Password don\'t get matched');

    }
    else {
        showSuccess(password2);
    }

    
});