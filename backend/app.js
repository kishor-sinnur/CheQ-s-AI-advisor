require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./database");

const recommendations = require("./routes/recommendations");
const chat = require("./routes/chat");
const score = require("./routes/score");

const app = express();

// CORS settings - allow both frontend URLs
const corsOptions = {
  origin: ['http://localhost:3000', 'http://192.168.154.1:3000'],  // Add both frontend URLs
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization',
};

// Connect to the database
connectDB();

// Use middlewares
app.use(bodyParser.json());
app.use(cors(corsOptions));  // Apply CORS settings globally

// Define routes
app.use("/api/recommendations", recommendations);
app.use("/api/chat", chat);  // Correct route for chat
app.use("/api/score", score);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
