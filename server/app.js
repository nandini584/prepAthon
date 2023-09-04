const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
require("dotenv").config();
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportSetup = require("./authentication/passport");
const authRoute= require("./routes/auth");
require("dotenv").config();

const userRoutes = require("./routes/user.routes");
// const featRoutes = require("./routes/featureRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRoute)
app.use("/", userRoutes);
// app.use("/", featRoutes);
app.use(
  cookieSession({
    name:"session",
    keys:['cookieKey'],
    maxAge:24*60*60*1000
  })
)
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
)
const db = process.env.MONGO_URI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.log("Couldn't connect to the database");
    console.log(error);
  });

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
