// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);
// console.log(2 == 1);

console.log(null > 0);  //false
console.log(null == 0); // false
console.log(null >= 0); // true
// The reason is that an equality check == & comparison < > <= >= work differently.
// Comparisons convert null to a number treating it as 0.
// That's why (3) null >= 0 is true nad (1) null > 0 is false

// comaprisons for null and undefined should be avoided  as it is not a good practice