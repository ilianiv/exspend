module.exports = {
    logErrors: function (err, req, res, next) {
        console.error(err.stack);
        next(err);
    },
    errorHandler: function (err, req, res, next) {
        res.status(err.code);
        res.json({error: err});
    }
}
