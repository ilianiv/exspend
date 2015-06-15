/**
 * Created by iliyan on 15-6-15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    name: {type: String, lowercase: true},
    value: {type: Number, min: 0.01, max: 1000000000},
    expense: { type:Boolean, default: true },
    date: { type: Date, default: Date.now },
    categoryId: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId
});

module.exports = mongoose.model('Transaction', TransactionSchema);