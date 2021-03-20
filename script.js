// Assignment Code
var generateBtn = document.querySelector("#generate");
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
const SpecialCharacters = ["?", "!", ",", "@", "&", "%", "*", ";"];
// Declare function that generates the password, Declared prompt function
const generatePassword = function () {
  const chosencharvariab = [];
  // Declare four variables
  let islowerCase;
  let isupperCase;
  let isnumbers;
  let isSpecialCharacters;
  const passwordLenght = prompt(
    "How many characters should have your password? Between 8 and 128 characters"
  );
  console.log(passwordLenght);
  const passwordLenghtNumber = parseInt(passwordLenght, 10);
  console.log(passwordLenghtNumber);
  if (passwordLenghtNumber >= 8 && passwordLenghtNumber <= 128) {
    // Confirmation of global variables, characters
    islowerCase = confirm(
      "Do you wish your password to contain lowerCase characters?"
    );
    console.log(islowerCase);

    isupperCase = confirm(
      "Do you wish your password to contain upperCase characters?"
    );
    console.log(isupperCase);

    isnumbers = confirm("Do you wish your password to include numbers?");
    console.log(isnumbers);

    isSpecialCharacters = confirm(
      "Do you wish your password to contain Special characters?"
    );
    console.log(isSpecialCharacters);
  } else {
    alert("the password should contain characters between 8 and 128");
  }
  if (islowerCase) {
    chosencharvariab.push(lowerCase);
  }
  if (isupperCase) {
    chosencharvariab.push(upperCase);
  }
  if (isnumbers) {
    chosencharvariab.push(numbers);
  }
  if (isSpecialCharacters) {
    chosencharvariab.push(SpecialCharacters);
  } else {
    alert("choose at least one type of character");
  }
  console.log(chosencharvariab);

  const password = "hej";
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);