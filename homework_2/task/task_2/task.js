const http = require('http');
const fs = require('fs'); 
const dataFile = "data.txt";


http.createServer((request, response) => {

    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            let values = data.split(" ");
            let arr1 = [];
            let arr2 = [];

            for (let val of values) {
                if (parseInt(val) % 2 === 0) {
                    arr1.push(parseInt(val));
                }
                arr2.push(parseInt(val));
            }

            let numbers = arr2.map(value => Math.pow(value, 3));

            let evenStr = arr1.join(" ");
            let powStr = numbers.join(" ");

            fs.writeFileSync('out-1.txt', evenStr);
            fs.writeFileSync('out-2.txt', powStr);

            console.log(evenStr);
            console.log(powStr);
        }
    });

}).listen(8080, () => {
    console.log("HTTP server works in 8080 port!\n");
});