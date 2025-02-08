// middleware/authorize.js
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const authorize = (allowedRoles = []) => {
  // If a single role string is passed, convert it to an array.
  if (typeof allowedRoles === "string") {
    allowedRoles = [allowedRoles];
  }

  return async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      // Check if the user's role is allowed and if their account is approved
      if (!allowedRoles.includes(user.role) || !user.approved) {
        return res.status(403).json({ message: "Forbidden" });
      }
      req.user = user;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  };
};

module.exports = authorize;
