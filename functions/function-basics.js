// Import readline-sync
const input = require('readline-sync');

/* NAMED FUNCTIONS */

// Sample data
let userInput1 = "abc";
let userInput2 = "5551920";
let userInput3 = "3145555678";

// EXAMPLE: Write a function with parameter and a return value of true or false
// that validates that a phone number is both a number and has 10 digits
function isValidPhoneNum(userInput) {
  return !isNaN(Number(userInput)) && userInput.length === 10;
}

// EXAMPLE: Call function and print return values for each sample
console.log(isValidPhoneNum(userInput1));
console.log(isValidPhoneNum(userInput2));
console.log(isValidPhoneNum(userInput3));


/* MULTIPLE FUNCTIONS */

// Existing data to be updated
let userPhone = "(314) 555-1234";

// "Helper" or "minor" functions

// EXAMPLE: Get user input, validate with function written above, and return validated input
function promptUserForNewPhone() {
    let newPhone = input.question("\nTo update your contact information, please enter your 10-digit phone number.\n");
    while (!isValidPhoneNum(newPhone)) {
        newPhone = input.question("Please enter a valid 10-digit number: \n");
    }
    return newPhone;
}

// EXAMPLE: Format a phone number like this: (314) 555-1234 and return the string
function formatPhone(phoneNum) {
    let areaCode = phoneNum.slice(0, 3);
    let exchange = phoneNum.slice(3, 6);
    let line = phoneNum.slice(6);
    return `(${areaCode}) ${exchange}-${line}`;
}

// EXAMPLE: assign a new value to existing global variable userPhone
function updatePhone(phoneNum) {
    userPhone = formatPhone(phoneNum);
}

// EXAMPLE: Write a primary function that makes use of other functions
function runPhoneUpdateSequence() {

  // EXAMPLE: Ask user for new phone number, with validation
    let newNum = promptUserForNewPhone();

  // EXAMPLE: Update their record
  updatePhone(newNum);

  // EXAMPLE: Print a confirmation using number now on record
  console.log(`
Thank you! Your new phone number has been saved: ${userPhone}
`);
}

// EXAMPLE: Call primary function
runPhoneUpdateSequence();
