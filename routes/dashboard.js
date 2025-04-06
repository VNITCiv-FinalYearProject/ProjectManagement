const express = require("express");
const app = express();
const router = express.Router({ mergeParams: true });
const authorize = require("../middleware/authorize");

// This route is protected and only accessible by users with the specified roles.
// The middleware attaches req.user so you can use it in your template.
router.get("/dashboard", authorize(["guest", "contractor", "manager", "senior-manager", "admin"]), (req, res) => {
  res.render("dashboard", { user: req.user });
});

module.exports = router;
