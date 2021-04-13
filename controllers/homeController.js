// now import required database from models
const Task = require('../models/task');

// actions

module.exports.home = function(req, res) {

    Task.find({}, function(error, tasksArray){

        if(error){
            console.log("Error fetching tasks from database");
            return;
        }

        if(tasksArray.length == 0){

            return res.redirect('empty_screen');

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

module.exports.selectTasks = function(req, res) {

    if(req.query.task == undefined){
        return res.redirect('back');
    }

    // console.log("BODY - ",req.body);
    console.log("QUERY - ", typeof(req.query.task));

    if(typeof(req.query.task) === 'string'){

        Task.deleteOne({description : req.query.task}, function(err){

            if(err){ console.log("error deleting tasks"); return; }

        });

        return res.redirect('back');

    }

    // delete all queries selected
    for(let i=0; i<req.query.task.length; i++){

        Task.remove({description : req.query.task[i]}, function(err){

            if(err){ console.log("error deleting tasks"); return; }

        });
    }

    return res.redirect('back');

}