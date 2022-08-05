// Nodejs modules with example 

const fs= require("fs");
let text= fs.readFileSync("ab.txt","utf-8");

text=text.replace("nodejs","htmlcss");
console.log("The content of the filr is");
console.log(text);

console.log("Creating the new file..");
fs.writeFileSync("mayur.txt",text);
