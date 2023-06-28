// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  lowerCaseCharCodes = arrayFromLowToHigh(97, 122);
  upperCaseCharCodes = arrayFromLowToHigh(65, 90);
  numberCharCodes = arrayFromLowToHigh(48, 57);
  symbolCharCodes = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64).concat(
      arrayFromLowToHigh(91, 96).concat(arrayFromLowToHigh(123, 126))
    )
  );
  var passwordResult = []
// 1. prompt the user for the password criteria
pLength();
//  a. password length between 8-128
function pLength() {
  var characters = prompt("How many characters would you like the password to be? (8-128 limit)", "12");
  var numOfCharacters = parseInt(characters);
  if (typeof numOfCharacters != isNaN() && (numOfCharacters > 7 && numOfCharacters < 129)) {
    passwordLength = numOfCharacters;
    lCase();
    } else {
      alert("Only numbers between 8 and 128 are allowed");
    pLength();
  }
  return passwordLength;
}

//  b. lower/uppercase
function lCase() {
  var lowercase = window.confirm("Do you want lowercase letters?");
  if (lowercase == true) {
    includeLowercase = true;
    uCase();
  } else {
    includeLowercase = false;
    uCase();
  }
  return includeLowercase;
}

function uCase() {
  var uppercase = window.confirm("Do you want uppercase letters?");
  if (uppercase == true) {
    includeUppercase = true;
    iNum();
  } else {
    includeUppercase = false;
    iNum();
  }
  return includeUppercase;
}
// c. numbers
function iNum() {
  var numbers = window.confirm("Do you want numbers?");
  if (numbers == true) {
    includeNumbers = true;
    sChar();
  } else {
    includeNumbers = false;
    sChar();
  }
  return includeNumbers;
}
// d. special characters
function sChar() {
  var specials = window.confirm("Do you want special characters?")
  if (specials == true) {
    includeSpecial = true;
  } else {
    includeSpecial = false;
  }
  return includeSpecial;
}

// 2. validate the input (1 character type selected minimum)
vCheck();

function vCheck() {
  if (includeLowercase == true || includeUppercase == true || includeNumbers == true || includeSpecial == true) {
    vGood = true;
  } else {
    alert("You must select at least one character option");
    lCase();
  }
  return vGood;
}

function arrayFromLowToHigh(low, high) {
  var array = [];
  for (var i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

// 3. Generate password based on criteria
pCreate()

function pCreate() {
  var charCodes = [];
  if(includeLowercase) {
    charCodes = charCodes.concat(lowerCaseCharCodes);
  }
  if(includeUppercase) {
    charCodes = charCodes.concat(upperCaseCharCodes);
  }
  if(includeNumbers) {
    charCodes = charCodes.concat(numberCharCodes);
  }
  if(includeSpecial) {
    charCodes = charCodes.concat(symbolCharCodes);
  }

  for (var i = 0; i < passwordLength; i++) {
    var passwordCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordResult.push(String.fromCharCode(passwordCode));
  }
  return passwordResult;
}

  return passwordResult.join('');
}
// 4. Display the generated password on the page (return the var holding the password)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
