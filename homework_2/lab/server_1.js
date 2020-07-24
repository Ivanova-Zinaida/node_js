let http = require('http');
let fs = require('fs');

http.createServer((request, response) => {
    let pathname = 'site/index.html';
    console.log("Request: " + request.url);
    fs.readFile(pathname, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            console.log(`The file ${pathname} is read and sent to the client\n`);
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        }
    });
}).listen(8080, ()=>{
    console.log("HTTP server works in 8080 port!\n");
});
