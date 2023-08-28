const express = require("express");
const router = express.Router();

router.post("/update-location", (req, res) => {
  res.status(200).json({ msg: "update others about your location" });
});

router.post("/track-location/:trip-id", (req, res) => {
  res.status(200).json({ msg: "track location based on trip" });
});

module.exports = router;
