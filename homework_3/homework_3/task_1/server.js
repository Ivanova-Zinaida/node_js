var http = require('http');
var url = require('url');
let fs = require('fs');

function accept(req, res) {

  if (req.url == '/ajax.html') {
    fs.readFile('ajax.html', 'utf-8', (err, data)=>{
        if(err){
            res.statusCode = 404;
            res.end();
         } else {
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.end(data);
        }
    });
  } else {
    fs.readFile('index.html', 'utf-8', (err, data)=>{
        if(err){
            res.statusCode = 404;
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
  }
}

http.createServer(accept).listen(8080);
