let num = [];
for (i = 0; i < 10; i++) {
    randomNumber = Math.floor(Math.random() * (999 - 100)) + 100;
    num.push(randomNumber);
}
for (let i = 0; i <= num.length; i++) {
    console.log(num[i]);
}

let largest = secondLargest = (num[0]);
for (i = 0; i < num.length; i++) {
    if ((num[i]) > largest) {
        secondLargest = largest
        largest = (num[i])
    }
    else if (((num[i]) != largest) && (num[i] > secondLargest)) {
        secondLargest = (num[i])
    }
}
console.log("SecondLargest : " + secondLargest);

let smallest = secondSmallest = (num[0]);
for (i = 1; i < num.length; i++) {
    if ((num[i]) < smallest) {
        secondSmallest = smallest
        smallest = (num[i])
    }
    else if (((num[i]) != smallest) && (num[i] < secondSmallest)) {
        secondSmallest = (num[i])
    }
}
console.log("SecondSmallest : " + secondSmallest);

