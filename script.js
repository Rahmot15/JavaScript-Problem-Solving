//------------ Problem 1: Reverse a String -----------------------

let problem_1 = "hello"
let res_1 = problem_1.split("").reverse().join("")
console.log(res_1);




//------------ Problem 2: Count Vowels in a String --------------

// let problem_2 = "programming";

// const vowel = "aeiou"
// let count = 0

// for (let pbl of problem_2) {
//     if (vowel.includes(pbl)) {
//         count++
//     }
// }
// console.log(count);







//------------ Problem 3: Check for Palindrome -----------------

// let problem_3 = "madam"
// let res_3 = problem_3.split("").reverse().join("")

// let isPalindrome = problem_3 === res_3

// console.log(isPalindrome);







//------------ Problem 4: Find the Maximum Number -----------------

// let problem_4 = [5, 1, 9, 3]
// let maxNum = problem_4[0]

// for (let num of problem_4) {
//     if(num > maxNum) {
//         maxNum = num
//     }
// }
// console.log(maxNum);






//------------ Problem 5: Remove Duplicates from an Array --------------

// let problem_5 = [1, 2, 2, 3, 4, 4];
// let unique = [...new Set(problem_5)];

// console.log(unique);





//------------ Problem 6: Sum of All Numbers in an Array --------------

// let problem_6 = [1, 2, 3, 4]

// let sum = problem_6.reduce((prv, curr) => {
//     return prv + curr
// })
// console.log(sum);






//------------ Problem 7: Find Even Numbers in an Array ----------------

// let problem_7 = [1, 2, 3, 4, 5, 6];
// let evenNum = [];

// for (let num of problem_7) {
//     if (num % 2 === 0) {
//         evenNum.push(num);
//     }
// }

// console.log(evenNum);





//------------ Problem 8: Capitalize First Letter of Each Word ----------------

// let problem_8 = "hello world";
// let capitalized = problem_8
//     .split(" ")
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(" ");

// console.log(capitalized);






//------------ Problem 9: Find the Factorial of a Number ----------------

// let problem_9 = 3;
// let factorial = 1;

// for (let i = problem_9; i >= 1; i--) {
//   factorial *= i;
// }

// console.log(factorial);






//------------ Problem 10: PingPong Challenge ----------------------

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("PingPong");
//   } else if (i % 3 === 0) {
//     console.log("Ping");
//   } else if (i % 5 === 0) {
//     console.log("Pong");
//   } else {
//     console.log(i);
//   }
// }
