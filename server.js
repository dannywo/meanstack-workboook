//Initialize our Express Web Framework
var express = require('express');
var app = express();

//Native NodeJS module for resolving paths
var path = require('path');

//Get our port # from c9's environmental variable: PORT
var port = process.env.PORT;

//Set our view engine to EJS, and set the directory our views will be stored in
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));

//Set our first route
app.get('/*', function(req, res){
    res.render('index.ejs');
});

//make our app listen for incoming requests on the port assigned above
app.listen(port, function(){
    console.log('SERVER RUNNING... PORT:' +port);
})