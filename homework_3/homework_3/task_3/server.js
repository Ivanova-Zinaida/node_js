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
    pathname = url.parse(request.url).path;
    if (pathname === '/')
        pathname = './index.html';
    else
    pathname ='./' + request.url;
    
    extname = path.extname(pathname);
    mimeType = mimeTypes[extname];

if (url.parse(request.url).pathname == '/product.json') {
    let str = url.parse(request.url).search;
    str = str.split('$');
    let startId = str[0].split('=')[1].split('&')[0];
    let endId = str[1].split('=')[1];

    fs.readFile('product.json', 'utf-8', (err, data)=>{
        if(err){
            response.statusCode = 404;
            response.end();
         } else {
           response.writeHead(200, {'Content-Type': 'application/json'}); 
           data = JSON.parse(data)
           data = data.slice(startId, endId);
           data = JSON.stringify(data)
           response.end(data);
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

