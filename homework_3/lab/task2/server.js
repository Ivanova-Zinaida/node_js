const http = require('http');
const cp = require('child_process');
const child = cp.fork('./child.js');

http.createServer((request, response) => {
    child.send({
        method: request.method, 
        params: request.url 
    });

    response.statusCode = 200;
    response.end();
}).listen(8080, () => {
    console.log('Server run in 8080 port!');
});