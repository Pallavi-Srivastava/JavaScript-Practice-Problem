var prompt = require('prompt-sync')();
let date = prompt('Enter date : ');
let month = prompt('Enter month : ');

if (month < 3 || month > 6 || date > 31 || date < 1) {
    console.log("invalid month");
}
else {
    if ((month >= 3) && (month <= 6)) {
        if ((month == 3) && (date >= 20)) {
            console.log("valid Date & month");
        }
        else if ((month == 6) && (date <= 20)) {
            console.log("valid Date");
        }
        else if (month == 4 && date <= 30 || month == 5 && date <= 31) {
            console.log("valid Date");
        }
    }
}
