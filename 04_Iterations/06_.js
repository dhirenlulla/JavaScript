const coding = ["js", "ruby", "java", "python", "cpp"]

// in for each loops we cannot return after storing the values, thats why we use 'filter'
const values = coding.forEach( (item) => {
    console.log(item)
    return item;
} )

console.log(values);

// filter 

const myNums = [1, 2, 3, 4,, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4 ) 
console.log(newNums); // this will print values greater than four if the condition satisfies

// but if we write the same within the curly brackets, we've to write 'return' keyword
// filter also uses call back functons or normal functions
const newNums2 = myNums.filter( (num) =>  {
    return num > 4;
} ) 

// we can also do the same thing using for each loop by this way :-
const newNums3 = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums3.push(num)
    }
} )

console.log(newNums3);
// by this way we can bring the same result as filter 


// now let's see a case, as we will be using filter for further projects

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, 
    edition:2004 },
    { title: 'Book Two', genre: 'Science', publish: 1989, 
    edition:2001 },
    { title: 'Book Three', genre: 'Non-Fiction', publish: 1992, 
    edition:2008 },
    { title: 'Book Four', genre: 'History', publish: 1999, 
     edition:2010 },
    { title: 'Book Five', genre: 'Non-Fiction', publish: 2009, 
    edition:2014 },
    { title: 'Book Six', genre: 'Science', publish: 1987, 
    edition:2011 },
    { title: 'Book Seven', genre: 'Fiction', publish: 1986, 
    edition:1996 },
    { title: 'Book Eight', genre: 'History', publish: 2005, 
    edition:2015 },
]
// filtering the books which have the genre 'Fiction'
const userBooks = books.filter( (bk) => bk.genre === 'History')
// filtering the books which are published after 2000
const userBooks2 = books.filter( (bk) => { return bk.publish >= 2000} )
// filtering the books which are published after 2000 && which are of genre 'History'
const userBooks3 = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
} )

console.log(userBooks);