const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const connection = require("../db/connect");
const User = connection.models.User;
const Trip = connection.models.Trip;

//for deciding role of a member in a trip like creator, joined or invited

const ParticipantSchema = new Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  role: {
    type: String,
    enum: ["creator", "joined", "invited"],
    required: true,
  },
});

module.exports = ParticipantSchema;
