const express = require("express");

const router = express.Router();

// POST /login
router.post("/", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required",
    });
  }

  // Mock JWT for sprint demonstration
  const mockToken = "mock-jwt-token-data-hub-12345";

  res.status(200).json({
    message: "Login successful",
    token: mockToken,
  });
});

module.exports = router;