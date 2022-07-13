//create variables for DOM elements
const firstName = document.querySelector('.f-name');
const lastName = document.querySelector('.l-name');
const email = document.querySelector('.email');
const password = document.querySelector('.p-word');
const errorMsg = document.querySelector('.error-container');
const submit = document.querySelector('.submit');

//create variables for input regex
const nameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
const emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
const passwordRegex = /^(?=(.*[a-zA-Z].*){2,})(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S]{8,15}$/;
//test case correct: te$tPa55word
//test case incorrect: test5324

// ceate diffreent message for empty field / invalid password?

const inputValid = '1px solid green';
const inputInvalid = '1px solid red';


// Strong passwords with min 8 - max 15 character length, at least two letters (not case sensitive), 
// one number, one special character (all, not just defined), space is not allowed.


//create an array consisting of each input element in the form
const userInput = [firstName, lastName, email, password];

//event listener on submit button - callback function on click
submit.addEventListener('click', function(event) {

    //prevents form being submitted if any fields are not valid
    event.preventDefault();

    //callback function on each element in userInput array (each input of the DOM form)
    userInput.forEach(function (input) {
        //create variable to hold the data entered into the input
        var inputValue = input.value;
        //create a variable that will find the next sibling of the current element
        //this will be the div that contains the error message
        var errorContainer = input.nextElementSibling;
        

        //if the current input field is the first name
        //check user input against regex to see if it is valid
        //If valid add hidden class to remove error message from previously invalid user input
        //Also add a green border to the input field
        //if it is invalid remove the hidden class from the next siblind to reveal the error message
        // and add a red border to the input


        if (input == firstName) {

            if (inputValue.match(nameRegex)) {
                errorContainer.classList.add('hidden');
                input.style.border = inputValid;
            } else {
                input.style.border = inputInvalid;
                errorContainer.classList.remove('hidden');
            }

        //if the current input field is the last name
        //check user input against regex to see if it is valid
        //If valid add hidden class to remove error message from previously invalid user input
        //Also add a green border to the input field
        //if it is invalid remove the hidden class from the next siblind to reveal the error message
        } else if (input == lastName) {

            if (inputValue.match(nameRegex)) {
                errorContainer.classList.add('hidden');
                input.style.border = inputValid;
            } else {
                input.style.border = inputInvalid;
                errorContainer.classList.remove('hidden');
            }

        //if the current input field is the email
        //check user input against regex to see if it is valid
        //If valid add hidden class to remove error message from previously invalid user input
        //Also add a green border to the input field
        //if it is invalid remove the hidden class from the next siblind to reveal the error message
        } else if (input == email) {

            if (inputValue.match(emailRegex)) {
                errorContainer.classList.add('hidden');
                input.style.border = inputValid;
            } else {
                input.style.border = inputInvalid;
                errorContainer.classList.remove('hidden');
            }

        //if the current input field is the password
        //check user input against regex to see if it is valid
        //If valid add hidden class to remove error message from previously invalid user input
        //Also add a green border to the input field
        //if it is invalid remove the hidden class from the next siblind to reveal the error message
        } else if (input == password) {

            if (inputValue.match(passwordRegex)) {
                errorContainer.classList.add('hidden');
                input.style.border = inputValid;
            } else {
                input.style.border = inputInvalid;
                errorContainer.classList.remove('hidden');
            }

        }
    });
});

