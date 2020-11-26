var prompt = require('prompt-sync')();
let n1 = prompt('Enter the first number : ');
let n2 = prompt('Enter the second number : ');
let n3 = prompt('Enter the third number : ');
let a = (n1 + n2 * n3)
let b = ((n3 + n1) / n2)
let c = (n1 % (n2 + n3))
let d = (n1 * n2 + n3)
console.log(a);
console.log(b);
console.log(c);
console.log(d);
if ((a > b) && (a > c) && (a > d)) {
    console.log("a is greater");
}
else if ((b > c) && (b > d)) {
    console.log("b is greater");
}
else if (c > d) {
    console.log("c is greater");
}
else {
    console.log("d is greater");
}
if ((a < b) && (a < c) && (a < d)) {
    console.log("a is Smaller");
}
else if ((b < c) && (b < d)) {
    console.log("b is Smaller");
}
else if (c < d) {
    console.log("c is Smaller");
}
else {
    console.log("d is smaller");
}