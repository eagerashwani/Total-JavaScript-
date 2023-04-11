// Promise -> Ek aisi value jo humme abhi nhi pta, mgr future mey milegi
// eg: fried rice bnane ka promise kiya

console.log("script start")
const bucket = ['chips', 'rice', 'salt', 'vegetable']

//  promise k pass 2 cheeze hoti hai: value and status
// initially status pending hoga, uske baad resolve ya reject hoga aur status k according value mil jayegi


// promise create
const friedRicePromise = new Promise((resolve, reject)=>{
    if(bucket.includes("rice") && bucket.includes("vegetable") && bucket.includes("salt")){
        resolve({value: 'fried rice ready to serve'})
    }
    else{
        reject('check bucket')
    }
})

// promise comsume

friedRicePromise.then(
    // jab promise resolve hoga
    (data)=>{
    console.log(data.value)
},
// jab promise reject hoga
(e)=>{
    console.log(e)
}
)

setTimeout(()=>{
    console.log("set Time out is here")
}, 0)

for(let i=0; i<100;i++){
    console.log(i)
}

console.log("script end")

// promise aur settimeout mey ye major difference hai ki, settimeout callback queue mey jata aur promises microtask queue mey. Microtask queue ki priority jada hoti hai callback queue se.

// complete output
// script start 
// 0 .... 100
// script end
// fried rice ready to serve
// set Time out is here