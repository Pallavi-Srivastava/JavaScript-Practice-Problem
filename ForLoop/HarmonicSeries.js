var prompt = require('prompt-sync')();
let n = prompt("Enter no. : ");
let sum = 0.0;
for (i = 1; i <= n; i++) {
    sum = (sum + 1 / i);
}
console.log(sum);
