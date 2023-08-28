const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const connection = require("../db/connect");
const User = connection.models.User;

// for the notifications sent to the user

const NotificationSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = NotificationSchema;
