// for of loop

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    console.log(num);
}

// Maps
// maps ensure that the values are unique, it ignores the duplicates
// and it prints in the same order as we've passes it

const map = new Map()
map.set('IN', 'India')  // 'key' => 'value'
map.set('USA', 'United States of America')
map.set('FR', 'France')

console.log(map);
// iterating over map using for of loop
// this will print the entire map in form arrays like this :-
// ['IN', 'India']
// ['USA', 'United States of America']
// ['Fr', 'France']
for(const key of map){
    console.log(key);
}

// another way of printing maps is :-
// in this way we cannot print 'object'
for(const [key, value] of map){
    console.log(key, ':-', value);
}
// output :-
// IN :- India
// USA :- United States of America
// Fr :- France