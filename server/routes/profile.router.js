const express = require("express");
const router = express.Router();

router.post("/profile", (req, res) => {
  res.status(200).json({ msg: "this is your user profile" });
});

router.post("/update-profile", (req, res) => {
  res.status(200).json({ msg: "update your profile here" });
});

router.post("/forgot-password", (req, res) => {
  res.status(200).json({ msg: "forgot password" });
});

module.exports = router;
