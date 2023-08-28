const express = require("express");
const router = express.Router();

router.get("/emergency-alerts", (req, res) => {
  res.status(200).json({ msg: "Emergency alert" });
});

module.exports = router;
