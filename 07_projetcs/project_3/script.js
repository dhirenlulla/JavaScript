const clock = document.getElementById('clock');
// we can also select the div by query selector
// const clock = document.querySelector('clock')

// we accessed the date by creating an object of date, now we want it to be in the box, and be continously updated

// here we will see how to display the time & date which is continuosly being updated
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString()); // this will print the date & time in the console
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);