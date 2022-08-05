//serving Html files 
const fs = require("fs");
const http =require("http");

const filecontent= fs.readFileSync("Tables1.html");

const server= http.createServer((req,res) =>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(filecontent);
})

server.listen(80,'127.0.0.1',()=>{
    console.log("listening on port 80");
})