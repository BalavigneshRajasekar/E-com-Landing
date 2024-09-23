const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const server = express();
const bodyParser = require("body-parser");

// middleware
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//routes import
const dressRoutes = require("./routes/dressRoutes");

// routes middleware
server.use("/api1", dressRoutes);

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("Connected to MongoDB!");
  server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
