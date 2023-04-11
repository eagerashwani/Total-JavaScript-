// Promise.resolve
// Promise chaining

// Promise.resolve humme ek promise return krta hai
const myPromise = Promise.resolve(5);
myPromise.then(val => console.log(val))


// then() 
// hamesha promise return karta hai

function thePromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo")
    })
}

thePromise().then((val)=>{console.log(val);
    val += "bar";
    return val;


}).then(val=>console.log(val))