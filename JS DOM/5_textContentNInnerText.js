// textContent and InnerText

// I want to select a text and change that.

const heading = document.getElementById('heading');
console.log(heading.textContent); // textContent returns the text

// Now I want to change the text
// heading.textContent = 'This is changed by textContent';
// console.log(heading.textContent); 

// <h2 id="heading">My Heading <span style="display: none;">Hello Span</span></h2>
// If we comment out line 9 and 10
// In browser it only shows My Heading but in console it shows `My Heading Hello Span` complete text

// To tackle this we have InnerText
console.log(heading.innerText); // It prints My Heading in console