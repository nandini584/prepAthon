const express = require("express");
const router = express.Router();
var index = require("../controllers/mail.notifications");

router.post("/send", index.send);

module.exports = router;
