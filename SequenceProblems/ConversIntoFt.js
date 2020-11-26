var prompt = require('prompt-sync')();
let value = prompt('enter conversion value: ');
let value_inInches = value / 12;
console.log(value_inInches);