// now import required database from models
const Task = require('../models/task');

// actions

// -------------------------------------------------Action for Home Page --------------------------------------- //
module.exports.home = async function(req, res) {

    try{

        let tasksArray = await Task.find({});

        return res.render('home', {
            title : 'To Do App',
            tasks: tasksArray
        });
    }

    catch(err){
        console.log("Error fetching tasks from database", err);

        return res.send("ERROR GETTING TO APP", err);
    }
}
// -------------------------------------------------Create a new task --------------------------------------- //

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

// -------------------------------------------------Delete an existing task --------------------------------------- //

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

// -------------------------------------------------Select multiple tasks and delete them --------------------------------------- //

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