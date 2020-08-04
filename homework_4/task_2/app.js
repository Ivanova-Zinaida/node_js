const http = require('http');
const fs = require('fs'); 
const fileName = "index.html";

let parser = require('./parser.js');

let server = http.createServer((req, res) => {
 
  fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) return console.log(err);
      else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data);
      }
  })

  req.on('data', (data) => {
    parser(data, (fName, json) => {
      fs.writeFile(fName, json, err => {
        if (err) return console.log(err);
        else console.log(`Сервак распарсил входящий файл и записал его в ${fName}`);
      });
    });
  });

}).listen(8080);
