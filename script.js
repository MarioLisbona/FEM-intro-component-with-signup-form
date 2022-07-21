//create variables for DOM elements
const firstName = document.querySelector('.f-name');
const lastName = document.querySelector('.l-name');
const email = document.querySelector('.email');
const password = document.querySelector('.p-word');
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

    userInput.forEach(function (input) {

        input.oninput = () => {

            if (input == firstName) {
                checkInput (input, nameRegex);
            } else if (input == lastName) {
                checkInput (input, nameRegex);
            } else if (input == email) {
                checkInput (input, emailRegex);
            } else if (input == password) {
                checkInput (input, passwordRegex);
            }
        }
    });
    
function checkInput (input, regex) {
    //create variable to hold the data entered into the input
    //create a variable that will find the next sibling of the current element
    //this will be the div that contains the error message
    var errorContainer = input.nextElementSibling;
    var userInput = input.value

    //check user input against its relevant regex to see if it is valid
    //If valid add hidden class to remove error message from previously invalid user input
    //Also add a green border to the input field
    //if it is invalid remove the hidden class from the next siblind to reveal the error message
    //Added error messages for whether the input field is empty or invalid

    if (userInput.match(regex)) {
        errorContainer.classList.add('hidden');
        input.style.border = inputValid;
    } else if (userInput == '') {
        input.style.border = inputInvalid;
        errorContainer.classList.remove('hidden');
        // errorContainer.lastElementChild.textContent = `${type} field cannot be empty`;
        errorContainer.lastElementChild.textContent = `${input.name} cannot be empty`;
    } else {
        input.style.border = inputInvalid;
        errorContainer.classList.remove('hidden');
        errorContainer.lastElementChild.textContent = `${input.name} is invalid`;
    }
};
