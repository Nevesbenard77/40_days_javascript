console.log("javascript");
// ## 1. function to convert celsius

let fahrenheit = 0;
function convert(celsius) {
  fahrenheit = (celsius * 9) / 5 + 32 + "F";
  console.log(fahrenheit);
}
convert(37);

// ## 2. function max & min
function findMax(num1, num2) {
  const maxNumber = Math.max(num1, num2);
  console.log(maxNumber);
}

findMax(34, 6);

// ## 3.function to check string is palindrome
function isPalindrome(str) {
  const strs = str.split("").reverse().join().toLowerCase();

  for (let i = 0; i < strs.length; i++) {
    if (strs[i] !== strs.length - 1 - i) {
      return false;
    }
  }
  console.log(strs);
  return true;
}
const re = isPalindrome("javascript");
console.log(re);

// ## 4. function to find factoral Number

function factorial(n) {
  let nums = n * 5;
  return nums;
}
console.log(factorial(4));

// ## 5. write function to count vowel in string

function counterVowel(str) {
  let counter = str.length;

  console.log("The vowel are ", counter);
}
counterVowel("aeiou");

// ## 6. function to capitalize first letter of each word

function capitalizeWords(words) {
  console.log(words.toUpperCase());
}
capitalizeWords("am learning coding in javascript language");

// ## 7. use IIFE to print hello javascript

(function (message) {
  console.log(message);
})('"Hello, javascript"');

// ## 8. writing callback function

function greet(name, myCallbBack) {
  myCallbBack(name);
}

const message = (name) => console.log(`${name} says hello world!`);

greet("Benard", message);

// ## 9. creating call stack execution daigram flow
