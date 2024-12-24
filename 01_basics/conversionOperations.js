let score = "34"
console.log(typeof score) // this wil return string

let valueInNumber = Number(score)
console.log(typeof valueInNumber) 
// now this will convert the string to number and return typeof as number

score = "34abc"
valueInNumber = Number(score)
console.log(typeof valueInNumber) // this will return the typeof as number but
console.log(valueInNumber) // this will return its value as NaN i.e. not a number

score = null
valueInNumber = Number(score)
console.log(typeof valueInNumber) // this will be converted to number
console.log(valueInNumber) 
// in case of null it will return value as 0 

score = true
valueInNumber = Number(score)
console.log(typeof valueInNumber) // this will be converted to number
console.log(valueInNumber) 
// this will return 1 in case of true & 0 in case of false

score = undefined
valueInNumber = Number(score)
console.log(typeof valueInNumber) // this will be converted to number
console.log(valueInNumber) //this will also return value as NaN


// "34" -> 34
// "34abc" -> NaN
// true -> 1; false -> 0
  


// if we have to convert value to boolean then we can do this -
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// it will convert 1 to true and 0 to false 

isLoggedIn = "dhiren"
booleanIsLoggedIn = Boolean(isLoggedIn)
// it will convert the string to true
// and if the string is empty it will covert it to false


// 1 -> true; 0 -> false
// "" -> false
// "dhiren" -> true



// same for conversion of a value to string
let someNumber = 18
let stringNumber = String(someNumber)
console.log(stringNumber); // this will convert it to string
console.log(typeof stringNumber); // this will return string 


