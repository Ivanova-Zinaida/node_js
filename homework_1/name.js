/*const http = require('http');

const server = http.createServer(() => {
    console.log('HTTP works!');
});

server.listen(8080);*/

const http = require('http');

http.createServer((request, response) => {
    console.log('HTTP works!!');
    response.writeHead(404,{'Content-type':'text/html'});
    response.end('not found');
}).listen(8080);