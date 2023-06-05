// 2 part
const http = require('http');

const user = {
        firstname: 'John',
        lastname: 'Doe'
    }

const server = http.createServer(handleResponse);
const port = 8000;
const host = 'localhost';

function handleResponse(req, res){
    res.setHeader('Content-Type', 'text/html');
    res.end(JSON.stringify(user));
}
server.listen(port, host, function (){
    console.log(`I'm listening on port ${port}`);
});