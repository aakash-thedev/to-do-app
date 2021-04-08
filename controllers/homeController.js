// now import required database from models
const Task = require('../models/task');

// actions

module.exports.home = function(req, res) {

    Task.find({}, function(error, tasksArray){

        if(error){
            console.log("Error fetching tasks from database");
            return;
        }

        return res.render('home', {
            title : 'To Do App',
            tasks: tasksArray
        });

    });
}

module.exports.createTask = function(req, res) {

    console.log(" Request Body - ", req.body);

    Task.create(req.body, function(error, newTask) {

        if(error){
            console.log("Error creating task");
            return;
        }

        console.log("New Task Created", newTask);

        return res.redirect('back');

    });
}

module.exports.deleteTask = function(req, res) {

    console.log(req.query);

    Task.remove({description : req.query.description}, function(err) {

        if(err){
            console.log("Error deleting task");
            return;
        }

        return res.redirect('back');

    });
}