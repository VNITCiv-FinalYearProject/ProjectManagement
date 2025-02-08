// /routes/admin.js
const express = require("express");
const router = express.Router();
const User = require("../model/User");
const authorize = require("../middleware/authorize");

// Get pending user accounts (only accessible by admin)
router.get("/pending-accounts", authorize("admin"), async (req, res) => {
  try {
    const pendingUsers = await User.find({ approved: false });
    res.json({ pendingUsers });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Approve a user account (by admin)
router.post("/approve-user/:id", authorize("admin"), async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndUpdate(userId, { approved: true });
    res.json({ message: "User approved" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Optionally, add a reject route
router.post("/reject-user/:id", authorize("admin"), async (req, res) => {
  try {
    const userId = req.params.id;
    // You might want to delete the user or set a rejected flag
    await User.findByIdAndDelete(userId);
    res.json({ message: "User rejected and removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
