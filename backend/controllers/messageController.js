const Message = require('../models/Message');
const nodemailer = require('nodemailer');

// @desc    Submit a contact message and send email
// @route   POST /api/messages
// @access  Public
const submitMessage = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
        // 1. Save message to MongoDB
        const newMessage = new Message({
            name,
            email,
            message,
        });
        await newMessage.save();

        // 2. Send email using Nodemailer
        // NOTE: USER must provide EMAIL_USER and EMAIL_PASS in .env
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Use App Password for Gmail
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'ah340949@gmail.com', // Recipient email as per resume
            subject: `New Portfolio Contact Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #14b8a6;">New Contact Request</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
                        ${message}
                    </div>
                </div>
            `,
        };

        // We send email asynchronously, but we can wait for it if we want to confirm
        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: 'Message sent successfully and email delivered!' });
    } catch (error) {
        console.error('Email error:', error);
        // Even if email fails, we might still want to return success if it was saved to DB, 
        // but for this mandatory requirement, we treat it as an error or partial success.
        res.status(500).json({ message: 'Message saved but failed to send email. ' + error.message });
    }
};

module.exports = {
    submitMessage,
};
