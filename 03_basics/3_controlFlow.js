// in this, we will discuss about control flow of javascript

// syntax for if condition
/* 
    if(condition){
        // execute this statements if conditions becomes true
    }
*/
const balance = 1000

if(balance > 900){
    console.log("test");
}

// syntax for if-else if - else ladder
/* 
    if(condition){
        // execute this statements if condition becomes true
    }
    else if(condition) {
        // execute this statement if the condition becomes true
    }
    else {
        // execute this statement if all above conditions becomes false
    }
*/

if(balance < 500){
    console.log("less tha 500");
} else if(balance < 750){
    console.log("less than 750");
} else if(balance < 900){
    console.log("less than 900");
} else{
    console.log("less than 1200");
}

// syntax fo rswitch case statement 
/* 
    switch (key) {
    case value: 
        break;
    case value:
        break;
    default:
        break;
    }
*/
// switch case statements acts as a if elseif else ladder, where all the conditions are
// checked and if conditions becomes false, then default statement executes

const day = 4
switch (day) {
    case 1: 
        console.log("monday");
        break;
    case 2: 
        console.log("tuesday");
        break;
    case 3: 
        console.log("wednesday");
        break;
    case 4: 
        console.log("thursday");
        break;
    case 5: 
        console.log("friday");
        break;
    case 6: 
        console.log("saturday");
        break;
    case 7: 
        console.log("sunday");
        break;

    default:
        console.log("enter a valid day!");
        break;
}

// this will return thursday
// break keyword is important to maintain control flow of the program