/*const http = require('http');
const fs = require('fs');
const filename = 'index.html';

http.createServer((request, response) => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if(err){
            console.log('Coude not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        }else{
            console.log(`The file ${filename} is read and sent to the client\n`);
            response.writeHead(200, {'Content-Type':'text/html'});  
            fs.appendChild('header.html', data, (err) =>{
                console.log('this is errow')
            });
            response.end(data);
        }
    });
    
    console.log('Request accerted!');
}).listen(8080, () => {
    console.log('HTTP server works in 8080 port\n');
})*/


const http = require('http');
const fs = require('fs'); 

const header = "header.html";
const body = "body.html";
const footer = "footer.html";


http.createServer((request, response) => {
    let fullBody = "";

    fs.readFile(header, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            fullBody += data;
            fs.readFile(body, 'utf8', (err, data) => {
                if (err) {
                    console.log('Could not find or open file for reading\n');
                    response.statusCode = 404;
                    response.end();
                } else {
                    fullBody += data;
                    fs.readFile(footer, 'utf8', (err, data) => {
                        if (err) {
                            console.log('Could not find or open file for reading\n');
                            response.statusCode = 404;
                            response.end();
                        } else {
                            fullBody += data;
                            response.writeHead(200, {'Content-Type': 'text/html'});
                            response.end(fullBody);
                        }
                    })
                }
            });
        }
    });

    console.log("Request accepted!");
}).listen(8080, () => {
    console.log("HTTP server works in 8080 port!\n");
});