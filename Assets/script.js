// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare function that generates the password, Declared prompt function
const generatePassword = function (){

const passwordLenght = prompt ("How many characters should have your password? Between 8 and 128 characters");
console.log (passwordLenght);
const passwordLenghtNumber = parseInt("passwordLenght", 10);
console.log (passwordLenghtNumber);
if (passwordLenghtNumber >= 8 && passwordLenghtNumber <= 128) }

is lowerCase = confirm
("Do you wish your password to contain lowerCase characters?")
console.log (lowerCase character)

is upperCase = confirm
("Do you wish your password to contain upperCase characters?")
console.log (upperCase character)

is numbers = confirm
("Do you wish your password to include numbers?")
console.log (numbers character)

isSpecialCharacters = confirm
("Do you wish your password to contain Special characters?")
console.log (SpecialCharacters)

} else {
  alert ("the password should contain characters between 8 and 128")
}
if (islowerCase) {
  chosencharvariab.push(lowerCaseVariable);
} else if (isupperCase)
chosencharvariab.push(upperCaseVariable);
} else if (isnumbers)
chosencharvariab.push(numbersVariable);
} else if (isSpecialCharacters)
chosencharvariab.push(SpecialCharactersVariable);
} else {
  alert ("choose at least one type of character")
}

const password = "hej"
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
 ";"
];


// Declare four variables
let islowerCase;
let isupperCase;
let isnumbers;
let isSpecialCharacters;



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
