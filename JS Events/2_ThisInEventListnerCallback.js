// this keyword

const btn = document.querySelector('.myBtn3')

btn.addEventListener("click", function(){
    console.log("Button clicked")
    console.log("value of this")
    console.log(this);
})

// In normal function like above, `this` is same. Your `btn` button element

// But if you use arrow function, it return window object

btn.addEventListener("click", () => {
    console.log("Button clicked")
    console.log("value of this")
    console.log(this);
})

