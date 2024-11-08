const express = require("express");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const path = require("path");
const multer = require("multer");
const Project = require("./model/projectSchema");
const Bill = require("./model/billSchema");
const Progress = require("./model/progressSchema");
const billRoutes = require("./routes/bill");

const app = express();

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/projectDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connection Successful!"))
  .catch((error) => console.log("Connection error:", error));

// Set up EJS and paths
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes for bill
app.use("/project/:id/bill", billRoutes);

// Main routes
app.get("/", (req, res) => res.render("login"));
app.get("/login", (req, res) => res.render("login"));
app.get("/dashboard", (req, res) => res.render("dashboard"));

// Route to list all projects
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.render("listofprojects", { projects });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching projects");
  }
});

// Route to view project details
app.get("/project/:id", async (req, res) => {
  const projectId = req.params.id;
  try {
    const project = await Project.findById(projectId);
    if (!project) return res.status(404).send("Project not found");

    res.render("project_details", { project, projectId });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching project details");
  }
});

// Route to view progress updates for a specific project
app.get("/project/:id/progress", async (req, res) => {
  const projectId = req.params.id;
  try {
    const project = await Project.findById(projectId);
    const progressUpdates = await Progress.find({ project_id: projectId });

    if (!project) return res.status(404).send("Project not found");

    const startDate = new Date("2024-01-01");
    const endDate = new Date("2026-06-01");
    const currentDate = new Date();
    const totalDuration = endDate - startDate;
    const timeElapsed = currentDate - startDate;
    const progressPercentage = Math.min(
      Math.max(Math.round((timeElapsed / totalDuration) * 100), 0),
      100
    );

    res.render("progress", { progressUpdates, projectId, progressPercentage });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching progress updates");
  }
});

// Route for adding progress update
app.post("/project/:id/progress/add", upload.single("image"), async (req, res) => {
  const projectId = req.params.id;
  const { description } = req.body;
  const image = req.file.path.replace("public", "");

  const newProgress = new Progress({
    project_id: projectId,
    image,
    description,
    date: new Date(),
  });

  try {
    await newProgress.save();
    res.redirect(`/project/${projectId}/progress`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving progress update");
  }
});

// Route for drawings page
app.get("/drawings", (req, res) => res.render("drawings"));

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
