const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// we can chain multiple functins like filter, map together like this :-

const newNums = myNums 
                    .map((num) => num * 10) // here all the nums will be multiplied by 10
                    .map((num) => num + 1)  // then they will be added by one
                    .filter((num) => num >= 40) // and then we will filter them as per condition

console.log(newNums);