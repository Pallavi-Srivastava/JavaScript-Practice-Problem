var prompt = require('prompt-sync')();
let n = prompt('Enter the number to know the day in words : ');
if (n == 0) {
    console.log("Sunday");
}
else if (n == 1) {
    console.log("Monday");
}
else if (n == 2) {
    console.log("Tuesday");
}
else if (n == 3) {
    console.log("Wednesday");
}
else if (n == 4) {
    console.log("Thursday");
}
else if (n == 5) {
    console.log("Friday");
}
else if (n == 6) {
    console.log("Saturday");
}
else {
    console.log("Please enter the single digit within a week range");
}