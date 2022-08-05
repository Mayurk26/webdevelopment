// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Navigation</title>
      <style>
          .navbar{
              background-color: black;
              border-radius: 30px;
              
          }
          .navbar ul{
              overflow: auto;  /* When we use float it overflows from its parent to manage it we use overflow : auto */
          }
          .navbar li{
              float:left;
              list-style: none;  /*To remove bullets from list items*/
              margin: 13px 20px;
              
          }
          .navbar li a{
              padding: 3px 3px;
              text-decoration: none;
              color: white;
          }
          .navbar li a:hover{
              color: red
          }
          .search{
              float: right;
              color: white;
              padding: 12px 75px;
          }
          .navbar input{
              border: 2px solid black;
              border-radius: 14px;
              padding: 3px 17px;
              width: 129px;
          }
      </style>
  </head>
  
  <body>
      <header>
          <nav class="navbar">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact us</a></li>
                  <div class="search">
                      <input type="text" name="search" id="search" placeholder="Search this website">
                  </div>
              </ul>
          </nav>
      </header>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});