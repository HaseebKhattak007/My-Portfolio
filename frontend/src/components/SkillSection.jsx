import React from 'react';
import { Box, Typography, Grid, Paper, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const SkillSection = ({ skills }) => {
    const theme = useTheme();

    // Group skills by category
    const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'General'];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <Grid container spacing={4}>
                {categories.map((category) => {
                    const categorySkills = skills.filter((skill) => skill.category === category);
                    if (categorySkills.length === 0) return null;

                    return (
                        <Grid item xs={12} md={category === 'Frontend' || category === 'Backend' ? 6 : 4} key={category}>
                            <motion.div variants={itemVariants}>
                                <Paper
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&:hover .category-dot': {
                                            transform: 'scale(1.5)',
                                            filter: 'blur(10px)'
                                        }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <Box className="category-dot" sx={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: '50%',
                                            bgcolor: 'primary.main',
                                            mr: 2,
                                            transition: 'all 0.4s ease'
                                        }} />
                                        <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: 1 }}>
                                            {category.toUpperCase()}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                        {categorySkills.map((skill) => (
                                            <Chip
                                                key={skill.name}
                                                label={skill.name}
                                                sx={{
                                                    background: 'rgba(168, 85, 247, 0.08)',
                                                    border: '1px solid rgba(168, 85, 247, 0.1)',
                                                    color: 'primary.light',
                                                    fontWeight: 600,
                                                    borderRadius: 2,
                                                    '&:hover': {
                                                        bgcolor: 'primary.main',
                                                        color: '#fff',
                                                        transform: 'scale(1.05)'
                                                    },
                                                    transition: 'all 0.2s'
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    );
                })}
            </Grid>
        </motion.div>
    );
};

export default SkillSection;
