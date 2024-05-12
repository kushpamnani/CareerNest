const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5024;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/job_portal", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Define Job Schema
const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    salary: String,
    benefits: String
});


// Create Job Model
const Job = mongoose.model("Job", jobSchema);

// Define Routes
// GET all jobs
app.get("/api/jobs", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new job
app.post("/api/jobs", async (req, res) => {
    const job = new Job(req.body);
    try {
        const newJob = await job.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET a specific job
app.get("/api/jobs/:id", getJob, (req, res) => {
    res.json(res.job);
});

async function getJob(req, res, next) {
    try {
        let job = await Job.findById(req.params.id);
        if (!job) {
            console.log("No job found with ID:", req.params.id);
            return res.status(404).json({ message: "Job not found" });
        }
        console.log("Job found:", job);
        res.job = job;
        next();
    } catch (error) {
        console.log("Error finding job:", error);
        return res.status(500).json({ message: "Database error: " + error.message });
    }
}



app.patch("/api/jobs/:id", getJob, async (req, res) => {
    let job = res.job;

    job.title = req.body.title ?? job.title;
    job.company = req.body.company ?? job.company;
    job.date = req.body.date ?? job.date;
    job.location = req.body.location ?? job.location;
    job.description = req.body.description ?? job.description;
    job.salary = req.body.salary ?? job.salary;
    job.benefits = req.body.benefits ?? job.benefits;

    try {
        const updatedJob = await job.save();
        res.json(updatedJob);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//delete operation
app.delete("/api/jobs/:id", async (req, res) => {
    try {
        const result = await Job.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No job found with that ID" });
        }
        console.log("Job successfully deleted");
        res.json({ message: "Job deleted" });
    } catch (error) {
        console.log("Error during deletion:", error);
        res.status(500).json({ message: "Error deleting job: " + error.message });
    }
});




// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
