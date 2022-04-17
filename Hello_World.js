// REPL=>Read Evaluate Print Look
// '_'=>Get previous element


// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('hello world this is rohan das');
   res.end(`<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Box Shadow & Text Shadow</title>
       <style>
           .container{
               display: flex;
           }
           .card{
               padding: 23px 12px;
               margin: 23px 12px;
               background-color: bisque;
               /* box-shadow: 10px 10px green; */
               /* box-shadow: 10px 10px 10px 5px rgb(12, 209, 12,0.5);  third one is blur radious, fourth one spread radious.RGB 4th one darkness(alpha) */
               box-shadow: inset 10px 10px 5px green; /*shadow inside box*/
               box-shadow: 5px 5px rgb(26, 163, 33),10px 10px red;
               border-radius: 8px;
               border: 2px solid red;
           }
           .card h2{
               text-shadow: 2px 2px 2px grey; /*same as box shadow*/
           }
       </style>
   </head>
   <body>
       <div class="container">
           <div class="card" id="card-1"><h2> card-1 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore cum similique. Aliquid rem sit officiis itaque cum, iste id voluptatibus ex, provident dolor eligendi ab veritatis, voluptatum exercitationem beatae!</p></h2></div>
           <div class="card" id="card-2"><h2> card-2 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore cum similique. Aliquid rem sit officiis itaque cum, iste id voluptatibus ex, provident dolor eligendi ab veritatis, voluptatum exercitationem beatae!</p></h2></div>
           <div class="card" id="card-3"><h2> card-3 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore cum similique. Aliquid rem sit officiis itaque cum, iste id voluptatibus ex, provident dolor eligendi ab veritatis, voluptatum exercitationem beatae!</p></h2></div>
       </div>
   </body>
   </html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});