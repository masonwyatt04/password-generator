var specialCharacters = ["!#$%*?@^_~"];

var numericCharacters = ["0123456789"];

var lowercaseCharacters = ["abcdefghijklmnopqrstuvwxyz"];

var uppercaseCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

var finalanswer = "";

var passwordcreator= "";

function generatePassword() {

    var passwordLength = prompt("Please choose a password length between 8 and 128 characters.");

    if (passwordLength < 8 || passwordLength > 128){
        alert("Your password needs to be between 8 and 128 characters.");
        return generatePassword();
    }

    var passwordSpecial = confirm("Is it okay to have special characters in your password?");

    var passwordNumeric = confirm("Is it okay to have numeric characters in your password?");

    var passwordLowercase = confirm("Is it okay to have lowercases letters in your password?");

    var passwordUppercase = confirm("Is it okay to have uppercase letters in your password?");


    for (i = 0; i < passwordLength; i++) {


        if (passwordSpecial === true) {
            passwordcreator += passwordcreator + specialCharacters
        }
        else{}

        if (passwordNumeric === true) {
            passwordcreator += passwordcreator + numericCharacters
        }
        else{}

        if (passwordLowercase === true) {
            passwordcreator += passwordcreator + lowercaseCharacters
        }
        else{}

        if (passwordUppercase = true) {
            passwordcreator += passwordcreator + uppercaseCharacters
        }
        else{}

        for ( i = 0; i < passwordLength; i++) {
            finalanswer = finalanswer + passwordcreator.charAt(Math.floor(Math.random() * passwordcreator.length));
        }

        document.getElementById("pcol").innerText = finalanswer;

    }


}

function copyToClipboard() {

    var input = document.createElement('input');

    input.style.opacity = 0;

    document.body.appendChild(input);

    input.value =  document.getElementById("pcol").innerText;

    input.select();
  
    document.execCommand("copy");
    
    input.remove();

}
