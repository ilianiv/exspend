/**
 * Created by iliyan on 15-6-15.
 */
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/exspend'); // connect to our database

var Transaction = require('./app/models/transaction');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here
// on routes that end in /bears
// ----------------------------------------------------
router.route('/transactions')

    // create a bear (accessed at POST /api/transactions)
    .post(function(req, res) {

        var transaction = new Transaction();      // create a new instance of the Bear model
        transaction.note = req.body.note;
        transaction.value = req.body.value;
        console.log(req.body);

        transaction.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Transaction created!' });
        });

    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);