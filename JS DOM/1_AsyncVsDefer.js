// How to link JS file to HTML file

// one way
// <script src="./JS DOM/1_AsyncVsDefer.js"></script> in head tag in our HTML document
// Disadvantage:
// when the HTML document is loaded in the browser, it start reading the HTML file
// and when Browser get .js file, than the further reading of HTML document stops 
// and browser start parsing(read line by line) the js file, after loading the js file, 
// browser start executing the script and got div header and other tags but
// Browser have no idea about them, so execution is stopped and Error is occurred.
// Thats why this way is not used.

// second way
// <script src="./JS DOM/1_AsyncVsDefer.js"></script> </body>
// add script just before the closing body tag.