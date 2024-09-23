const mongoose = require("mongoose");

const dress = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  price: {
    type: "number",
    required: true,
  },
  type: {
    type: "string",
    required: true,
    enum: ["men", "women"],
  },
  image: [String],
  description: String,
  category: String,
  size: [String],
  color: String,
  stock: Number,
  rating: {
    type: "number",
    default: 0,
    min: 0,
    max: 5,
  },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      comment: String,
      rating: Number,
    },
  ],
});

const Dress = mongoose.model("dress", dress);

module.exports = Dress;
