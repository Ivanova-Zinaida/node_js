let http = require('http');
let url = require('url');
let fs = require('fs');
let path = require('path'); 
let mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.json': 'application/json',
};

function accept(request, response) {
    let pathname, extname, mimeType;

    if (request.url === '/')
        pathname = './index.html';
    else
    pathname ='./' + request.url;
    
    extname = path.extname(pathname);
    mimeType = mimeTypes[extname];

if (request.url == '/user.json') {
    fs.readFile('user.json', 'utf-8', (err, data)=>{
        if(err){
            response.statusCode = 404;
            response.end();
         } else {
           response.writeHead(200, {'Content-Type': 'application/json'}); 
           response.end(JSON.stringify(data));
        }
    });
  } else{
    fs.readFile(pathname, 'utf8', (err, data) => {
        if (err) {
            response.statusCode = 404;
            response.end();
        } else {
            response.writeHead(200, {'Content-Type': mimeType});
            response.end(data);
                    
        }
    });       
}
}


http.createServer(accept).listen(8080);

