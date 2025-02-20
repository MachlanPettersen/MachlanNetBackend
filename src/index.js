require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const signatureRoutes = require("./routes/signatureRoutes");
const songRoutes = require("./routes/songRoutes");

const app = express();

app.use(
  cors({
    origin: ["https://machlan.net", "http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" })); // Increased limit for base64 images
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api", signatureRoutes);
app.use("/api", songRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!", error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
