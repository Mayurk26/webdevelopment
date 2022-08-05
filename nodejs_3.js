
// Synchronous or Blocking
// -->Line by line execution  

// Asynchronous or Non-blocking 
// --Line by linr execution not guaranteed 
// --callbacks will fire 

const fs= require("fs");
let text=fs.readFile("ab.txt","utf-8", (err,data) =>{
    console.log(err,data);
})
console.log("this is the message");