const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.get("/", (req, res) => {
  res.send("hello tasks ");
});

router.post("/", (req, res) => {
  const task = new Task({
    taskTitle: req.body.taskTitle,
    timing: req.body.timing,
  });
  task
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
