// suppose you have to print number from 0 to 10, how can you do that?

// one way is
console.log(0);
console.log(1);
console.log(2); // till
console.log(9);
console.log(10);


// 2nd way
let i = 0;
console.log(i);
i++; // i++ means i + 1
console.log(i);
i++;  // till 10

// 3rd way - while

let j = 0;
while(j <= 10){
    console.log(j);
    j++;
}
// loop terminates when j become 11
console.log(`value of j is ${j}`);


// while loop example
// print the sum from 1 to 10 

let k = 1;
let sum = 0;
while(k<=10){
    sum += k;
    k++;
}
console.log("Sum is " + sum);