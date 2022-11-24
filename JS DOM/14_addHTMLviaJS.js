// Lets add HTML elements using JavaScript
// you can get the HTML via innerHTML

const html = document.querySelector('.li')
console.log(html.innerHTML); // it returns the whole html of mylist class

html.innerHTML += '<li>Hello</li>';
