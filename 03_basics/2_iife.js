// Immediately Invoked Function Expressions (IIFE)
// An IIFE is a function that is defined and executed immediately after it is created.
// 1) Avoid Polluting the Global Scope:
// Variables and functions declared inside an IIFE stay within its scope and do not interfere with the global namespace.
// 2) Encapsulation:
// It helps create private variables and functions, which cannot be accessed from outside the IIFE.
// 3)Initialization:
// IIFEs are often used to initialize code that runs only once, like setting up event listeners or configuration.
// 4) Avoid Name Collisions:
// In larger projects, IIFEs prevent variables from accidentally overwriting each other by keeping them scoped locally.



// this is how we declare IIFE function 
(function chai(){
    console.log('DB CONNECTED');
})();

( () => {
    console.log('DB CONNECTED TWO');
})();

// we can pass vairables too in in these type of functions, 
// we pass the value of the variable at the end of function.
( (name) => {
    console.log(`${name}`);
    
}) ('dhiren');