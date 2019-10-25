var specialCharacters = ["!", "#", "$", "%", "*", "?", "@", "^", "_", "~"];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function generatepassword() {

    var passwordLength = prompt("Please choose a password length between 8 and 128 characters.");

    if (passwordLength < 8 || passwordLength > 128){
        alert("Your password needs to be between 8 and 128 characters.");
        return generatepassword();
    }

    var passwordSpecial = confirm("Is it okay to have special characters in your password?");

    var passwordNumeric = confirm("Is it okay to have numeric characters in your password?");

    var passwordLowercase = confirm("Is it okay to have lowercases letters in your password?");

    var passwordUpperase = confirm("Is it okay to have uppercase letters in your password?");

}

