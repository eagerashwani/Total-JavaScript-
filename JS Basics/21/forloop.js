// print 1 to 10 via for loop

for(let i = 1; i<= 10; i++){
    console.log(i);
}

// if we initialize i with var, we can access i outside the block
// but with let, we can't
// if you still want, initialize outside
// eg:
// let i = 0;
// for(;i<=10;i++){}

let sum = 0;
let num = 100
for(let i = 0; i<= num; i++){
    sum += i;
}
console.log(sum);