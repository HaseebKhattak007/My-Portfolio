import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, Container, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from '../theme/ColorModeContext';

const navItems = [
    { label: 'home', id: 'home' },
    { label: 'about', id: 'about' },
    { label: 'certifications', id: 'certifications' },
    { label: 'projects', id: 'projects' },
    { label: 'skills', id: 'skills' },
    { label: 'contact', id: 'contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const theme = useTheme();
    const colorMode = useColorMode();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false);
    };

    const handleDownloadCV = () => {
        window.open(`http://localhost:5000/api/download-resume`, '_blank');
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: scrolled
                        ? (theme.palette.mode === 'dark' ? 'rgba(11, 4, 21, 0.8)' : 'rgba(255, 255, 255, 0.8)')
                        : 'transparent',
                    boxShadow: 'none',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderBottom: scrolled
                        ? `1px solid ${theme.palette.divider}`
                        : 'none',
                    color: theme.palette.text.primary,
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ height: { xs: 70, md: scrolled ? 70 : 100 }, transition: 'all 0.4s' }}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                fontWeight: 800,
                                color: 'text.primary',
                                cursor: 'pointer',
                                letterSpacing: -1,
                                fontSize: { xs: '1.25rem', md: '1.75rem' }
                            }}
                            onClick={() => scrollToSection('home')}
                        >
                            MH<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
                        </Typography>

                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    sx={{
                                        color: 'text.secondary',
                                        mx: 2,
                                        fontWeight: 500,
                                        fontSize: '0.9rem',
                                        textTransform: 'lowercase',
                                        '&:hover': { color: 'primary.main', bgcolor: 'transparent' }
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}

                            <IconButton onClick={colorMode.toggleColorMode} color="inherit" sx={{ ml: 2, mr: 2 }}>
                                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>

                            <Button
                                variant="contained"
                                onClick={handleDownloadCV}
                                sx={{ ml: 1, borderRadius: 10 }}
                            >
                                Resume
                            </Button>
                        </Box>

                        {/* Mobile Menu Toggle */}
                        <Box sx={{ display: { md: 'none' }, alignItems: 'center' }}>
                            <IconButton onClick={colorMode.toggleColorMode} color="inherit" size="small" sx={{ mr: 1 }}>
                                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                PaperProps={{
                    sx: {
                        bgcolor: 'background.default',
                        width: '100%',
                        backgroundImage: 'none',
                        border: 'none'
                    }
                }}
            >
                <Box sx={{ p: 4, pt: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <IconButton onClick={handleDrawerToggle} sx={{ position: 'absolute', top: 20, right: 20 }}>
                        <MenuIcon />
                    </IconButton>
                    <List sx={{ mb: 5, textAlign: 'center' }}>
                        {navItems.map((item) => (
                            <ListItem key={item.id} disablePadding sx={{ mb: 3 }}>
                                <Typography
                                    variant="h3"
                                    onClick={() => scrollToSection(item.id)}
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'text.primary',
                                        fontWeight: 700,
                                        textTransform: 'lowercase',
                                        '&:hover': { color: 'primary.main' }
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleDownloadCV}
                        sx={{ px: 6, py: 2 }}
                    >
                        Download Resume
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
