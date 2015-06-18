var Transaction = require('../../models/transaction');

module.exports = {
    post: function (req, res, next) {
        var transaction = new Transaction();      // create a new instance of the Bear model
        transaction.name = req.body.name;
        transaction.value = req.body.value;

        transaction.save(function (err) {
            if (err) {
                err.code = 400;
                return next(err);
            }

            res.json({ message: 'Transaction created!' });
        });
    },
    get: function (req, res, next) {
        Transaction.find(function (err, transactions) {
            if (err) {
                err.code = 404;
                return next(err);
            }

            res.json(transactions);
        });
    }
}
