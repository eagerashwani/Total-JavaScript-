// event bubbling / event propogation
// event capturing

const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

child.addEventListener("click", ()=>{
    console.log("you clicked on child");
})

parent.addEventListener("click", ()=>{
    console.log("you clicked on parent");
})

grandparent.addEventListener("click", ()=>{
    console.log("you clicked on grandparent");
})

document.body.addEventListener("click", ()=> {
    console.log("you clicked on body");
})

// I clicked on child but all(parent, grandparent, body) also prints in console
// agar parent element par bhi same event lga ho, to browser khud hi call kr dega
// If i clicked on grandparent than browser call body also
// isi ko khte hai event bubbling, mtlb agar aapne kisi ek element pr click kiya
// aur agr uske parent par bhi same event lga huwa hai to wo bhi call ho jayega


// event capturing
// in event bubbling bydefault 3rd parameter is false
child.addEventListener("click", ()=>{
    console.log("capture ##### child");
}, true)

parent.addEventListener("click", ()=>{
    console.log("capture ##### parent");
}, true)

grandparent.addEventListener("click", ()=>{
    console.log("capture ##### grandparent");
}, true)

document.body.addEventListener("click", ()=> {
    console.log("capture ##### body");
}, true)

// Ab sbse phle body capture hogi, phir
// grandparent, phir parent, phir child
// aur phir bubbling start ho jayegi
// child clicked, parent clicked, 
// grandparent clicked and body clicked





