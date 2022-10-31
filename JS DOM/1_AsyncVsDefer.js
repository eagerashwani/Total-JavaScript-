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
// Browser start executing the HTML document line by line
// and when it reaches the end of the body end, it get script
// than browser loads the js and start executing it,
// this time browser knows about the div, header etc.
// but still its not a good way. Why?
// First HTML document parsing, it takes time.
// Than JS Load, it also takes some time.
// Than JS Executes, it takes some time.

// third way
// <script src="./JS DOM/1_AsyncVsDefer.js" async></script> in the head tag.
// First browser start parsing the HTML document and when it get the script
// along with the parsing, browser start loading the JS 
// when JS is loaded and start executing at that time if any HTML document is parsing
// than it stopped. It may cause problems that's why we don't this way.

// fourth way
// <script src="./JS DOM/1_AsyncVsDefer.js" defer></script> in the head tag.
// First browser start parsing the HTML document and when it get the script
// along with the parsing, browser start loading the JS 
// When JS is loaded than browser still continue parsing the HTML document
// when the HTML document is parsed completely than browser start executing the JS.
// It takes less time BECAUSE when HTML document is parsing at that time 
// JS is start loading, and when the HTML parsing is complete
// Browser start executing the script because it's already loaded.
// This is the best way.

