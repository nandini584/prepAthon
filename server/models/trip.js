const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../db/connect");

// for storing trip info

const TripSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  status: {
    type: String,
    enum: ["planned", "in progress", "completed", "cancelled"],
    default: "planned",
  },
});

module.exports = TripSchema;
