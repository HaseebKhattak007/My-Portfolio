import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Grid, Stack, CircularProgress, Avatar, useTheme, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { fetchProjects, fetchSkills } from '../services/api';
import SkillSection from '../components/SkillSection';
import ContactForm from '../components/ContactForm';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DownloadIcon from '@mui/icons-material/Download';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Certificate from '../components/Certificate';


const Home = () => {
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();

    const backendUrl = 'http://localhost:5000';

    useEffect(() => {
        const getData = async () => {
            try {
                const [projectsRes, skillsRes] = await Promise.all([
                    fetchProjects(),
                    fetchSkills(),
                ]);
                setProjects(projectsRes.data);
                setSkills(skillsRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    const handleDownloadCV = () => {
        window.open(`${backendUrl}/api/download-resume`, '_blank');
    };

    const SectionTitle = ({ title, subtitle, align = 'center' }) => (
        <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: align }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Typography variant="h2" gutterBottom sx={{
                    fontWeight: 800,
                    color: 'text.primary',
                    position: 'relative',
                    display: 'inline-block',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -10,
                        left: align === 'center' ? '50%' : 0,
                        transform: align === 'center' ? 'translateX(-50%)' : 'none',
                        width: 60,
                        height: 4,
                        background: theme.palette.primary.main,
                        borderRadius: 2
                    }
                }}>
                    {title}
                </Typography>
                {subtitle && (
                    <Typography variant="h6" color="text.secondary" sx={{ mt: 3, maxWidth: 600, mx: align === 'center' ? 'auto' : 0 }}>
                        {subtitle}
                    </Typography>
                )}
            </motion.div>
        </Box>
    );

    return (
        <Box sx={{ overflowX: 'hidden', position: 'relative' }}>
            {/* Background Glows - Optimized for Light/Dark Mode */}
            <Box sx={{
                position: 'fixed',
                top: '-10%',
                right: '-10%',
                width: '50vw',
                height: '50vw',
                background: theme.palette.mode === 'dark'
                    ? `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`
                    : `radial-gradient(circle, ${theme.palette.primary.main}08 0%, transparent 70%)`,
                filter: 'blur(80px)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />
            <Box sx={{
                position: 'fixed',
                bottom: '10%',
                left: '-10%',
                width: '40vw',
                height: '40vw',
                background: theme.palette.mode === 'dark'
                    ? `radial-gradient(circle, ${theme.palette.secondary.main}10 0%, transparent 70%)`
                    : `radial-gradient(circle, ${theme.palette.secondary.main}05 0%, transparent 70%)`,
                filter: 'blur(80px)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            {/* Hero Section */}
            <Box id="home" sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                pt: { xs: 20, md: 15 }, // Increased top padding for better breathing room from fixed navbar
                pb: { xs: 10, md: 0 }
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    {/* Halo Effect */}
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '120%',
                                        height: '120%',
                                        background: `radial-gradient(circle, ${theme.palette.primary.main}30 0%, transparent 70%)`,
                                        borderRadius: '50%',
                                        filter: 'blur(20px)',
                                        zIndex: -1
                                    }} />
                                    <Avatar
                                        src={`${backendUrl}/images/haseeb.jpg`}
                                        alt="Muhammad Haseeb"
                                        sx={{
                                            width: { xs: 260, sm: 300, md: 380 },
                                            height: { xs: 260, sm: 300, md: 380 },
                                            border: `4px solid ${theme.palette.background.default}`,
                                            boxShadow: `0 0 50px ${theme.palette.primary.main}20`,
                                        }}
                                    />
                                </Box>
                            </motion.div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Typography variant="h5" color="primary" sx={{
                                    fontWeight: 600,
                                    mb: 2,
                                    letterSpacing: 2,
                                    fontSize: { xs: '1.2rem', md: '1.5rem' }
                                }}>
                                    Hello! I Am Muhammad Haseeb
                                </Typography>
                                <Typography variant="h1" gutterBottom sx={{
                                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                                    mb: 4,
                                    lineHeight: { xs: 1.2, md: 1.1 }
                                }}>
                                    Designing <br />
                                    <Box component="span" sx={{ color: 'primary.main' }}>Futuristic</Box> Digital Products
                                </Typography>
                                <Typography variant="body1" sx={{
                                    mb: 5,
                                    color: 'text.secondary',
                                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                                    maxWidth: { xs: '100%', md: 600 },
                                    mx: { xs: 'auto', md: 0 },
                                    lineHeight: 1.6
                                }}>
                                    A self-taught <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>Full Stack Developer</Box> and UI Designer. I build products that create an equilibrium between user needs and business goals.
                                </Typography>
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                                        sx={{ px: 5, height: 60, fontSize: '1.1rem' }}
                                    >
                                        View Work
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        startIcon={<DownloadIcon />}
                                        onClick={handleDownloadCV}
                                        sx={{ px: 5, height: 60, fontSize: '1.1rem' }}
                                    >
                                        Resume
                                    </Button>
                                </Stack>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Experience Section - Grid Style */}
            <Box id="about" sx={{ py: { xs: 15, md: 25 } }}>
                <Container maxWidth="lg">
                    <SectionTitle title="Experience" align="left" />
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <Paper sx={{
                                    p: { xs: 4, md: 5 },
                                    height: '100%',
                                    position: 'relative',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: theme.palette.mode === 'dark' ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.05)',
                                        borderColor: 'primary.main'
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: 4,
                                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`
                                    }
                                }}>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Web Developer</Typography>
                                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600, mb: 3 }}>Softoo Technologies | Oct 2025 – Present</Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Developing high-performance React.js applications with a focus on seamless UI/UX and scalable architecture.
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Paper sx={{
                                    p: { xs: 4, md: 5 },
                                    height: '100%',
                                    position: 'relative',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: theme.palette.mode === 'dark' ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.05)',
                                        borderColor: 'secondary.main'
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: 4,
                                        background: `linear-gradient(90deg, ${theme.palette.secondary.main}, transparent)`
                                    }
                                }}>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Full Stack Mastery</Typography>
                                    <Typography variant="subtitle1" color="secondary" sx={{ fontWeight: 600, mb: 3 }}>Self-Taught & Projects | 2021 – 2025</Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Building 5+ complex full-stack projects using MERN stack, focusing on solving real-world challenges through accessible design.
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Education Milestone - Clean Grid */}
            <Box sx={{ py: { xs: 15, md: 25 }, bgcolor: 'rgba(168, 85, 247, 0.03)' }}>
                <Container maxWidth="lg">
                    <SectionTitle title="Education" />
                    <Grid container spacing={4}>
                        {[
                            { title: "Bachelor's In CS", inst: "SZABIST", date: "2021-2025", desc: "Specializing in Full Stack Technologies" },
                            { title: "Intermediate (FSc)", inst: "Scienta Vision", date: "2018-2020", desc: "Pre-Engineering" },
                            { title: "Matriculation", inst: "Punjab Public", date: "2015-2017", desc: "Science Group" }
                        ].map((edu, i) => (
                            <Grid size={{ xs: 12, md: 4 }} key={i}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Paper sx={{
                                        p: 4,
                                        textAlign: 'center',
                                        height: '100%',
                                        border: '1px solid rgba(168, 85, 247, 0.05)',
                                        '&:hover': {
                                            border: '1px solid rgba(168, 85, 247, 0.2)',
                                            background: 'rgba(168, 85, 247, 0.05)'
                                        }
                                    }}>
                                        <SchoolIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{edu.title}</Typography>
                                        <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mb: 1 }}>{edu.inst}</Typography>
                                        <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>{edu.date}</Typography>
                                        <Typography variant="body2" color="text.secondary">{edu.desc}</Typography>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Certifications Section */}
            <Box id="certifications" sx={{ py: { xs: 15, md: 25 } }}>
                <Container maxWidth="lg">
                    <SectionTitle title="Certifications" subtitle="Professional certifications and training" />
                    <Certificate />
                </Container>
            </Box>

            {/* Projects Section - Modified to use standard Grid but with visual style */}
            <Box id="projects" sx={{ py: { xs: 15, md: 25 } }}>
                <Container maxWidth="lg">
                    <SectionTitle title="Featured Projects" align="left" />
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>
                    ) : (
                        <Stack spacing={20}>
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project._id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <Grid container spacing={6} alignItems="center" direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
                                        <Grid size={{ xs: 12, md: 7 }}>
                                            <Box sx={{
                                                position: 'relative',
                                                borderRadius: 6,
                                                overflow: 'hidden',
                                                boxShadow: `0 30px 60px rgba(0,0,0,0.5)`,
                                                '&:hover img': { transform: 'scale(1.05)' }
                                            }}>
                                                <Box
                                                    component="img"
                                                    src={project.image?.startsWith('http') ? project.image : `${backendUrl}/${project.image?.replace(/^\.\//, '')}`}
                                                    alt={project.title}
                                                    sx={{
                                                        width: '100%',
                                                        height: { xs: 300, md: 450 },
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.8s ease'
                                                    }}
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid size={{ xs: 12, md: 5 }}>
                                            <Box sx={{
                                                p: { xs: 3, md: 5 },
                                                bgcolor: theme.palette.mode === 'dark' ? 'rgba(25, 12, 44, 0.75)' : 'rgba(255, 255, 255, 0.85)',
                                                backdropFilter: 'blur(20px)',
                                                borderRadius: 6,
                                                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(0,0,0,0.05)'}`,
                                                ml: { md: index % 2 === 0 ? -8 : 0 },
                                                mr: { md: index % 2 === 0 ? 0 : -8 },
                                                position: 'relative',
                                                zIndex: 2,
                                                boxShadow: theme.palette.mode === 'dark' ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.05)'
                                            }}>
                                                <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 3 }}>
                                                    Featured Project
                                                </Typography>
                                                <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, mt: 1 }}>
                                                    {project.title}
                                                </Typography>
                                                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                                                    {project.description}
                                                </Typography>
                                                <Stack direction="row" spacing={1.5} flexWrap="wrap" sx={{ mb: 4 }}>
                                                    {project.technologies.map(tech => (
                                                        <Paper key={tech} sx={{ px: 2, py: 0.5, bgcolor: 'rgba(168, 85, 247, 0.1)', border: 'none', borderRadius: 2 }}>
                                                            <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 800 }}>{tech}</Typography>
                                                        </Paper>
                                                    ))}
                                                </Stack>
                                                <Stack direction="row" spacing={2}>
                                                    {project.githubLink && (
                                                        <Button href={project.githubLink} target="_blank" variant="outlined" startIcon={<GitHubIcon />}>Source</Button>
                                                    )}
                                                    {project.liveLink && (
                                                        <Button href={project.liveLink} target="_blank" variant="contained">Demo</Button>
                                                    )}
                                                </Stack>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </motion.div>
                            ))}
                        </Stack>
                    )}
                </Container>
            </Box>

            {/* Skills Section */}
            <Box id="skills" sx={{ py: { xs: 15, md: 25 }, bgcolor: 'rgba(168, 85, 247, 0.02)' }}>
                <Container maxWidth="lg">
                    <SectionTitle title="Toolbox" subtitle="Technologies I use to bring ideas to life" />
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>
                    ) : (
                        <SkillSection skills={skills} />
                    )}
                </Container>
            </Box>

            {/* Contact Section */}
            <Box id="contact" sx={{ py: { xs: 15, md: 25 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8}>
                        <Grid item xs={12} md={5}>
                            <Typography variant="h2" sx={{ fontWeight: 800, mb: 4 }}>Let's Build <br /> Something <Box component="span" sx={{ color: 'primary.main' }}>Great</Box></Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 6, fontSize: '1.2rem' }}>
                                I'm currently looking to join a cross-functional team that values improving people's lives through accessible design.
                            </Typography>
                            <Stack spacing={4}>
                                <Stack direction="row" spacing={3} alignItems="center">
                                    <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}><EmailIcon /></Avatar>
                                    <Box>
                                        <Typography variant="subtitle2" color="text.secondary">Email Me</Typography>
                                        <Typography variant="h6">ah340949@gmail.com</Typography>
                                    </Box>
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <IconButton href="https://github.com/HaseebKhattak007" target="_blank" sx={{ border: '1px solid rgba(168,85,247,0.2)', color: 'primary.main' }}><GitHubIcon /></IconButton>
                                    <IconButton href="https://www.linkedin.com/in/haseeb-khattak-825400248" target="_blank" sx={{ border: '1px solid rgba(168,85,247,0.2)', color: 'primary.main' }}><LinkedInIcon /></IconButton>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <ContactForm />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <style>{`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
                    40% {transform: translateY(-20px) translateX(-50%);}
                    60% {transform: translateY(-10px) translateX(-50%);}
                }
            `}</style>
        </Box>
    );
};

export default Home;
