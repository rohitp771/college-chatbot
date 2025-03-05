// server.js
const express = require("express");

const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
 import User from './models/User'

// Initialize the Express app
const app = express();
const port = 3001;

// Middleware to parse incoming JSON
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/collegeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


// Secret key for JWT
const SECRET_KEY = "hello";

// Registration endpoint
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Username already taken" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create and save the new user
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();

  res.status(201).json({ message: "User registered successfully" });
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  // Find user by username
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Compare passwords
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Generate a JWT token
  const token = jwt.sign({ userId: user._id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });

  res.json({ message: "Login successful", token });
});

// Middleware to verify JWT tokens
function authenticateToken(req, res, next) {
  const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    req.user = user;
    next();
  });
}

// A protected route that requires authentication
app.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}` });
});


app.get("/pp", (req, res) => {
    res.json({ message: `Welcome` });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
