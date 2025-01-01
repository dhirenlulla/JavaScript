// https://www.youtube.com/watch?v=vVYOHmqQDCU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=16
// watch  this imp video for objects, focus on symbol concept taught in this video, as it is imp for
// iinterview questions



// object literals 

const JsUser = {
    name: "dhiren",
    age: 18,
    email: "dhiren@google.com",
    location: "maharashtra",
    isLoggedIn: true,
    lastLoginDays: ["monday", "saturday"]
}

// there are two ways to access object's properties -->

// using dot ( . )
console.log(JsUser.email);
console.log(JsUser["email"]);

// we can change value of an object
JsUser.email = "dhirenchatgpt.com"
// if we do not want to let values to be changed in the object, use keyword 'freeze'
Object.freeze(JsUser)
JsUser.email = "dhiren@microsoft.com" // this will not be updated after we have freezed the object
