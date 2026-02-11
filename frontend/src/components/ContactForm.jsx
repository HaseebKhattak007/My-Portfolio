import React, { useState } from 'react';
import { Box, TextField, Button, Alert, Snackbar, Paper, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // EMAILJS IDs
        const SERVICE_ID = 'service_rnazbwr';    // EmailJS Service ID
        const TEMPLATE_ID = 'template_ih861jc';  // EmailJS Template ID
        const PUBLIC_KEY = 'WDMI0PdTX5j4mIjh7';    // EmailJS Public Key

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Haseeb', // Name
            };

            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

            setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Please check your EmailJS configuration.' });
        } finally {
            setLoading(false);
            setOpen(true);
        }
    };

    return (
        <Paper sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 6,
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(168, 85, 247, 0.1)',
            backdropFilter: 'blur(20px)'
        }}>
            <Box component="form" onSubmit={handleSubmit}>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 700 }}>Send a Message</Typography>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    margin="normal"
                    variant="outlined"
                    sx={{
                        mb: 3,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            bgcolor: 'rgba(255,255,255,0.03)'
                        }
                    }}
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    margin="normal"
                    variant="outlined"
                    sx={{
                        mb: 3,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            bgcolor: 'rgba(255,255,255,0.03)'
                        }
                    }}
                />
                <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    margin="normal"
                    variant="outlined"
                    sx={{
                        mb: 4,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            bgcolor: 'rgba(255,255,255,0.03)'
                        }
                    }}
                />
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    endIcon={!loading && <SendIcon />}
                    sx={{ py: 2, fontSize: '1.1rem', borderRadius: 3 }}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </Button>

                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert onClose={() => setOpen(false)} severity={status.type} variant="filled" sx={{ width: '100%', borderRadius: 3 }}>
                        {status.message}
                    </Alert>
                </Snackbar>
            </Box>
        </Paper>
    );
};

export default ContactForm;
