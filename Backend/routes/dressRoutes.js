const dress = require("../models/dress");
const server = require("express");
const cloudinary = require("../cloudinary");
const multer = require("multer");
const dressRoute = server.Router();

// Multer setup for handling image uploads
const memory = multer.memoryStorage();
const upload = multer({ storage: memory });

// Endpoint to Add dress data to DB
dressRoute.post("/dress/add", upload.array("media"), async (req, res) => {
  const {
    name,
    price,
    type,
    description,
    category,
    size,
    color,
    stock,
    rating,
  } = req.body;
  try {
    console.log(req.body);
    //Upload image to cloudinary
    const mediaUrls = await Promise.all(
      req.files.map(async (file) => {
        return new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              resource_type: "auto",
              upload_preset: "Unsigned",
            },
            (error, result) => {
              if (error) return reject(error);
              resolve(result.secure_url);
            }
          );
          uploadStream.end(file.buffer);
        });
      })
    );

    const newDress = new dress({
      name,
      price,
      type,
      description,
      category,
      image: mediaUrls.filter(
        (url) => url.endsWith(".jpg") || url.endsWith(".png")
      ),
      size: size.split(","),
      color,
      stock,
      rating,
    });
    await newDress.save();
    res
      .status(201)
      .send({ message: "Product added successfully", json: newDress });
  } catch (err) {
    res.status(500).json({ message: "Server Error", json: err.message });
  }
});

// Endpoint to get all dress data from DB
dressRoute.get("/dress/get", async (req, res) => {
  try {
    const dresses = await dress.find({});
    res.json(dresses);
  } catch (err) {
    res.status(500).json({ message: "Server Error", json: err.message });
  }
});

// Endpoint to get dress data by id from DB

dressRoute.get("/dress/get/:id", async (req, res) => {
  try {
    const dresses = await dress.findById(req.params.id);
    if (!dresses) return res.status(404).json({ message: "Dress not found" });
    res.json(dresses);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Dress not found" });
    }
    res.status(500).json({ message: "Server Error", json: err.message });
  }
});

module.exports = dressRoute;
