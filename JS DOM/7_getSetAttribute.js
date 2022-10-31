// get and set attribute

const link = document.querySelector('a');
console.log(link.getAttribute('href')); // #home (Human readable format)

// Lets set the attribute
link.setAttribute('href', 'https://github.com');
console.log(link.getAttribute('href'));