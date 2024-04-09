const express = require("express");

const app = express();

// Define a port number
const port = process.env.PORT || 3000;

// Basic route handler (replace with your actual functionalities)
app.get("/", (req, res) => {
  res.send("Hello from your Real Estate Photography Website Backend!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
