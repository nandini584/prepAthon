const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validateEmail = require("../middlewares/emailValidator");

//for storing user info

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please enter a valid email address"],
  },
  salt: {
    type: String,
  },
  hash: {
    type: String,
  },
  fullName: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  contact: {
    phoneNumber: String,
    address: String,
  },
  trips: [
    {
      tripId: String,
      role: String,
    },
  ],
  notificationPreferences: {
    tripUpdates: Boolean,
    newTripInvitations: Boolean,
  },
  createdOn: Date,
  isActive: Boolean,
});

module.exports = UserSchema;
