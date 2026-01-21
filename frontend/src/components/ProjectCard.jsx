import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Button, Stack, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    const theme = useTheme();
    const backendUrl = 'http://localhost:5000';

    // Helper to format image URL
    const getImageUrl = (imagePath) => {
        if (!imagePath) return 'https://via.placeholder.com/400x200';
        if (imagePath.startsWith('http')) return imagePath;
        // Handle paths starting with ./images/ or images/
        const cleanPath = imagePath.replace(/^\.\//, '');
        return `${backendUrl}/${cleanPath}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                '&:hover .MuiCardMedia-root': {
                    transform: 'scale(1.05)',
                }
            }}>
                <Box sx={{ overflow: 'hidden', height: 220 }}>
                    <CardMedia
                        component="img"
                        image={getImageUrl(project.image)}
                        alt={project.title}
                        sx={{
                            height: '100%',
                            transition: 'transform 0.6s ease',
                            filter: theme.palette.mode === 'dark' ? 'brightness(0.9)' : 'none'
                        }}
                    />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography gutterBottom variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>
                        {project.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            mb: 3,
                            lineHeight: 1.6,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            height: 60
                        }}
                    >
                        {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                        {project.technologies.map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                    background: 'rgba(20, 184, 166, 0.1)',
                                    color: 'primary.main',
                                    fontWeight: 700,
                                    borderRadius: 1.5,
                                    border: '1px solid rgba(20, 184, 166, 0.2)'
                                }}
                            />
                        ))}
                    </Box>
                    <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
                        {project.githubLink && (
                            <Button
                                startIcon={<GitHubIcon />}
                                href={project.githubLink}
                                target="_blank"
                                size="medium"
                                variant="outlined"
                                color="primary"
                                fullWidth
                                sx={{ borderRadius: 3, fontWeight: 700 }}
                            >
                                Source
                            </Button>
                        )}
                        {project.liveLink && (
                            <Button
                                startIcon={<LaunchIcon />}
                                href={project.liveLink}
                                target="_blank"
                                size="medium"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ borderRadius: 3, fontWeight: 700 }}
                            >
                                Demo
                            </Button>
                        )}
                    </Stack>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;
