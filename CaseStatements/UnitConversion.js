var prompt = require('prompt-sync')();
let number = prompt("Enter number: ");
let conversion = parseInt(prompt(
    "1. Feet to Inch\n" +
    "2. Feet to Meter\n" +
    "3. Inch tgo Feet\n" +
    "4. Meter to Feet\n"
));

let result;
switch (conversion) {
    case 1:
        result = number * 12;
        console.log(number + "ft = " + result + "in");
        break;
    case 2:
        result = number / 3;
        console.log(number + "ft = " + result + "m");
        break;
    case 3:
        result = number / 12;
        console.log(number + "in = " + result + "ft");
        break;
    case 4:
        result = number * 3;
        console.log(number + "m = " + result + "ft");
        break;
    default:
        console.log("'Invalid input");
}
