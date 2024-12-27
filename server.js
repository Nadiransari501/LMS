// server.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); // To read the environment variables from the .env file

// Middleware
app.use(express.json());  // For parsing JSON requests

// Simple route
app.get('/', (req, res) => {
  res.send('Welcome to the LMS!');
});

// Setup the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
