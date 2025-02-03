// High Order Loops continued
// for in loop

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    py: "Python"
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop for arrays

const programming = ["java", "cpp", "py", "rb", "js"]

for(const key in programming){
    console.log(key); // this will print the keys of the array (index)
    console.log(programming[key]); // this will print the values of the keys
}