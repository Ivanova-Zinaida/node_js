var express = require('express');
var app = express();

var bodyParser = require('body-parser')

app.listen(8080);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.route('/reg').post((req, res) => {
      console.log('Параметры POST запроса: ' + JSON.stringify(req.body));
      res.send(JSON.stringify(req.body));
});


