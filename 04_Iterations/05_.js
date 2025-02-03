// High Order Loops continued
// for each loop

const coding = ["java", "cpp", "py", "rb", "js"]

// we can directly access the for each loop using dot
// here in the brackets this loop takes an callback function and iterates over every element in the array
// because this func is a callback function, that's why there's no name of the function,  we're directly passing the argument
coding.forEach(function (val){
    console.log(val);
})

// in case of arrow functions 
// its same as normal function (we do not provide a name for the function)
coding.forEach( (item) => {
    console.log(item);
} )

// we can also pass multiple parameters to the function
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )

// iterating with for each loop in the array of objects

const myCoding = [ 
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "Pyhton",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
} )