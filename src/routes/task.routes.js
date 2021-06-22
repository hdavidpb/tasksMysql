const express = require("express");
const taskCtrl = require("../controllers/taskController");
const { Router } = express;
const router = Router();

router.post("/insert", taskCtrl.insertTask);

module.exports = router;
