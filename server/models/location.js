const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// for storing user's location

const LocationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});
const Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
