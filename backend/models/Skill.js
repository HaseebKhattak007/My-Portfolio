const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Frontend', 'Backend', 'Database', 'Tools', 'General'],
    },
    proficiency: {
        type: Number, // Optional: 1-100
        default: 80,
    }
}, {
    timestamps: true,
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
