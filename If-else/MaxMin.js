var prompt = require('prompt-sync')();
let no = prompt('Enter Number : ');
let i = 1;
let max = 0;
let min = 0;
while (i <= no) {
	let num = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
	console.log(num);
	if (i == 1) {
		max = num;
		min = num;
	}
	else {
		if (num > max) {
			max = num;
		}
		else if (num < min) {
			min = num;
		}
	}
	i = (i + 1);
}
console.log("Max:" + max);
console.log("Min:" + min);
