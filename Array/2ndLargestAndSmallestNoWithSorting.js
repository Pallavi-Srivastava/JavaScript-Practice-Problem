let num = [];
for (i = 0; i < 10; i++) {
    randomNumber = Math.floor(Math.random() * (999 - 100)) + 100;
    num.push(randomNumber);
}
let size = num.length;
num.sort();
console.log("sorted Array ::"+num.toString());
let secondLargest = num[size-2];
console.log("2nd largest element is : "+secondLargest);
let secondSmallest = num[1];
console.log("2nd smallest element is : "+secondSmallest);