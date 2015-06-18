/**
 * Created by iliyan on 15-6-15.
 */
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'),        // call express
    app = express(),                 // define our app using express
    bodyParser = require('body-parser'),
    errHandler = require('./error'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/exspend'); // connect to our database

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


// ROUTER

var router = require('./routes')(app);

// Error Handling
app.use(errHandler.logErrors);
app.use(errHandler.errorHandler);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Api running on port ' + port);