/**
 * Created by iliyan on 15-6-15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        required: true},
    value: {
        type: Number,
        min: 0.01,
        max: 1000000000,
        required: true
    },
    expense: {
        type: Boolean,
        default: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    categoryId: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    __v: { type: Number, select: false}
});

module.exports = mongoose.model('Transaction', TransactionSchema);