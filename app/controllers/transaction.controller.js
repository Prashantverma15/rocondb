const Transaction = require('../models/transaction.model.js');
const UserEntity = require('../models/userEntity.model.js');

// Create and Save a new Transaction
exports.create = (req, res) => {
    // Validate request
    if(!(req.body.fromUser && req.body.toUser && req.body.amount)) {
        return res.status(400).send({
            message: "FromUser, ToUser and Amount can not be empty"
        });
    }

    var transact = new Transaction({
        fromUser: req.body.fromUser,
        toUser: req.body.toUser,
        amount: req.body.amount,
        description: req.body.description
    });

    var balanceDebited;
    var balanceCredited
    UserEntity.findOne({"_id": req.body.fromUser}, 
        function(err,userObj) {
            if(err) { return; }
            // console.log(userObj.walletBalance);
            balanceDebited = userObj.walletBalance - req.body.amount;
            UserEntity.findOneAndUpdate({'_id': req.body.fromUser}, { walletBalance: balanceDebited }, 
                function(err,userObj) {
                    if(err) { return; }
                });
        });
    UserEntity.findOne({"_id": req.body.toUser}, 
        function(err,userObj) {
            if(err) { return; }
            // console.log(userObj.walletBalance);
            balanceCredited = userObj.walletBalance + req.body.amount;
            UserEntity.findOneAndUpdate({'_id': req.body.toUser}, { walletBalance: balanceCredited }, 
                function(err,userObj) {
                    if(err) { return; }
                });
        });

    
    

    // Save User in the database
    transact.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating transaction."
        });
    });
};

exports.findAll = (req, res) => {
    Transaction.find()
    .then(transactions => {
        res.send(transactions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving transactions."
        });
    });
};

exports.findUserTransactions = (req, res) => {
    Transaction.find( { $or: [{fromUser: req.body._id}, {toUser: req.body._id}] } )
    .then(transactions => {
        res.send(transactions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving transactions."
        });
    });
};

exports.delete = (req, res) => {
    Transaction.findOneAndRemove({'_id': req.body._id}, function(err,obj) 
    {res.send({message: "Transaction deleted successfully!"});});
};