// 1
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.
// Use the exported module in a script.js file.
// In 
const { largeNumber } = require('./main')
const { currentdate } = require('./main.js') // from pt 3
// OR 
// const { getCurrentDate } = require('./main.js')


const b = 5;
const sum = largeNumber+b;
console.log(sum)

// 2
// In the script.js file create a server using the http module (require('http')).
// Create a server instance and bind it at port 3000. Therefore your server should run on http://localhost:3000/. When the server run, you should console.log("I'm listening") in the terminal.
// Set the response header to res.setHeader('Content-Type', 'text/html')(look at this tutorial- Part named “Serving HTML)
// Respond (res.end) with a HTML paragraph saying "My Module is <result from Part I>", and an HTML <h1> saying “Hi there at the frontend”

const http = require('http');

// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type', 'text/html")
//     res.end(`
//             <h1>My Module is:</h1>
//             <br>
//             <p>${sum}</p>
//             <br>
//             <h2>Hi there at the frontend</h2>`);
// // })
// // server.listen(3000, () => {
//     console.log("I'm listening");
// })

// OR
// const server = http.createServer(handleResponse);
// const port = 3000;
// const host = 'localhost';

// function handleResponse(req, res){
//     // console.log('request we recieve:', req);
//     // console.log('response we can build:', res);
//     res.setHeader('Content-Type', 'text/html')
//     res.end(`<h1>My Module is:</h1>
//             <br>
//             <p>${sum}</p>
//             <br>
//             <h2>Hi there at the frontend</h2>`)
// }

// server.listen(port, host, function (){
//     console.log(`I'm listening on port ${port}`);
// });

// 3
// const server = http.createServer((request, res) => {
//     res.setHeader('Content-Type', 'text/html');

//     res.end(`
//             <h1>The date and time are currently: ${currentdate}</h1>`);
// })

// server.listen(8080, () => {
//     console.log("I'm listening");
// })

// OR
// const server = http.createServer(handleResponse);
// const port = 8080;
// const host = 'localhost';
// function handleResponse(req, res){
//     res.setHeader('Content-Type', 'text/html')
//     res.end(`
//             <h1>The date and time are currently: ${getCurrentDate()}</h1>`)
// }

// server.listen(port, host, function (){
//     console.log(`I'm listening on port ${port}`);
// });
