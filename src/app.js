const express = require("express");
const cors = require("cors");
const app = express();

const port = 5000;
const TaskRoutes = require("./routes/task.routes");
//middlewares

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.set("port", 5000);
app.get("/", (req, res) => {
  res.send("curd mysql");
});

app.use("/api", TaskRoutes);

module.exports = app;
