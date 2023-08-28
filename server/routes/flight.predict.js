const express = require("express");
const router = express.Router();

router.post("/predict-flight-price", (req, res) => {
  res.status(200).json({ msg: "view your trip here" });
});

router.post("/recommend-booking-time", (req, res) => {
  res.status(200).json({ msg: "successfully logged in" });
});

module.exports = router;
