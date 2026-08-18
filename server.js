const express = require("express");
const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");
const logger = require("./middleware/logger");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(logger);

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to The Data Hub API",
  });
});

// Routes
app.use("/posts", postRoutes);
app.use("/login", authRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});