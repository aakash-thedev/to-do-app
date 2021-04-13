const mongoose = require('mongoose');

// make a connection to database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todo_database', { useNewUrlParser: true, useUnifiedTopology: true });

// check if connection has been set or not
const db = mongoose.connection;

// now if there is any error occured during connection
db.on('error', console.error.bind(console, 'Error occured during connecting to db'));

// otherwise if its successfull
db.once('open', function(){
    console.log("Connection established with DB");
});