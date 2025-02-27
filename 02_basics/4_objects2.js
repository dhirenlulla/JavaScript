// in line 2 & 3, both the ways are correct to declare an object
// const instagram = new Object() // this is a singleton object
const instagram = {}

instagram.id = "123abc"
instagram.name = "cheeku"
instagram.isLoggedIn = true

console.log(instagram);

// we can also use nested objects in js like this ->
const regularUser = {
    email: "some@gamail.com",
    fullname : {
        userfullname : {
            firstname : "dhiren",
            lastname : "lulla"
        }
    }
}
// we can access nested objects this way
// console.log(regularUser.fullname.userfullname.firstname);

// we can also combine the objects like arrays,
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2) // syntax for combining the objects into an object
// console.log(obj3);
// another way to combine the objects ->
const obj4 = {...obj1, ...obj2} // using '...' operator
// console.log(obj4);

// we can also make array of objects, it is used in databses for storing the credentials of the users 
const arrOfObj = [
    {
        id: "123",
        email: "d@gmail.com"
    },
    {
        id: "123",
        email: "d@gmail.com"
    },
    {
        id: "123",
        email: "d@gmail.com"
    }
]
arrOfObj[1].email // accessig properties of the array of objects

console.log(instagram);
console.log(Object.keys(instagram)); // return the array of keys in the object
console.log(Object.values(instagram)); // return the values of the keys of the obejct
console.log(Object.entries(instagram)); // this function makes  each & every key and its value in a separate array
console.log(instagram.hasOwnProperty('isLoggedIn')); // this function return true if the property is available in the object

// object de-structure 
const course = {
    coursename: "JavaScript",
    price: "999",
    courseinstructor: "dhiren"
}

// de-structure syntax
// in curly braces, we specify the name of the property we want (we can also change the name of that property)
// and after = we specify which object do we want to use 
const {courseinstructor: instructor} = course // here we can give the object's properties name to any name of our choice(courseinstructor: instructor) 
// it is optional
console.log(instructor);

// About JSON ->
// this is a json 
// in JSON, the keys and its values are the type of strings
// {
//     "name": "dhiren",
//     "age": "18",
//     "college": "byk"
// }

// Note: random user me, json formatter can help understand the json concept