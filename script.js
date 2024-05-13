// REVERSE A STRING
// const str = 'hello john';
// const newStr = str
// .split('')
// .reverse()
// .join('');

// console.log(newStr);

//COUNT CHARACTERS
//const string = 'hello john';
//for (let i = 0; i < string.length; i++) {
    //console.log(string[i]);
//} 

//CAPITALIZE WORDS
// function capitalizeWords(sentence) {
//     // Split the sentence into an array of words
//     let words = sentence.split(" ");
    
//     // Iterate through the array and capitalize the first letter of each word
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }
    
//     // Join the words back into a sentence
//     return words.join(" ");
// }

// let mySentence = "hello world! this is a test.";
// console.log(capitalizeWords(mySentence)); 


//ARRAY FUNCTIONS
// Maximum and Minimum
// function findMax(array) {
//     if (array.length === 0) {
//         return undefined; // Return undefined if the array is empty
//     }
    
//     let max = array[0]; // Initialize max with the first element of the array
    
//     // Iterate through the array to find the maximum value
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
    
//     return max;
// }

// function findMin(array) {
//     if (array.length === 0) {
//         return undefined; // Return undefined if the array is empty
//     }
    
//     let min = array[0]; // Initialize min with the first element of the array
    
//     // Iterate through the array to find the minimum value
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
    
//     return min;
// }

// // Example usage:
// let numbers = [5, 3, 9, 1, 7];
// console.log("Maximum value:", findMax(numbers)); 
// console.log("Minimum value:", findMin(numbers)); 

//  SUM OF ARRAY
// function sumArray(array) {
//     let sum = 0;
    
//     // Iterate through the array and add each element to the sum
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
    
//     return sum;
// }

// // Example usage:
// let numbers = [1, 2, 3, 4, 5];
// console.log("Sum of array elements:", sumArray(numbers)); 

// FILTER ARRAY

// function filterArray(array, condition) {
//     return array.filter(condition);
// }

// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = filterArray(numbers, function(num) {
//     return num % 2 === 0; // Filtering out even numbers
// });

// console.log("Filtered array:", evenNumbers); 

// MATHEMATICAL FUNCTION
//FACTORIAL
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1; // Factorial of 0 and 1 is 1
//     } else {
//         let result = 1;
//         for (let i = 2; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }

// let num = 5;
// console.log("Factorial of", num, "is", factorial(num));

//PRIME NUMBER CHECK

// function isPrime(number) {
//     if (number <= 1) {
//         return false; // 0 and 1 are not prime numbers
//     }
    
//     // Check for factors from 2 to the square root of the number
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false; // If the number is divisible by any other number, it's not prime
//         }
//     }
    
//     return true; // If no factors are found, the number is prime
// }

// let num = 17;
// console.log(num, "is prime:", isPrime(num)); 

// Fibonacci Sequence:

function fibonacci(n) {
    let sequence = [];
    
    if (n >= 1) {
        sequence.push(0);
    }
    if (n >= 2) {
        sequence.push(1);
    }
    
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    
    return sequence;
}

// Example usage:
let numTerms = 10;
console.log("Fibonacci sequence up to", numTerms, "terms:", fibonacci(numTerms));









