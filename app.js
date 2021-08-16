const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const tasksRouts = require("./routes/tasks");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("dotenv/config");
// middleware
app.use("/tasks", tasksRouts);
// Rotes
app.get("/", (req, res) => {
  res.send("hello world");
});

const db = process.env.DB_CONNECTION;
mongoose.connect(db, { useNewUrlParser: true }, () =>
  console.log("connected to db successfully")
);
app.listen(PORT, () => console.log(`server is running port number ${PORT}`));
