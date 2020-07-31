var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mustacheExpress = require('mustache-express');

app.listen(8080);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


// Register '.mustache' extension with The Mustache Express
app.set('views', __dirname + '/views');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.route('/reg').post((req, res) => {
  console.log('POST: ' + JSON.stringify(req.body));
  res.render('reg', { title: 'Registration complete!' });
});

app.listen(3000);

