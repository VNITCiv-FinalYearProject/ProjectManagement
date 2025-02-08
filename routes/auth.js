const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const router = express.Router();

// Signup Route
// Signup Route
router.post("/signup", async (req, res) => {
    try {
      const { name, email, password, role } = req.body;
      console.log("Signup request received with:", { name, email, password, role });
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      // Decide approval status based on role:
      // For example, auto-approve guests; all others need manual approval.
      let approved = false;
      if (role === "guest") {
        approved = true;
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: hashedPassword, role, approved });
      await user.save();
      console.log("User saved:", user);
  
      // If not approved, inform the user that their account is pending
      if (!approved) {
        return res.status(200).json({ message: "Signup successful – your account is pending approval", redirect: "/login" });
      }
  
      // If approved, generate JWT and login automatically
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.cookie("token", token, { httpOnly: true });
      return res.status(200).json({ message: "Signup successful", redirect: "/dashboard" });
    } catch (error) {
      console.error("Error during signup:", error);
      return res.status(500).json({ message: "Server error" });
    }
  });



// Login Route
router.post("/login", async (req, res) => {
    try {
      console.log("Login request received:", req.body);
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        console.log("User not found");
        return res.status(400).json({ message: "User not found" });
      }
  
      // Check if account is approved (you might allow guests to log in immediately)
      if (!user.approved && user.role !== "guest") {
        return res.status(403).json({ message: "Your account is pending approval" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("Invalid credentials");
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.cookie("token", token, { httpOnly: true });
      console.log("Login successful, sending response");
      return res.status(200).json({ message: "Login successful", redirect: "/dashboard" });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  });
  
  // Logout Route
  router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
  });
  
  module.exports = router;