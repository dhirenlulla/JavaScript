// ********** DATE ************

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString())
console.log(myDate.toISOString());
console.log(typeof myDate); // Object

let myCreatedDate = new Date(2023, 0, 13) // months starts from zero
console.log(myCreatedDate.toDateString());
let myCreatedDate2 = new Date(2023, 0, 13, 5, 3) // adds time
console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("2023-01-15") // makes the date in dd/mm/yy format

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1); // as months starts from 0, so to avoid confusion we add +1 to the month
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMinutes());

newDate.toLocaleString('default', {
    weekday: "long",
    month: "2-digit"
})
// we can customize the date and time by this way also (preferred way)









