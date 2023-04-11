// Promise -> Ek aisi value jo humme abhi nhi pta, mgr future mey milegi
// eg: fried rice bnane ka promise kiya

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