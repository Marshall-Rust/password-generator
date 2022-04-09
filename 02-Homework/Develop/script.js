//My input variables:
var enter;
var confirmNumber;
var confirmSpecial;
var confirmUppercase;
var confirmLowercase;

//Set the password variables

//List of special
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
 // List of Numbers
 number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//list of letters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//going to use "space" to convert to Uppercase
space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();

}

alpha2 = alpha.map(toUpper);


// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
    password = generatePassword();
    document.getElementById("password").placeholder =  password;
    }
);

function generatePassword() {
    //start prompts
    enter = parseInt(prompt("Lets make a password, how many characters would you like? Between 8-128"));

    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        confirmUppercase = confirm("Would you like the password to have Uppercase letters?");
        confirmLowercase = confirm("Would you like the password to have Lowercase letters?");
        confirmNumber = confirm("Would you like to use Numbers?");
        confirmSpecial = confirm("Will this contain special characters?");
    };


}




// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



