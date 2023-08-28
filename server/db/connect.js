const mongoose = require("mongoose");
const UserSchema = require("../models/user");
const TripSchema = require("../models/trip");
const ParticipantSchema = require("../models/participant");
const NotificationSchema = require("../models/notification");
const MessageSchema = require("../models/message");
const LocationSchema = require("../models/location");
const EventSchema = require("../models/events");

require("dotenv").config();

const connectionURL = process.env.MONGO_URI;

const connection = mongoose.createConnection(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = connection.model("User", UserSchema);
const Trip = connection.model("Trip", TripSchema);
const Participant = connection.model("Participant", ParticipantSchema);
const Notification = connection.model("Notification", NotificationSchema);
const Message = connection.model("Message", MessageSchema);
const Location = connection.model("Location", LocationSchema);
const Event = connection.model("Event", EventSchema);

module.exports = connection;
