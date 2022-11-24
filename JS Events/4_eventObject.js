// event object

const firstButton = document.querySelector('#one')

firstButton.addEventListener("click", function(){
    console.log(this)
})

// jab bhi mai kisi element pe event listner add hoga
// js engine ---- line by line execute krega
// browser ----- jsEngine + extra features
// browser ----- jsEngine + WebAPI

// jab browser ko pta chla ki user ne event perform kiya
// jo hum listen kar rhe hai
// browser 2 kaam krega
// 1). callback function hai jo vo Engine ko dega...
// 2). callback function ke sath browser jo event hua hai uski information
// bhi dega, ye info ek object ki form mey milegi


const allButtons = document.querySelectorAll('.my-buttons button');

allButtons.forEach((button) => {
    button.addEventListener("click", (e)=>{
        console.log(e.target)
        // currentTarget - jab humney click kiya to event kon se button par tha
        // target - jab click kiya to kahan se fire huwa
    })
})