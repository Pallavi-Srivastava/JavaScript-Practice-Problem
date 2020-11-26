var prompt = require('prompt-sync')();
let num = prompt("Enter a number: ");
let i = 0;
let powerOfTwo = 1;
while ((i <= num) && (num < 8)) {
    powerOfTwo = (2 * powerOfTwo);
    console.log(powerOfTwo);
    i = i + 1;
}
