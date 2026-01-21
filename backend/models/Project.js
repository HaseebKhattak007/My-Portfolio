const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    technologies: [
        {
            type: String,
            required: true,
        },
    ],
    githubLink: {
        type: String,
    },
    liveLink: {
        type: String,
    },
    image: {
        type: String, // URL to image
    },
}, {
    timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
