const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const connection = require("../db/connect");
const User = connection.models.User;

// for storing messages users send each other

const MessageSchema = new Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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

module.exports = MessageSchema;
