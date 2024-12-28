const marvel_heroes = ["thor", "ironman", "hulk"]
const dc_heroes = ["superman", "flash", "batman"]

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log("1->", all_heroes);
// one way to merge arrays

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log("2->", all_new_heroes);
// another way to merge two or more arrays (preferred)

console.log(Array.from("dhiren"));
// 'from' keyword takes each element from the given string and converts it to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// 'of' keyword take the vlaue form the variables and make the array out of the those

