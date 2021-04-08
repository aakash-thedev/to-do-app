const mongoose = require('mongoose');

// every document in database is known as schema
// to create schema

const taskSchema = mongoose.Schema({

    description : {
        type : String,
        required : true
    },

    category : {
        type : String,
        required : true
    },

    date : {
        type : Date,
        required : true
    }
});

// tell database (TaskDatabase) to have a schema like above
const Task = mongoose.model('TaskDatabase', taskSchema);

module.exports = Task;