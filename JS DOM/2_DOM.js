// DOM - Document object model

// Browser start reading the HTML document line by line
// First get HTML tag
// than Two tags Head and Body
// In the head -> title and meta is present
// In the body -> Header, section, aside, footer etc.

// Now browser makes an Object and we call that object a document.
// Browser add this document in the window object.
// Now document become a property of the window object.

// In the browser console just write window and hit enter.
// you got the window object and document object as a property of the window object.
// You can do anything with this document object
// document object is the main reason we can see our webpages

console.log(window.document); // human readable representation

console.dir(window.document); // Browser format

// we don't need to give window because window is already given by browser

console.dir(document);

