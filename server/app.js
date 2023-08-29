const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const dotenv = require("dotenv");

require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const featRoutes = require("./routes/featureRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/", featRoutes);

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

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
