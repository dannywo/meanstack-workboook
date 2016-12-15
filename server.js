//Initialize our Express Web Framework
var express = require('express');
var app = express();

//Native NodeJS module for resolving paths
var path = require('path');

//Get our port # from c9's environment variable: PORT
var port = process.env.PORT;

// Setup, configure, and connect to MongoDB
var mongoose = require('mongoose');
var configDB = require('./server/config/database.js');
mongoose.connect(configDB.url);

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(methodOverride());

//Set our view engine to EJS and set the directory our views will be stored in
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));

// api.js router
var api = express.Router();
require('./server/routes/api')(api);
app.use('/api', api);

//Set our first route
app.get('/*', function(req, res){
    res.render('index.ejs');
});

//Make our app listen for incoming requests on the port assigned above
app.listen(port, function(){
    console.log('Server running... PORT: ' + port);
});



//https://mean-stack-workbook-dannywo.c9users.io/