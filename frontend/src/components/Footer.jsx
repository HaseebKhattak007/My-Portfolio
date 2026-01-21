import React from 'react';
import { Box, Container, Typography, Stack, IconButton, Divider, useTheme, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const theme = useTheme();

    return (
        <Box sx={{
            py: 8,
            mt: 10,
            borderTop: `1px solid ${theme.palette.divider}`,
            bgcolor: 'background.default'
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center" justifyContent="space-between">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: -1, mb: 1 }}>
                            MH<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 400 }}>
                            Developing high-performance, user-centric web & mobile applications. Specialist in the MERN Stack and modern UI/UX design.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-end' }}>
                            {[
                                { icon: <GitHubIcon />, link: 'https://github.com/HaseebKhattak007' },
                                { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/haseeb-khattak-825400248' },
                                { icon: <TwitterIcon />, link: '#' },
                                { icon: <InstagramIcon />, link: '#' },
                            ].map((social, i) => (
                                <IconButton
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    sx={{
                                        color: 'text.secondary',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            color: 'primary.main',
                                            transform: 'translateY(-3px)',
                                            background: 'rgba(168, 85, 247, 0.05)'
                                        },
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 4, opacity: 0.5 }} />
                <Typography variant="body2" color="text.secondary" align="center" sx={{ opacity: 0.7 }}>
                    © {new Date().getFullYear()} MUHAMMAD HASEEB. All Rights Reserved. Built with MERN Stack.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
