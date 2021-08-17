const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
// get all task
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.json({ message: err });
  }
});

// submit task on db
router.post("/", async (req, res) => {
  const task = new Task({
    taskTitle: req.body.taskTitle,
    timing: req.body.timing,
  });

  try {
    const taskSaved = await task.save();

    res.json(taskSaved);
  } catch (err) {
    res.json({ message: err });
  }
});

// spasifice task

router.get("/:taskId", async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    res.json(task);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
