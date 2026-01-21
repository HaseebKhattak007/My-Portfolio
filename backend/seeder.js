const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const connectDB = require('./config/db');
const path = require('path');

dotenv.config();
connectDB();

const projects = [
    {
        title: 'MoBix - Full Stack E-commerce Platform',
        description: 'A complete MERN stack e-commerce app with JWT authentication, backend APIs, and responsive UI.',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'Axios', 'JWT'],
        githubLink: 'https://github.com/HaseebKhattak007/MoBix',
        image: './images/Mobix.png',
    },
    {
        title: 'SkillHub – Full Stack Learning Platform',
        description: 'Education platform with role-based access control, course CRUD operations, and state management.',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'Context API'],
        githubLink: 'https://github.com/HaseebKhattak007/SkillHub-Project-',
        image: './images/SkillHub.png',
    },
    {
        title: 'Vision Care Pro – Eye Health Monitoring App',
        description: 'A comprehensive health app featuring visual acuity tests, eye exercises, and wearable device integration. Developed as a Final Year Project.',
        technologies: ['React Native', 'Node.js', 'Express', 'MongoDB'],
        githubLink: '',
        image: './images/VisionCare.png',
    },
    {
        title: 'Modern Music Player Web App',
        description: 'Web-based player with timed lyrics syncing and custom playlist management.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubLink: 'https://github.com/HaseebKhattak007/Modern-Music-Player-Web-App',
        image: './images/MusicPlayer.png',
    },
    {
        title: 'Interactive Image & Video Gallery',
        description: 'Multimedia gallery with horizontal scrolling and playback features.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubLink: 'https://github.com/HaseebKhattak007/Image-Video-Gallery',
        image: './images/Gallery.png',
    },
];

const skills = [
    // Frontend
    { name: 'React.js', category: 'Frontend', proficiency: 90 },
    { name: 'React Native', category: 'Frontend', proficiency: 85 },
    { name: 'JavaScript (ES6+)', category: 'Frontend', proficiency: 90 },
    { name: 'HTML5/CSS3', category: 'Frontend', proficiency: 95 },
    { name: 'Tailwind CSS', category: 'Frontend', proficiency: 90 },
    { name: 'Material UI', category: 'Frontend', proficiency: 85 },

    // Backend
    { name: 'Node.js', category: 'Backend', proficiency: 85 },
    { name: 'Express.js', category: 'Backend', proficiency: 85 },

    // Database
    { name: 'MongoDB', category: 'Database', proficiency: 80 },
    { name: 'Mongoose', category: 'Database', proficiency: 85 },
    { name: 'MySQL', category: 'Database', proficiency: 75 },

    // Tools
    { name: 'Git & GitHub', category: 'Tools', proficiency: 90 },

    // General
    { name: 'REST APIs', category: 'General', proficiency: 90 },
    { name: 'Redux/Context API', category: 'General', proficiency: 85 },
    { name: 'Responsive Design', category: 'General', proficiency: 95 },
    { name: 'UI/UX Optimization', category: 'General', proficiency: 80 },
];

const importData = async () => {
    try {
        await Project.deleteMany();
        await Skill.deleteMany();

        await Project.insertMany(projects);
        await Skill.insertMany(skills);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Project.deleteMany();
        await Skill.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
