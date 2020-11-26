var prompt = require('prompt-sync')();
let num = prompt("Enter no. : ");
let flag = 0;
for (i = 2; i <= num / 2; i++) {
    if ((num % i) == 0) {
        console.log(num + " is not a prime no");
        flag = 1;
        break;
    }
}
if (flag == 0) {
    console.log(num + " is a prime no.");
}