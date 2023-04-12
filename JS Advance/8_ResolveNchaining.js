// Promise.resolve
// Promise chaining

// Promise.resolve humme ek promise return krta hai
const myPromise = Promise.resolve(5);
myPromise.then(val => console.log(val))


// then() 
// fayda, hum promise ki chainig kar skte hai
// then, hamesha promise return karta hai

function thePromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo")
    })
}

thePromise().then((val)=>{console.log(val);
    val += "bar";
    return val; // ye promise return ho rha hai, agr hum val return na kre to bydefault undefined hi return hota hai.


}).then(val=>{
    console.log(val)
    val += 'baaz'
    return val;
}).then(val => console.log(val))

// hum string pe promise ni lga skte 