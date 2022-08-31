// function inside function

// you can declare as many function inside a function
const avengers = () => {
    const add = (a,b) => a+b;
    const mul = (a,b) => a*b;
    const tony = () => "Love you 3000";

    console.log("Avengers Assemble");
    tony();
    console.log(add(4,6));
    const ans = mul(2,4);
    console.log(ans);
}

avengers();

// you have to call the inside func (add, mul, tony)
// inside the avengers()