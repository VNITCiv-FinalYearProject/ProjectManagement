// /model/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // New fields:
  role: {
    type: String,
    enum: ["guest", "contractor", "manager", "senior-manager", "admin"],
    default: "guest"
  },
  approved: {
    type: Boolean,
    // For example, auto-approve guests, but others need manual approval
    default: false
  }
});

module.exports = mongoose.model("User", userSchema);
