const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const connection = require("../db/connect");
const Trip = connection.models.Trip;

//for organizing events like meetings, sightseeings, etc. in a trip

const EventSchema = new Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
});

module.exports = EventSchema;
