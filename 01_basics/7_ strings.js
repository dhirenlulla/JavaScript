const name = "dhiren"
const repoCount = 4
// this is one way to declare a string

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
// this is a bteer way to print mutliple strings by declaring
// placeholders using ${var_name}, this automtically injects the value of string referred in it

const gameName = new String('dhirenpl')
// this is another way to declare a string (preferrable)

// There are many in-built methods provided by js of strings, such as -->

console.log(gameName[0]) // this gives the char at 0th or other mentioned index

console.log(gameName.length); // this gives the length of string

console.log(gameName.toUpperCase()); // this makes the string in uppercase

console.log(gameName.charAt(4)); // this gives char at specified index

console.log(gameName.indexOf('r')); // this gives the index of a particular occurence of a char 

const newString = gameName.substring(0,5) // this gives a subsrting from og string form start(0) till end(5), the result be 'dhire', it will go from 0 to 4th index instead of 5
console.log(newString); 

const anotherString = gameName.slice(-8, 4) // this method is similar to substring but you can give -ve value also iin the range of length, in this case 
// it will start form reverse
console.log(anotherString);

const newStringTwo = "   dhiren    "
console.log(newStringTwo); // retrun - "   dhiren    "
console.log(newStringTwo.trim()); // return - "dhiren" // this method trims the whitespaces and escape sequences

const url = "https://crispy-potato-g5wj3vjgv.github.dev/"
console.log(url.replace('potato', 'tomato')); // it replaces the string with another string

console.log(url.includes('crispy')) // returns true if string is present in it, else false

console.log(gameName.split('-'))