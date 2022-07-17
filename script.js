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

// Strong passwords with min 8 - max 15 character length, at least two letters (not case sensitive), 
// one number, one special character (all, not just defined), space is not allowed.
//test case correct: te$tPa55word
//test case incorrect: test5324
const passwordRegex = /^(?=(.*[a-zA-Z].*){2,})(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S]{8,15}$/;


const inputValid = '1px solid green';
const inputInvalid = '1px solid red';


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

        if (input == firstName) {
            checkInput (input, inputValue, nameRegex, 'First Name');
        } else if (input == lastName) {
            checkInput (input, inputValue, nameRegex, 'Last Name');
        } else if (input == email) {
            checkInput (input, inputValue, emailRegex, 'Email');
        } else if (input == password) {
            checkInput (input, inputValue, passwordRegex, 'Password');
        }
    });
});



//check user input against its relevant regex to see if it is valid
//If valid add hidden class to remove error message from previously invalid user input
//Also add a green border to the input field
//if it is invalid remove the hidden class from the next siblind to reveal the error message
//Added error messages for whether the input field is empty or invalid

function checkInput (input, userInput, regex, type) {
    var errorContainer = input.nextElementSibling;

    if (userInput.match(regex)) {
        console.log(userInput);
        errorContainer.classList.add('hidden');
        input.style.border = inputValid;
    } else if (userInput == '') {
        input.style.border = inputInvalid;
        errorContainer.classList.remove('hidden');
        errorContainer.lastElementChild.textContent = `${type} field cannot be empty`;
    } else {
        input.style.border = inputInvalid;
        errorContainer.classList.remove('hidden');
        errorContainer.lastElementChild.textContent = `${type} is invalid`;
    }
};
