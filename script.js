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
  let islowerCase;
  let isupperCase;
  let isnumbers;
  let isSpecialCharacters;
  const passwordArray = [];
  const chosencharvariable = [];
  const passwordLenght = prompt(
    "How many characters should have your password? Between 8 and 128 characters"
  );
  const passwordLenghtNumber = parseInt(passwordLenght, 10);
  if (passwordLenghtNumber >= 8 && passwordLenghtNumber <= 128) {
    // Confirmation of global variables, characters
    // Confirmation for lowerCase
    islowerCase = confirm(
      "Do you wish your password to contain lowerCase characters?"
    );
    // Confirmation for upperCase
    isupperCase = confirm(
      "Do you wish your password to contain upperCase characters?"
    );
    // Confirmation for numbers
    isnumbers = confirm("Do you wish your password to include numbers?");
    // Confirmation for SpecialCharacters
    isSpecialCharacters = confirm(
      "Do you wish your password to contain Special characters?"
    );
  } else {
    alert("the password should contain characters between 8 and 128");
  }
  // Validation function for the type of character and for the new chosen variable
  if (islowerCase) {
    chosencharvariable.push(lowerCase);
  }
  if (isupperCase) {
    chosencharvariable.push(upperCase);
  }
  if (isnumbers) {
    chosencharvariable.push(numbers);
  }
  if (isSpecialCharacters) {
    chosencharvariable.push(SpecialCharacters);
  }
  if (!islowerCase && !isupperCase && !isnumbers && !isSpecialCharacters) {
    alert("choose at least one type of character");
    // Specify the random index for the chosen variable
  } else {
    for (let i = 0; i < passwordLenghtNumber; i++) {
      const randomArray =
        chosencharvariable[
          Math.floor(Math.random() * chosencharvariable.length)
        ];
      const randomCharacter =
        randomArray[Math.floor(Math.random() * randomArray.length)];
      passwordArray.push(randomCharacter);
    }
    const password = passwordArray.join("");
    return password;
  }
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
