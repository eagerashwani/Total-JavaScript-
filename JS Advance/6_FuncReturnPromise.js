

function ricePromise(){
    const bucket = ['chips', 'rice', 'salt', 'vegetable']
    return new Promise((resolve, reject)=>{
        if(bucket.includes("rice") && bucket.includes("vegetable") && bucket.includes("salt")){
            resolve({value: 'fried rice ready to serve'})
        }
        else{
            reject('check bucket')
        }
    })
}

ricePromise().then(
    // jab promise resolve hoga
    (data)=>{
    console.log(data.value)
},
// jab promise reject hoga
(e)=>{
    console.log(e)
}
)