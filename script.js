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
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//going to use "space" to convert to Uppercase
space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();

}

letter2 = letter.map(toUpper);


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
    // If you choose cancel it sends an alert
    if (!enter) {
        alert("This needs a value");
        // prompts you to answer the question.
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        confirmUppercase = confirm("Would you like the password to have Uppercase letters?");
        confirmLowercase = confirm("Would you like the password to have Lowercase letters?");
        confirmNumber = confirm("Would you like to use Numbers?");
        confirmSpecial = confirm("Will this contain special characters?");
    };
        //If you choose nothing it sends this.
        //4 choices
    if (!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmSpecial) {
        choices = alert("You must pick something! Work with me here!!");
    }
    else if (confirmLowercase && confirmNumber && confirmSpecial && confirmUppercase) {
        choices = character.concat(number, letter, letter2);
    }  //3 choices
    else if (confirmSpecial && confirmNumber && confirmUppercase) {
        choices = character.concat(number, letter2)
    }
    else if (confirmSpecial && confirmLowercase && confirmUppercase) {
        choices = character.concat(letter, letter2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = character.concat(letter, letter2);
    }

//2 choices
    else if (confirmSpecial && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmSpecial && confirmLowercase) {
        choices = character.concat(letter);

    } else if (confirmSpecial && confirmUppercase) {
        choices = character.concat(letter2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = letter.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = letter.concat(letter2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(letter2);
    }

 //1 choice
    else if (confirmSpecial) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = letter;
    }
    
    else if (confirmUppercase) {
        choices = space.concat(letter2);
    };

    var password = [];
    //chooses answer for all choices
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // had to google to find out how to do this.
    var password = password.join("");
    UserInput(password);
    return password;


    function UserInput(password) {
        document.getElementById("password").textContent = password;
    
    }





}



