// 1)If the user types negative numbers, show "enter a positive value".

let inputValue;

do {
  inputValue = parseInt(prompt("Enter a positive value:"));
} while (inputValue <= 0);

console.log("Input value:", inputValue);
// Perform further operations with the valid input value

// 2)If the user types an even number, show the next 3 even numbers
let userInput = parseInt(prompt("Enter a number:"));

if (userInput % 2 === 0) {
  console.log("Next three even numbers:");

  for (let i = 1; i <= 3; i++) {
    let nextEvenNumber = userInput + (2 * i);
    console.log(nextEvenNumber);
  }
} else {
  console.log("You did not enter an even number.");
}

// 3)If the user types an odd number, show the next 3 odd numbers.
let inputValue = parseInt(prompt("Enter a number:"));

if (inputValue % 2 !== 0) {
  console.log("Next three odd numbers:");

  for (let i = 1; i <= 3; i++) {
    let nextOddNumber = inputValue + (2 * i);
    console.log(nextOddNumber);
  }
} else {
  console.log("Input is not an odd number.");
}