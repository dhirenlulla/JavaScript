const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls,  cryptography, network
    setTimeout(function() {
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

// .then() acts as a connection between resolve part of the promise
promiseOne.then(function(){
    console.log('Promise Consumed')
})

// promise-two
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolved")
})

// promise three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})
// we can also access the parameter and values inside the promise by using then
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"dhiren", password:"12345"})
        } else{
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", password:"123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// accessing values of promise5 using async await functions
async function consumePromiseFIve(){
    try {
    const response = await promiseFive
    console.log(response)
    } catch (error){
        console.log(error);
    }
}

consumePromiseFIve()

async function getAllUsers(){
    try {
        const response  = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E:", error)
    }
}

getAllUsers()

// doing work of getAllUsers using then, catch, finally

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error) => console.log(error))