const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const router = require('./router/router');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.static(path.join(__dirname, './')));
app.use(express.static('pages'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/node/api/login', function(req, res) {
  const params = req.body;
  params.username === 'user';
  params.password === 'user';
  res.send()
}))

app.listen(9000);
