// Ques 1

// function _Date() {
//     var currDate = new Date();
//     console.log(currDate);
// }
// _Date();

// Ques 2

// function greeting(firstName, lastName) {
//     alert("Welcome" + " " + firstName + " " + lastName);
// }
// greeting("Arsalan", "Sohail");

// Ques 3

// function addNumbers() {
//     var num1 = prompt("Enter the first number");
//     var num2 = prompt("Enter the second number");

//     var sum = parseFloat(num1) + parseFloat(num2);
// console.log(sum)
//     return sum;
// }

// let result = addNumbers();
// console.log(result);

// Ques 4

// function calculator(num1, num2, operation) {
//  console.log(num1, num2, operation);
//     if (operation == "+") {
//         var add = num1 + num2
//         alert(add)
//     } else if (operation == "-") {
//         var sub = num1 - num2
//         alert(sub)
//     } else if (operation == "*") {
//         var mul = num1 * num2
//         alert(mul)
//     } else if (operation == "/") {
//         var div = num1 / num2
//         alert(div)
//     } else {
//         alert("Operation Failed.. Try again later.")
//     }
// }

// var firstVal = +prompt("Enter first value", 10);
// var operation = prompt("Enter the operation (i.e. +, -, *, /)", "+");
// var secondVal = +prompt("Enter second value", 10);

// calculator(firstVal, secondVal, operation);

// Ques 5

// function square(val) {
//     var squareRoot = val * val;
//     console.log(squareRoot);
// }
// var rootVal = prompt("Enter number")
// square(rootVal);

// Ques 6

// function factorial(input) {
// alert(input)
//     var factVal = 1;
//     for (var i = input; i >= 1; i--) {
//         console.log(i)
//         factVal = factVal * i;
//     }
//     console.log(factVal)
// }

// factorial(4);

// Ques 7

// function countNumbers(startingNum, endingNum) {
//     var finalResult = "";
//     for (var i = startingNum; i <= endingNum; i++) {
//         // console.log(i)
//         finalResult += i + " ";
//     };
//     console.log(finalResult);
// }

// countNumbers(1, 20);

// Ques 8

// function calcHyp(base, perp) {
//     function square(x) {
//         return x * x
//     }
//     var hyp = square(base) + square(perp);
//     // console.log(hyp)
//     var result = Math.sqrt(hyp);
//     return result;
// }

// var abc = calcHyp(3, 4);
// console.log(abc);

// Ques 9

// function calcWidth(width, height) {
//     var a = width * height;
//     return a;
// }

// Arguments as value
// var result = calcWidth(100, 50);
// console.log(result)

// Arguments as variable
// var widthOfRec = 10;
// var heightOfRec = 5;
// var result = calcWidth(widthOfRec, heightOfRec);
// console.log(result)

// Ques 10

// function isPalindrome(str) {
//     str = str.toLowerCase();
//     var reversedStr = str.split("").reverse().join("");
//     // console.log(reversedStr);
//     if (reversedStr == str) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Some Palindrome Words
// deed
// madam
// noon
// wow

// var result = isPalindrome("deed");
// alert(result);

// Ques 11

// First letter of each word
// function capitalizeWords(str) {
//     var words = str.split(" ");
//     console.log(words)
//     for (var i = 0; i < words.length; i++) {
//         var eachWord = words[i];
//         var capitalize = eachWord.charAt(0).toUpperCase() + eachWord.slice(1);
//         words[i] = capitalize;
//     }
//     var finalStr = words.join(" ");
// console.log(finalStr);
//     return finalStr;
// }
// var result = capitalizeWords("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, optio.");
// console.log(result)

// First letter only
// function firstLetterUp(letter) {
//     console.log(letter)
//     var firstWord = letter.slice(0, 1).toUpperCase();
//     var otherWords = letter.slice(1).toLowerCase();
//     var compLetter = firstWord + otherWords;
//     return compLetter;
// }

// var letterInp = prompt("Enter city", "karachi");
// var result = firstLetterUp(letterInp);
// console.log(result)

// Ques 12

// function findingLargestWord(str) {
//     console.log(str)

//     var longestWord = "";
//     var words = str.split(' ');

//     for (var i = 0; i < words.length; i++) {
//         console.log(words[i].length, longestWord.length)
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i]
//         }
//     }
//     console.log(longestWord)
//     console.log(words);
// };

// findingLargestWord("Web and Mobile Hybrib Development Course")

// Ques 13

// function count(str, chr) {
//     var counter = "";
//     for (var i = 0; i < str.length; i++) {
//         if (chr === str[i]) {
//             counter++;
//         }
        // console.log(str[i], chr, counter);
    // }
//     return counter;
// }

// var result = count("My name is Arsalan", "a");
// alert("The occurance of *a* is " + result);