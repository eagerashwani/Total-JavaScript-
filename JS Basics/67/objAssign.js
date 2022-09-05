// clone using Object.assign()

// we use spread operator to clone the obj

// clone via spread operator

const obj = {
    key1 : 'Value1',
    key2 : 'Value2'
}

const obj2 = obj;  // this is not cloning
// this point to the same address that obj has
// and if we change anything in obj 
// than it also reflect in obj2


const obj3 = {...obj};
obj.key3 = "Value3";
console.log(obj);
console.log(obj3);


// clone via Object.assign

const obj4 = Object.assign({},obj);
obj.key4 = "Value4";
console.log(obj4);