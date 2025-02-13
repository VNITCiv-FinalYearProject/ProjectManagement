const express = require("express");
const app = express();
const router = express.Router({ mergeParams: true });
const authorize = require("../middleware/authorize");
<<<<<<< HEAD
||||||| parent of 62ad6dd (authorized billing and progress part)
const Project = require("../model/projectSchema");
=======
const Project = require("../model/projectSchema");
const User = require("../model/userSchema");
>>>>>>> 62ad6dd (authorized billing and progress part)

<<<<<<< HEAD
// This route is protected and only accessible by users with the specified roles.
// The middleware attaches req.user so you can use it in your template.
router.get("/dashboard", authorize(["guest", "contractor", "manager", "senior-manager", "admin"]), (req, res) => {
  res.render("dashboard", { user: req.user });
});
||||||| parent of 62ad6dd (authorized billing and progress part)
router.get('/',authorize(["guest", "contractor", "manager", "senior-manager", "admin"]),async(req,res)=>{
    const projects = await Project.find({})
    var ongoing = 0
    var completed = 0
    for(let i = 0;i<projects.length;i++){
        const s_date = projects[i].startDate
        const e_date = projects[i].expectedDate
        var curr_date = new Date()
        if (curr_date<e_date && curr_date>s_date) {
            ongoing+=1
        }
        if (curr_date>e_date) {
            completed+=1
        }
        // console.log(`Start date : ${s_date}, End date : ${e_date}`)
    }

    res.render('dashboard',{ongoing:ongoing,completed:completed,user:req.user})
})
=======
router.get('/',authorize(["guest","engineer", "contractor", "manager", "senior-manager", "admin"]),async(req,res)=>{
    const projects = await Project.find({})
    var ongoing = 0
    var completed = 0
    for(let i = 0;i<projects.length;i++){
        const s_date = projects[i].startDate
        const e_date = projects[i].expectedDate
        var curr_date = new Date()
        if (curr_date<e_date && curr_date>s_date) {
            ongoing+=1
        }
        if (curr_date>e_date) {
            completed+=1
        }
        // console.log(`Start date : ${s_date}, End date : ${e_date}`)
    }

    res.render('dashboard',{ongoing:ongoing,completed:completed,user:req.user})
})
>>>>>>> 62ad6dd (authorized billing and progress part)

module.exports = router;
