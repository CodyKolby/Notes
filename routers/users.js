const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

router.get("", (req, res) => {
  console.log("test");
});

module.exports = router;
