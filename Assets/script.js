// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare function that generates the password
const generatePassword = function () {
const passwordLenght = prompt ("How many characters should have your password?");
console.log (passwordLenght);
const passwordLenghtNumber = parseInt("passwordLenght", 10);
console.log (passwordNumber)



  const password = ""
  return password;
};

// Declare global variables
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const SpecialCharacters = [
  "?",
 "!", 
 ",", 
 "@", 
 "&",
 "%",
 "*"
 "^"
];


// Declare four variables
let islowerCase
let isupperCase
let isnumbers
let isSpecialCharacters


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
