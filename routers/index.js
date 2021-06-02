// --------------------------- Parent route file for all routes --------------------- //

const express = require('express');

// create router using Router() function
const router = express.Router();

// require home controller
const homeController = require('../controllers/homeController');


// router.get('/', homeController.home);

// for creating a task and storing in database
router.post('/create-task', homeController.createTask);

// for deleting the task from database
router.get('/delete-task/', homeController.deleteTask);

// when checkboxes are selected | To handle multiple tasks delete this routes is used |
router.get('/select-tasks', homeController.selectTasks);

// export the router for further access.
module.exports = router;