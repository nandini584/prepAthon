const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.status(200).json({ msg: "successfully registered" });
});

router.post("/login", (req, res) => {
  res.status(200).json({ msg: "successfully logged in" });
});

module.exports = router;
