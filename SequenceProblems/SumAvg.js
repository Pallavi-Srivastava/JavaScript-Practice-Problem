var prompt = require('prompt-sync')();
let n = prompt('Enter no : ');
let sum = 0;
let avg = 0;
for (let i = 1; i <= n; i++) {
    let num = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    console.log(num);
    sum = (sum + num)
}
console.log("Sum" + sum);
avg = (sum / n);
console.log("Avg" + avg);
