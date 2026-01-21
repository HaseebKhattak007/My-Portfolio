import React from 'react';
import { Box, Typography, Paper, Stack, useTheme } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'Web Developer',
        company: 'Softoo Technologies, Islamabad',
        period: 'Oct 2025 – Present',
        description: [
            'Developing and maintaining responsive web applications using React.js.',
            'Optimizing UI/UX for desktop and mobile platforms.',
            'Collaborating with backend teams for API integration.'
        ]
    }
];

const ExperienceTimeline = () => {
    const theme = useTheme();

    return (
        <Box sx={{ maxWidth: 850, mx: 'auto', position: 'relative' }}>
            {/* Background Line */}
            <Box sx={{
                position: 'absolute',
                left: { xs: 20, md: '50%' },
                top: 0,
                bottom: 0,
                width: 2,
                bgcolor: theme.palette.primary.main,
                opacity: 0.2,
                transform: { md: 'translateX(-50%)' }
            }} />

            {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                        alignItems: 'center',
                        mb: 8,
                        position: 'relative'
                    }}>
                        {/* Timeline Dot */}
                        <Box sx={{
                            position: 'absolute',
                            left: { xs: 20, md: '50%' },
                            top: 40,
                            transform: 'translate(-50%, -50%)',
                            width: 20,
                            height: 20,
                            bgcolor: theme.palette.background.default,
                            border: `4px solid ${theme.palette.primary.main}`,
                            borderRadius: '50%',
                            zIndex: 2,
                            boxShadow: `0 0 15px ${theme.palette.primary.main}`
                        }} />

                        {/* Content Card */}
                        <Box sx={{ width: { xs: 'calc(100% - 60px)', md: '45%' }, ml: { xs: '60px', md: 0 } }}>
                            <Paper sx={{
                                p: 4,
                                borderRadius: 5,
                                border: `1px solid ${theme.palette.divider}`,
                                bgcolor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    border: `1px solid ${theme.palette.primary.main}`,
                                    transform: 'translateY(-5px)',
                                    boxShadow: theme.shadows[4]
                                }
                            }}>
                                <Stack direction="row" alignItems="center" spacing={1} sx={{ color: 'primary.main', mb: 1.5 }}>
                                    <CalendarTodayIcon sx={{ fontSize: 18 }} />
                                    <Typography variant="body2" sx={{ fontWeight: 700, letterSpacing: 1 }}>{exp.period}</Typography>
                                </Stack>

                                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>{exp.role}</Typography>

                                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
                                    <BusinessIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                                    <Typography variant="subtitle1" fontWeight={600} color="text.secondary">{exp.company}</Typography>
                                </Stack>

                                <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                    {exp.description.map((item, i) => (
                                        <Box key={i} component="li" sx={{
                                            position: 'relative',
                                            pl: 3,
                                            mb: 1.5,
                                            color: 'text.secondary',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                left: 0,
                                                top: 10,
                                                width: 8,
                                                height: 2,
                                                bgcolor: 'primary.main',
                                                borderRadius: 1
                                            }
                                        }}>
                                            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>{item}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Paper>
                        </Box>
                    </Box>
                </motion.div>
            ))}
        </Box>
    );
};

export default ExperienceTimeline;
