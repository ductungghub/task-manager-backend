const express = require('express');
const Task = require('../model/taskModel');
const {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
} = require('../controller/taskController');

const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).delete(deleteTask).put(updateTask);

module.exports = router;
