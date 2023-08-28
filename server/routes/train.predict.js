const express = require("express");
const router = express.Router();

router.get("/get-train-status/:train-id", (req, res) => {
  res.status(200).json({ msg: "get all trips here" });
});

router.post("/predict-train-delay/:train-id", (req, res) => {
  res.status(200).json({ msg: "add trips here" });
});

module.exports = router;
