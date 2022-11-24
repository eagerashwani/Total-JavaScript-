// in last js file we look how to select a single button
// now i have three buttons and want to addEventListner at once

const allButtons = document.querySelectorAll(".my-buttons button");

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this)
        // this return button element of particular button
//     })
// }

for(let i=0; i<allButtons.length; i++){
    allButtons[i].addEventListener("click", function(){
        console.log(this)
    })
}

allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this)
    })
})

// if we use ()=>{} in addEventListener than we get undefined
// why? bcz arrow function returns window object
