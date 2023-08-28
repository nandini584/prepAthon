const express = require("express");
const router = express.Router();

router.get("/emergency-alerts", (req, res) => {
  res.status(200).json({ msg: "Emergency alert" });
});

router.post("/update-location", (req, res) => {
  res.status(200).json({ msg: "successfully logged in" });
});

router.post("/get-users-on-trip/:trip-id", (req, res) => {
  res.status(200).json({ msg: "this is your user profile" });
});

router.post("/track-location/:trip-id", (req, res) => {
  res.status(200).json({ msg: "update your profile here" });
});

router.get("/get-train-status/:train-id", (req, res) => {
  res.status(200).json({ msg: "get all trips here" });
});

router.post("/predict-train-delay/:train-id", (req, res) => {
  res.status(200).json({ msg: "add trips here" });
});

router.post("/predict-flight-price", (req, res) => {
  res.status(200).json({ msg: "view your trip here" });
});

router.post("/recommend-booking-time", (req, res) => {
  res.status(200).json({ msg: "successfully logged in" });
});

module.exports = router;
