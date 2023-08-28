const express = require("express");
const router = express.Router();

router.get("/all-trips", (req, res) => {
  res.status(200).json({ msg: "get all trips here" });
});

router.post("/add-trip", (req, res) => {
  res.status(200).json({ msg: "add trips here" });
});

router.post("/view-trip/:id", (req, res) => {
  res.status(200).json({ msg: "view your trip here" });
});

router.post("/join-trip/:id", (req, res) => {
  res.status(200).json({ msg: "join trips here" });
});

router.post("/get-users-on-trip/:trip-id", (req, res) => {
  res.status(200).json({ msg: "this is your user profile" });
});

router.put("/edit-trip", (req, res) => {
  res.status(200).json({ msg: "edit trips here" });
});

router.delete("/delete-trip", (req, res) => {
  res.status(200).json({ msg: "delete trips here" });
});

module.exports = router;
