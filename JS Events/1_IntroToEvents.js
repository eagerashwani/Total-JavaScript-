// intro to events - do some work
// click, button press, mouseover etc

// There are many events for different hardware and services like Mouse, Network,
// Payments and many more
// But we look majorily at keyboard and mouse (It cover 99% use cases)

// most popular event is `click` event

// We have 3 different ways to add event

// 1st way
// put js code in onclick = " "
{/* <button class="myBtn" onclick="console.log('clicked me')">My Button</button> */}


// 2nd way
{/* <button class="myBtn">My Button 2</button> */}

const btn = document.querySelector('.myBtn');
console.log(btn);
console.dir(btn);
btn.onclick = function (){
    alert('yoy clicked me')
}

// we can't assign more than one event so that why we can't use this way


// 3rd way
const myBtn = document.querySelector('.myBtn3')
// method --- addEventListner
myBtn.addEventListener("click", ()=>{
    alert('button clicked via addEventListner')
})