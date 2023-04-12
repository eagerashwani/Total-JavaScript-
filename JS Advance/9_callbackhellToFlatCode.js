
const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
const heading8 = document.querySelector(".heading8")
const heading9 = document.querySelector(".heading9")


function changeText(element, text, color, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            if(element){
                element.textContent = text
                element.style.color = color
                resolve()
            }else{
                reject()
            }
        }, time)
    })
}
changeText(heading1, "one", "red", 1000).then(
    // then ek callback return krta hai
    // ()=>{
    //     changeText(heading2, "two", "blue", 1000)
    //     // ye undefined dega
    // }
    // ye shi chlega
    // ()=>{
    //    return changeText(heading2, "two", "blue", 1000)
    // }
    () => changeText(heading2, "two", "blue", 1000)
).then(() => changeText(heading3, "three", "purple", 1000)).then(() => changeText(heading4, "four", "pink", 1000)).then(() => changeText(heading5, "five", "green", 1000)).catch((e)=>{
    alert(e)
})