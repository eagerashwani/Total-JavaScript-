// fill 

// suppose you have to create a array of length 10 with 0 in all index

const myZero = new Array(10).fill(0);
console.log(myZero);  // op -> [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// suppose you have to change existing array with new value 1
myZero.fill(1, 2, 5);
// fill() takes first the static value, start index, end Index (not include)
console.log(myZero); // op -> [0, 0, 1, 1, 1, 0, 0, 0, 0, 0]