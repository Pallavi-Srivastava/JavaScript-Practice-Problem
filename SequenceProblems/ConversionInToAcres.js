var prompt = require('prompt-sync')();
let value = prompt('enter value which we have in sq m to convert into Acre : ');
let acres = value / 4046.8564224;
console.log(acres);
