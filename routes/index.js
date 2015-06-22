/**
 * Created by iliyan on 15-6-15.
 */

var express = require('express'),
    router = express.Router();

module.exports = function (app) {
    // REGISTER OUR ROUTES -------------------------------

    // ROUTES FOR OUR API
    // middleware to use for all requests
    router.use(function (req, res, next) {
        // do logging
        next(); // make sure we go to the next routes and don't stop here
    });

    // test route to make sure everything is working
    router.get('/', function (req, res) {
        res.json({ message: 'hooray! welcome to our api!' });
    });

    var transactions = require('./controllers/transactions');
    router.route('/transactions/')
        .get(transactions.getAll)
        .post(transactions.post);
    router.route('/transactions/search/')
        .get(transactions.search);
    router.route('/transactions/:id/')
        .get(transactions.getOne);

    // all of our routes will be prefixed with /api
    app.use('/api', router);
};