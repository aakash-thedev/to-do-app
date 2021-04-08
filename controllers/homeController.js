var tasksArray = [];

module.exports.home = function(req, res) {

    return res.render('home', {
        title : 'To Do App',
        tasks: tasksArray
    });
}

module.exports.createTask = function(req, res) {

    console.log(req.body);

    tasksArray.push(req.body);

    return res.redirect('back');
}