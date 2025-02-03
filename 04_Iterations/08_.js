// in this chapter we will learn about 'reduce' function

const myNums = [1, 2, 3]
// here accumulator stores the value, and performs the function according to it
// we wil initialize acc by 0 in the last line before the curve brackets
const myTotal = myNums.reduce(function (accumulator, currval) {
    console.log(`acc: ${accumulator} and currval: ${currval}`);
    return accumulator + currval
}, 0) // initialize value with 3

console.log(myTotal);

// using call back function
const myTotal2 = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal2);

// lets see some examples of reduce method

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) 
console.log(priceToPay);