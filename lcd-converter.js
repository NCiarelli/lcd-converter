"use strict"
// console.log("Hello");
// Your task is to create an LCD string representation of an integer value using a 3x3 grid of space, underscore, and pipe characters for each digit.

let lcdNumberFunctions = [];
// Strings Builder Function for Numeral 0
let makeStringsForZero = (linesToDisplay) => {
  linesToDisplay[0] += " _  ";
  linesToDisplay[1] += "| | ";
  linesToDisplay[2] += "|_| ";
  return linesToDisplay;
}
lcdNumberFunctions.push(makeStringsForZero);

// Strings Builder Function for Numeral 1
let makeStringsForOne = (linesToDisplay) => {
  linesToDisplay[0] += "    ";
  linesToDisplay[1] += "  | ";
  linesToDisplay[2] += "  | ";
  return linesToDisplay;
}
lcdNumberFunctions.push(makeStringsForOne);

// Strings Builder Function for Numeral 2
let makeStringsForTwo = (linesToDisplay) => {
  linesToDisplay[0] += " _  ";
  linesToDisplay[1] += " _| ";
  linesToDisplay[2] += "|_  ";
  return linesToDisplay;
}
lcdNumberFunctions.push(makeStringsForTwo);

// Strings Builder Function for Numeral 3
let makeStringsForThree = (linesToDisplay) => {
  linesToDisplay[0] += " _  ";
  linesToDisplay[1] += " _| ";
  linesToDisplay[2] += " _| ";
  return linesToDisplay;
}
lcdNumberFunctions.push(makeStringsForThree);

// Strings Builder Function for Numeral 4
let makeStringsForFour = (linesToDisplay) => {
  linesToDisplay[0] += "    ";
  linesToDisplay[1] += "|_| ";
  linesToDisplay[2] += "  | ";
  return linesToDisplay;
}
lcdNumberFunctions.push(makeStringsForFour);

// Strings Builder Function for Numeral 5
let makeStringsForFive = (linesToDisplay) => {
  linesToDisplay[0] += " _  ";
  linesToDisplay[1] += "|_  ";
  linesToDisplay[2] += " _| ";
  return linesToDisplay;
}
lcdNumberFunctions.push(makeStringsForFive);

// Strings Builder Function for Numeral 6
let makeStringsForSix = (linesToDisplay) => {
  linesToDisplay[0] += " _  ";
  linesToDisplay[1] += "|_  ";
  linesToDisplay[2] += "|_| ";
  return linesToDisplay;
}
lcdNumberFunctions.push(makeStringsForSix);

// Strings Builder Function for Numeral 7
let makeStringsForSeven = (linesToDisplay) => {
  linesToDisplay[0] += " _  ";
  linesToDisplay[1] += "  | ";
  linesToDisplay[2] += "  | ";
  return linesToDisplay;
}
lcdNumberFunctions.push(makeStringsForSeven);

// Strings Builder Function for Numeral 8
let makeStringsForEight = (linesToDisplay) => {
  linesToDisplay[0] += " _  ";
  linesToDisplay[1] += "|_| ";
  linesToDisplay[2] += "|_| ";
  return linesToDisplay;
}
lcdNumberFunctions.push(makeStringsForEight);

// Strings Builder Function for Numeral 9
let makeStringsForNine = (linesToDisplay) => {
  linesToDisplay[0] += " _  ";
  linesToDisplay[1] += "|_| ";
  linesToDisplay[2] += "  | ";
  return linesToDisplay;
}
lcdNumberFunctions.push(makeStringsForNine);


function lcd(numToDisplay) {
  let lines = ["", "", ""];
  let numString = numToDisplay.toString();
  // Go through each digit of the input number
  for (let i = 0; i < numString.length; i++) {
    // Add each numeral representation to the lines strings using the functions in the lcdNumberFunctions array
    lines = lcdNumberFunctions[Number(numString.charAt(i))](lines);
  }
  // log the lines to the console to display the icd version of the input number
  for (const line of lines) {
    console.log(line);
  }
}

// lcd(1234567890);