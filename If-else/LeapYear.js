var prompt = require('prompt-sync')();
let year = prompt('Enter Year : ');
if (((year % 400)) == 0) {
    console.log("Year is a leap year");
}
else if (((year % 100)) == 0) {
    console.log("Year is not a leap year");
}
else if (((year % 4)) == 0) {
    console.log("Year is a leap year");
}
else {
    console.log("Year is not a leap year");
}
