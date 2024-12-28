const myArr = [1, 2, true, "dhiren", 10.0] 
// we can store values of any datatype using arrays
// arrays are resizeable in JS
console.log(myArr[0]); // accessing elements in an array

const myArr2 = new Array(1, 2, 3, 4, 5)
// another way to declare the arrays

// array methods -->

myArr2.push(6) // adds the element at the end of a array
myArr2.push(7)
myArr2.pop() // removes the element from the end of an array
console.log(myArr2);

myArr2.unshift(9) // adds the element from the beginning of an array
myArr2.shift() // removes the element from the beginning of an array
console.log(myArr2);

console.log(myArr2.includes(4));
console.log(myArr2.indexOf(2));

const newArr = myArr2.join() // joins the array and also convert it into a string

// slice() & splice()
console.log("A ", myArr2); // prints original array

const myNewArr = myArr2.slice(1, 3) // prints sliced array

console.log(myNewArr);
console.log("B ", myNewArr);

const myNewArr2 = myArr2.splice(1, 3) // prints spliced array
console.log("C ", myArr2);
console.log(myNewArr2);

// difference between slice and splice

/* slice() ->
    In slice, the element from index 1 till index 3, the array is printed but the element at
    index 3 is not included. And slice function does not manipulates the array.
    it returns a block without removing it from the original array
*/

/* splice() ->
    In splice, the element from index 1 till iindex 3, the array is printed and the element at 
    index 3 is also included. And slpice function returns a block from specified index by manipulating
    the original array. It removes the elements from specified index from OG array and returns it.

*/