var Transaction = require('../../models/transaction'),
    validator = require('validator'),
    mongoose = require('mongoose');

module.exports = {
    post: function (req, res, next) {
        var transaction = new Transaction();      // create a new instance of the Bear model
        transaction.name = req.body.name; //@TODO: Sanitize
        transaction.value = req.body.value;

        transaction.save(function (err) {
            if (err) {
                err.code = 400;
                return next(err);
            }

            res.json({ message: 'Transaction created!' });
        });
    },
    getAll: function (req, res, next) {
        Transaction.find(function (err, transactions) {
            if (err) {
                err.code = 404;
                return next(err);
            }

            res.json(transactions);
        });
    },
    getOne: function (req, res, next) {
        var id = req.params.id;

        if (!validator.isMongoId(id)) {
            res.status(400).send('Not valid ID'); //@TODO: Maybe a better error handler is needed
            return;
        }

        Transaction.findById(id, function (err, transaction) {
            if (err) {
                err.code = 404;
                return next(err);
            }

            if (!res.length) {
                res.status(404).send('No transaction found');
                return;
            }

            res.json(transaction);
        })
    },
    search: function (req, res, next) {
        res.json(req.query);
    }
}
