const score = 400
console.log(score) // one way to declare a number 

const balance = new Number(100)
console.log(balance); // another way to declare a number, it is used when we want to make an object of type number

// there are various methods used in numbers -->

console.log(balance.toString());
// this toString() func converts the number into strings and when we check the typeof balance, it will return string
// now, as we've coverted num into str, we have operations to perform on in such as, 
console.log(balance.toString().length()); // gives the length of string

console.log(balance.toFixed(2)); // The toFixed() method converts a number to a string.
// The toFixed() method rounds the string to a specified number of decimals.

// **** IMP ****
const num2 = 23.47839
console.log(num2.toPrecision(3)); // gives the precision value

const num3 = 100000
console.log(num3.toLocaleString()); // includes commas in between the numbers to make it easier for counting
// additionally this function is by default set by US standard, but we can also make in India
console.log(num3.toLocaleString('en-IN'));
// this includes commas according to Indian number system


// *******************  MATHS  **************************

console.log(Math); // Math is also an obejct in javascript jsut like Number. It also includes its various functions
console.log(Math.abs(-2)); // gives absolute value
console.log(Math.round(5.6)); // rounds the number if decimal is greater than .5 & rounds the number down if decimal value is less than .5
console.log(Math.ceil(7.2)); // rounds the number up
console.log(Math.floor(2.9)); // rounds the number down
console.log(Math.min(4, 2, 1, 8)); // return the minimum value
console.log(Math.max(4, 2, 1, 8)); // return the maximum value

console.log(Math.random()); 
// In Math.random, the value will always be between 0 to 1
console.log((Math.random()*10) + 1); // in this the value be between 0 to 10
console.log(Math.floor(Math.random()*10) + 1); // just rounding the number to lowest value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// to understand this formula, watch the video chai aur code, video number 12

 






