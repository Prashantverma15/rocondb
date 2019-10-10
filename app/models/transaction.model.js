const mongoose = require('mongoose');
const userEntity = require('./userEntity.model.js');

const TransactionSchema = mongoose.Schema({
    fromUser: {type: mongoose.Schema.Types.ObjectId, ref: userEntity},
    toUser: {type: mongoose.Schema.Types.ObjectId, ref: userEntity},
    amount: Number,
    description: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Transaction', TransactionSchema);