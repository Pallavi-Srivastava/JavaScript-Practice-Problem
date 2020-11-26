var prompt = require('prompt-sync')();
let n = prompt("Enter the Number :");
fact = 1;
for (i = 1; i <= n; i++) {
    fact = (fact * i);
}
console.log(fact);