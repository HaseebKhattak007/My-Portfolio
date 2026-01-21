import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const getTheme = (mode) => {
    let theme = createTheme({
        palette: {
            mode,
            primary: {
                main: '#A855F7', // Neon Purple
                light: '#C084FC',
                dark: '#7E22CE',
            },
            secondary: {
                main: '#06B6D4', // Cyan (for subtle variation)
            },
            background: {
                default: mode === 'dark' ? '#0B0415' : '#F9FAFB', // Deeper Night Purple
                paper: mode === 'dark' ? 'rgba(17, 7, 32, 0.7)' : '#FFFFFF',
            },
            text: {
                primary: mode === 'dark' ? '#FFFFFF' : '#111827',
                secondary: mode === 'dark' ? '#9CA3AF' : '#4B5563',
            },
            divider: mode === 'dark' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(0, 0, 0, 0.08)',
        },
        typography: {
            fontFamily: '"Poppins", "Inter", sans-serif',
            h1: {
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
            },
            h2: {
                fontWeight: 600,
                letterSpacing: '-0.01em',
            },
            h3: {
                fontWeight: 600,
            },
            body1: {
                lineHeight: 1.7,
                fontSize: '1.05rem',
            },
            button: {
                textTransform: 'none',
                fontWeight: 500,
            },
        },
        components: {
            MuiContainer: {
                styleOverrides: {
                    root: {
                        paddingLeft: '24px',
                        paddingRight: '24px',
                        '@media (min-width: 600px)': {
                            paddingLeft: '40px',
                            paddingRight: '40px',
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 'full',
                        padding: '12px 32px',
                        transition: 'all 0.3s ease',
                    },
                    containedPrimary: {
                        background: 'linear-gradient(135deg, #A855F7 0%, #7E22CE 100%)',
                        boxShadow: '0 4px 20px rgba(168, 85, 247, 0.4)',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(168, 85, 247, 0.5)',
                        },
                    },
                    outlinedPrimary: {
                        borderWidth: '2px',
                        '&:hover': {
                            borderWidth: '2px',
                            background: 'rgba(168, 85, 247, 0.05)',
                        },
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 24,
                        backgroundImage: 'none',
                        backgroundColor: mode === 'dark' ? 'rgba(25, 12, 44, 0.4)' : 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(16px)',
                        border: mode === 'dark' ? '1px solid rgba(168, 85, 247, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            border: '1px solid rgba(168, 85, 247, 0.3)',
                            boxShadow: mode === 'dark' ? '0 20px 40px rgba(0, 0, 0, 0.4)' : '0 20px 40px rgba(0, 0, 0, 0.05)',
                        },
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                    },
                },
            },
        },
    });

    return responsiveFontSizes(theme);
};
