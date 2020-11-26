var prompt = require('prompt-sync')();
let n = prompt('Enter the number : ');
if ((n > 0) && (n <= 9)) {
    u = (n % 10)
    console.log("The units place is : :" + u);
}
else if ((n >= 10) && (n <= 99)) {
    u = (n % 10)
    t = ((n / 10) % 10)
    console.log("The tens place is :" + t);
    console.log("The units place is :" + u);
}
else if ((n >= 100) && (n <= 999)) {
    u = (n % 10)
    t = ((n / 10) % 10)
    h = ((n / 100) % 10)
    console.log("The hundreds place is :" + h);
    console.log("The tens place is :" + t);
    console.log("The units place is :" + u);
}
else if ((n >= 1000) && (n <= 9999)) {
    u = (n % 10)
    t = ((n / 10) % 10)
    h = ((n / 100) % 10)
    th = (n / 1000);
    console.log("The ones place is :" + th);
    console.log("The hundreds place is :" + h);
    console.log("The tens place is :" + t);
    console.log("the units place is :" + u);
}