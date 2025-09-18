const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Example backend route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
