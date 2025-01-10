// https://www.youtube.com/watch?v=vVYOHmqQDCU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=16
// watch  this imp video for objects, focus on symbol concept taught in this video, as it is imp for
// iinterview questions


// object literals 

// we declare symbols in a objects like this:
const mySym = Symbol("key1");

const JsUser = {
    name: "dhiren",
    "full name": "dhiren lulla",
    [mySym] : "myKey1", // here, symbols are declared in square brackets
    age: 18,
    email: "dhiren@google.com",
    location: "maharashtra",
    isLoggedIn: true,
    lastLoginDays: ["monday", "saturday"]
}

// there are two ways to access object's properties -->

// using dot ( . )
console.log(JsUser.email);
console.log(JsUser["full name"]); // this method is used for accessing the properties of object like "full name"

// we can change value of an object
JsUser.email = "dhirenchatgpt.com"
// if we do not want to let values to be changed in the object, use keyword 'freeze'
// Object.freeze(JsUser)
// JsUser.email = "dhiren@microsoft.com" // this will not be updated after we have freezed the object

console.log(JsUser)

// we can declare functions too in  object -->
JsUser.greeting = function(){
    console.log("Hello, good to see you :)");
}
// if we want to use the objects properties in the function, we would do this way ->
JsUser.greetingTwo = function(){
    console.log(`Hello, good to see you ${this.name}`); // we use backticks in the function, and with dollar sign and curly braces we can access the objects
    // properties by using "this" keyword.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());