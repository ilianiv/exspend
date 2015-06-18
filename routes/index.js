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

    router.route('/transactions')
        .get(require('./controllers/transactions').get)
        .post(require('./controllers/transactions').post);

    // all of our routes will be prefixed with /api
    app.use('/api', router);
};