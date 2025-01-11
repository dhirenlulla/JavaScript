// functions are the set of program that is used to execute the code
// we can define function, and use it in our code by calling them rather than writing blocks of code iteratively

// function definition
function addTwoNums(num1, num2){
    console.log(num1 + num2);
}
// function calling
// addTwoNums(3, 5)
// addTwoNums(3, "4") // if arguments given are string, then it is converted and returned, here ans will be 34
// addTwoNums(3, "a") //  will return 3a

// when we want to store the result of the function, we have to return the value 
// passed in the function, wihtout returning it we cannot store the value

function addTwoNums2(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}


function loginMessage(username){
    if(username === undefined){
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in.`
}

console.log(loginMessage("dhiren"));
// if user does not give any username, we can also define default username 
// function loginMessage(username = "johny") // this way we can set the default value of username
// and if user provide the username at the time of function calling,
// the provided value will override the default value

// rest operator 
function calculateCarPrice(...num1){
    return num1
}
// by using rest operator we can give multiple arguments at the time of function calling (...)
console.log(calculateCarPrice(200, 300, 400))
// it will return an array of arguments passed

// we can also use functions with object
const user = {
    username: "dhiren",
    age: " 19"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject(user);
// we can also pass object without creating it outside (creating while calling the function)
handleObject({
    username: "johny",
    age: " 13"
})
// we can also pass arrays in function
const myArray = [100, 200, 300, 400]

function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(myArray));
// same with the arrays, we can create it while caling the function
console.log(returnSecondValue([100, 200, 300, 400]));

// normal way to declare a function
function addOne(num){
    return num + 1
}
addOne()

// another way to declare a function 
const addTwo = function(num){
    return num + 2
}
// variables can hold any value whether it can be a function or json or anything
// this type of declaration is also called as expression
addTwo(5)

// arrow functions 
// in this type of function, we are implicitly returning the function's statement or code
const addThree = (num1, num2) => {
    return num1 + num2
}
// another way to declare arrow functions(when our statement is of single line)
// int this type of func, we are explicitly returning the function's statement
const addFour = (num1, num2) => num1 + num2
// in the above statement, there's no need to write the curly braces and return statement

// for returning the object in arrow function we have to use parenthesis
const addFive = (num1, num2) => ({username: "dhiren"})