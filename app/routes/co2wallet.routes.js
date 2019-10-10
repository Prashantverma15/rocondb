module.exports = (app) => {
    const user = require('../controllers/user.controller.js');
    const transaction = require('../controllers/transaction.controller.js');
	
	//USER-API
	// Create a new User
    app.post('/createUser', user.create);

    // Retrieve all Users
    app.get('/getUsers', user.findAll);

    // Retrieve profile of User
    app.post('/getUserProfile', user.findOne);

    // Update profile of a User
    app.put('/updateUser', user.update);
	
    // Delete a User
    app.delete('/deleteUser', user.delete);
    
    // -------------------------------------------------------------------------------------------
    
    // Create new Transaction
    app.post('/newTransaction', transaction.create);

    // Retrieve all Transactions
    app.get('/getAllTransactions', transaction.findAll);

    // Retrieve all Transactions of a User
    app.post('/getTransactions', transaction.findUserTransactions);

    // Delete a Transaction
    app.delete('/deleteTransaction', transaction.delete);
}