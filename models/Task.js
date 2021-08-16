const mongoose = require("mongoose");

const TaskScheama = mongoose.Schema({
  taskTitle: {
    type: String,
    required: true,
  },
  timing: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tasks", TaskScheama);
