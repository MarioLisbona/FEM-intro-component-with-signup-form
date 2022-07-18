# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![Desktop Initial State](./screenshots/Desktop%20Initial%20State.png)
![Desktop Input Hover State.png](./screenshots/Desktop%20Input%20Hover%20State.png)
![Desktop Empty First Name input field](./screenshots/Desktop%20Empty%20First%20Name%20input%20field.png)
![Desktop Invalid First Name input field](./screenshots/Desktop%20Invalid%20First%20Name%20input%20field.png)
![Desktop Empty Email input field](./screenshots/Desktop%20Empty%20Email%20input%20field.png)
![Desktop Invalid Email input field](./screenshots/Desktop%20Invalid%20Email%20input%20field.png)
![Mobile Empty Email input field](./screenshots/Mobile%20Empty%20Email%20input%20field.png)
![Mobile Invalid Email input field](./screenshots/Mobile%20Invalid%20Email%20input%20field.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/MarioLisbona/FEM-intro-component-with-signup-form)
- Live Site URL: [Add live site URL here](https://mariolisbona.github.io/FEM-intro-component-with-signup-form/)

## My process

I created a 2 column grid to layout the information and the signup form.
I then created the signup form in the second column and used flexbox to layout the pricing information and form containers. I used flex box to align the pricing container information and the user inputs in the form.

I placed the footer at the bottom of the page using ```position: absolute``` and ```bottom: 15px``` Normally i would put ```position: relative``` in the body, however this time i didnt need to use it and i cant figure out why. Normally using ```position: relative``` in the body would allow the position of the footer to stay at the bottom of the page for mobile but this time it wouldnt work at all. I tried everything and couldnt figure it out, so i added a ```display: none``` for mobile.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

I did some research of regex for the validation for the input fields.

For the JavaScript form validation i created all the variables to access the input fields and then created variables to hold the regex for name, email and password fields. I shared the name regex across the first name and last name input fields.

I then created an array that would contain those input fields.

The event listener on the submit button has a callback which is used with preventDefault() to prevent the form being submitted untill all fields are valid.

    submit.addEventListener('click', function(event) {

    //prevents form being submitted if any fields are not valid
    event.preventDefault();

I have then used the ```forEach``` method to access each input field with the callback ```input``` variable.

    userInput.forEach(function (input)

I assign the user input to a variable to check against the regex and then create a variable that will be assigned to the sibling element that comes after the current element that input is represnting. This is so we can access and the error message container that comes after each input.

I use the following code to check which input the function is calling and then use if else statements to first compare the user input to that fields regex validation variable.

If the input field is valid, then i add the hidden class. This is to reset the field to valid if it was previously invalid. Then a 1px green border is added with the inputValid variable.

If the value is empty, i add the 1px red border with the inputInvalid variable and a message saying the field is empty.

If the value is invalid, i add the 1px red border with the inputInvalid variable and a message saying the field is invalid.

    if (input == firstName) {

            if (inputValue.match(nameRegex)) {
                errorContainer.classList.add('hidden');
                input.style.border = inputValid;
            } else if (inputValue == '') {
                errorContainer.classList.remove('hidden');
                errorContainer.lastElementChild.textContent = 'First Name cannot be empty';
            } else {
                input.style.border = inputInvalid;
                errorContainer.classList.remove('hidden');
                errorContainer.lastElementChild.textContent = 'First Name is invalid';
            }

I then slightly change this code to be used for each differnt input field.

This was a great learning experience. I had never used JavaScript to do form validation before this project. Iv tried to document it as thourughly as possible so i have a reference when i need to do it next time.

Edit - I create a function ```checkInput(input, regex)``` that will take in two variables and the above logic so that its not repeated for times for each input



- [Example resource 1](https://stackoverflow.com/questions/46664142/js-regular-expression-for-first-name),
(https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation),
(https://regexlib.com/REDetails.aspx?regexp_id=2799) - I used these 3 websites to find what regular expressions to use for the first name, last name, email and password input fields.

- [Example resource 2](https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp) - i used this site to learn how to access the next sibling in the DOM. I used this to access the error message container from its previous sibling input field so i could remove the hidden class if the user input was not valid for that input field.

## Author

- Frontend Mentor - [@MarioLisbona](https://www.frontendmentor.io/profile/MarioLisbona)