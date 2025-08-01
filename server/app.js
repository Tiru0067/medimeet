const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Load doctors data
let doctors = [];

try {
  const dataPath = path.join(__dirname, "data", "doctors.json");
  const fileContent = fs.readFileSync(dataPath, "utf-8");
  doctors = JSON.parse(fileContent);
} catch (err) {
  console.log("Error loading doctors.json:", err.message);
  doctors = []; //fallback
}

// GET all doctors
app.get("/api/doctors", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      statusCode: 200,
      results: doctors.length,
      message: doctors.length === 0 ? "No doctors found" : undefined,
      data: doctors,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: "Something went wrong." });
  }
});

// GET doctor by ID
app.get("/api/doctors/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const doctor = doctors.find((el) => el.id === id);
    if (!doctor)
      return res.status(404).json({
        status: "fail",
        message: "Invalid ID",
      });

    res.status(200).json({
      status: "success",
      data: doctor,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

module.exports = app;
