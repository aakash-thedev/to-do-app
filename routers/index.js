// --------------------------- Parent route file for all routes --------------------- //

const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.post('/create-task', homeController.createTask);
router.get('/delete-task/', homeController.deleteTask);

router.get('/select-tasks', homeController.selectTasks);

module.exports = router;