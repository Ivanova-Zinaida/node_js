const http = require('http'); 
const fs = require('fs'); 


http.createServer((request, response) => {
    let environment = process.env;

    let pathname;
    if (environment.LANG) {
        if (environment.LANG === "ru_RU") {
            pathname = "ru.html";
        } else {
            pathname = "en.html";
        }

        fs.readFile(pathname, 'utf8', (err, data) => {
            if (err) {
                console.log('Could not find or open file for reading\n');
                response.statusCode = 404;
                response.end();
            } else {
                console.log(`The file ${pathname} is read and sent to the client\n`);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(data);
            }
        });
    } else {
        console.log("Выставялем переменную LANG автоматически");

        let arguments = process.argv;

        if (arguments.includes("ru")) {
            if (environment.OS.toLowerCase().includes("windows")) {
                process.env['LANG'] = 'ru_RU';
                pathname = "ru.html";
            } else {
                process.env['LANG'] = 'ru_RU';
                pathname = "ru.html";
            }
        } else {
            if (environment.OS.toLowerCase().includes("windows")) {
                process.env['LANG'] = 'en_EN';
                pathname = "en.html";
            } else {
                process.env['LANG'] = 'en_EN';
                pathname = "en.html";
            }
        }

        response.statusCode = 302;
        response.setHeader("Location", "/");
        response.end();

    }


}).listen(8080, () => {
    console.log("HTTP server works in 8080 port!\n");
});