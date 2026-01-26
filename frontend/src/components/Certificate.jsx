import React from 'react';
import { Box, Typography, Paper, Stack, useTheme, Container } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { motion } from 'framer-motion';

const Certificate = () => {
    const theme = useTheme();

    const certificateInfo = {
        organization: "NAVTCC",
        course: "FULL STACK DEVELOPMENT (MERN)",
        duration: "April 2025 to July 2025"
    };

    return (
        <Container maxWidth="md">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Paper
                    sx={{
                        p: { xs: 4, md: 6 },
                        borderRadius: 8,
                        background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(25, 12, 44, 0.9) 100%)'
                            : 'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(255, 255, 255, 0.9) 100%)',
                        backdropFilter: 'blur(20px)',
                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(168, 85, 247, 0.1)'}`,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '150px',
                            height: '150px',
                            background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
                            zIndex: 0
                        }
                    }}
                >
                    <Stack spacing={4} position="relative" zIndex={1}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Box
                                sx={{
                                    p: 1.5,
                                    borderRadius: 3,
                                    bgcolor: 'primary.main',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: `0 0 20px ${theme.palette.primary.main}40`
                                }}
                            >
                                <WorkspacePremiumIcon sx={{ color: '#fff', fontSize: 32 }} />
                            </Box>
                            <Box>
                                <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 2 }}>
                                    Official Certification
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 800, mt: 0.5 }}>
                                    {certificateInfo.course}
                                </Typography>
                            </Box>
                        </Stack>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <VerifiedIcon color="primary" sx={{ fontSize: 24 }} />
                                <Box>
                                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                                        Issuing Organization
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                        {certificateInfo.organization}
                                    </Typography>
                                </Box>
                            </Stack>

                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <CalendarMonthIcon color="primary" sx={{ fontSize: 24 }} />
                                <Box>
                                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                                        Duration
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                        {certificateInfo.duration}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>

                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, maxWidth: 600 }}>
                            Successfully completed rigorous professional training in Modern Web Development,
                            mastering the MERN stack (MongoDB, Express.js, React, Node.js) and
                            advanced software engineering principles.
                        </Typography>
                    </Stack>
                </Paper>
            </motion.div>
        </Container>
    );
};

export default Certificate;
