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

module.exports.deleteTask = function(req, res) {

    console.log(req.query);

    let des = req.query.description;
    let dat = req.query.date;
    let cat = req.query.category;

    let indexToBeDeleted = tasksArray.findIndex((data) => {
        return (data.description == des);
    });

    tasksArray.splice(indexToBeDeleted, 1);

    return res.redirect('back');
}