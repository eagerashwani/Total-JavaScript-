// keypress event
// mouseover event

const body = document.body

body.addEventListener("keypress", (e) => {
    console.log(e.key)
})

const clickMeButton = document.querySelector(".clickMe")
clickMeButton.addEventListener("mouseover", ()=>{
    console.log("mouseover event occured")
});
clickMeButton.addEventListener("mouseleave", ()=>{
    console.log("mouseleave event occured")
});