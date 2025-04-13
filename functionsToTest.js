import { generateAlphabetWithCapital } from "./helperFunctions";

export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  const reversedString = string.split("").reverse().join("");
  return reversedString;
}

export const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

export function caesarCipher(string, shiftFactor) {
  const alphabet = generateAlphabetWithCapital();
  const codePointArray = [];

  //   Get code point of each String
  string.split("").forEach((char, index) => {
    // If its in the alphabet array
    if (alphabet.includes(char)) {
      // Add the shiftFactor to Code Point
      // Determine if its lowerCase or CapitalCase
      const charCode = string.charCodeAt(index);
      //   If upperCase
      if (charCode >= 65 && charCode <= 90) {
        // If code point after addition exceeds either 90
        // Get the remainng and add it to either
        // 90 is "Z"
        if (charCode + shiftFactor > 90) {
          const remaining = charCode + shiftFactor - 90;
          //   64 is charcode before "A"
          codePointArray.push(64 + remaining);
        } else {
          // If adding does not exceed then just add shift factor to the codePoint
          codePointArray.push(charCode + shiftFactor);
        }
      } else {
        //If lower case
        // 122 is "z"
        if (charCode + shiftFactor > 122) {
          const remaining = charCode + shiftFactor - 122;
          //   96 is charcode before "a"
          codePointArray.push(96 + remaining);
        } else {
          // If adding does not exceed then just add shift factor to the codePoint
          codePointArray.push(charCode + shiftFactor);
        }
      }
    } else {
      // Else if its special character
      const charCode = string.charCodeAt(index);
      codePointArray.push(charCode);
    }
  });

  const converted = codePointArray
    .map((code) => String.fromCharCode(code))
    .join("");

  return converted;
}

export function analyzeArray(array) {
  const average = array.reduce((prev, cur) => prev + cur, 0) / array.length;
  let min = array[0];
  array.forEach((el) => (el < min ? (min = el) : ""));
  let max = array[0];
  array.forEach((el) => (el > max ? (max = el) : ""));
  const length = array.length;

  return { average, min, max, length };
}
