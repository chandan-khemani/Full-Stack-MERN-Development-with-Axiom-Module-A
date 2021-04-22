const form_element=document.getElementById('signup-form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

// Function for displaying error message under input field
function showError(input_element, error_message) {
    const formcontrol_element= input_element.parentElement;
    formcontrol_element.className='form-control error';
    const small_element= formcontrol_element.querySelector('small');
    small_element.innerText=error_message;
    return false;
}

// show success display over valid input field data
function showSuccess(input_element) {
    const formcontrol_element= input_element.parentElement;
    formcontrol_element.className='form-control success';

    // return false;
}


function checkRequired(el){
    const input_name=ucFirstLetter(el.attributes.item(2).value);
    // console.log(input_name);

   if (el.value ==="") {
       if (input_name !== 'Password2') {
        showError(el, input_name + ' is required');
       }
       else{
        showError(el, 'Confirm Password is required');

       }
   } else {
       showSuccess(el);
   }
    return false;
}

function checkLength(el, min, max){
    const input_name=ucFirstLetter(el.attributes.item(2).value);
    if (el.value.length > 0 && (el.value.length < min || el.value.length > max)) {
        showError(el, input_name + ' must be '+ min + '-' + max);

    } 
    return false;
}

function checkPasswordMatch(p, p2){


        if (p2.value.length >= 5 && p2.value.length <= 12) {
            if(p.value !== p2.value){
                showError(p2, 'Confirm Password don\'t match');
            }           

        }

    return false;
}


function ucFirstLetter(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


form_element.addEventListener('submit', function(e){
    e.preventDefault(); 

    //checks whether username have been inserted or not
    checkRequired(username);    
    
    //checks whether email have been inserted or not
    checkRequired(email);       

    //checks whether password have been inserted or not
    checkRequired(password);    

    //checks whether confirm password field have been inserted or not
    checkRequired(password2);


    //checks whether username length is valid or not
    checkLength(username, 5, 12);
    
    //checks whether username length is valid or not
    checkLength(email, 5, 30);

    //checks whether username length is valid or not
    checkLength(password, 5, 12);     
    
    //checks whether username length is valid or not
    checkLength(password2, 5, 12);

    //checks whether confirm password is machting or not
    checkPasswordMatch(password, password2);


});