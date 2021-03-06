let http = require('http');
let url = require('url');
let fs = require('fs');
let path = require('path'); 
let mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
};

function accept(request, response) {
    let pathname, extname, mimeType;

    if (request.url === '/')
        pathname = './index.html';
    else if(request.url === '/ajax.html')
        pathname = './ajax.html';
    else
    pathname ='./' + request.url;
    
    extname = path.extname(pathname);
    mimeType = mimeTypes[extname];

    fs.readFile(pathname, 'utf8', (err, data) => {
        if (err) {
            response.statusCode = 404;
            response.end();
        } else {
            response.writeHead(200, {'Content-Type': mimeType});
            console.log(pathname)
            response.end(data);
                    
        }
    });       
}


http.createServer(accept).listen(8080);
