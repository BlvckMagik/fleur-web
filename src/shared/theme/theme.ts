'use client';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: {
      peach: string;
      lavender: string;
      sage: string;
      cream: string;
      blush: string;
    };
  }
  interface PaletteOptions {
    accent?: {
      peach?: string;
      lavender?: string;
      sage?: string;
      cream?: string;
      blush?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F4A0B5',
      light: '#F8C4D0',
      dark: '#D4879A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C48B9F',
      light: '#D4A8B8',
      dark: '#A57185',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFF5F7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#4A3035',
      secondary: '#7D5A63',
    },
    accent: {
      peach: '#FDDCB5',
      lavender: '#D4B8D4',
      sage: '#B8D4B8',
      cream: '#FFF8E7',
      blush: '#FFE4E9',
    },
    divider: 'rgba(244, 160, 181, 0.2)',
  },
  typography: {
    fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", "Georgia", serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Cormorant Garamond", "Georgia", serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: '"Cormorant Garamond", "Georgia", serif',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 8px rgba(196, 139, 159, 0.08)',
    '0px 4px 12px rgba(196, 139, 159, 0.1)',
    '0px 6px 16px rgba(196, 139, 159, 0.12)',
    '0px 8px 24px rgba(196, 139, 159, 0.14)',
    '0px 10px 32px rgba(196, 139, 159, 0.16)',
    '0px 12px 36px rgba(196, 139, 159, 0.18)',
    '0px 14px 40px rgba(196, 139, 159, 0.2)',
    '0px 16px 44px rgba(196, 139, 159, 0.22)',
    '0px 18px 48px rgba(196, 139, 159, 0.24)',
    '0px 20px 52px rgba(196, 139, 159, 0.26)',
    '0px 22px 56px rgba(196, 139, 159, 0.28)',
    '0px 24px 60px rgba(196, 139, 159, 0.3)',
    '0px 26px 64px rgba(196, 139, 159, 0.32)',
    '0px 28px 68px rgba(196, 139, 159, 0.34)',
    '0px 30px 72px rgba(196, 139, 159, 0.36)',
    '0px 32px 76px rgba(196, 139, 159, 0.38)',
    '0px 34px 80px rgba(196, 139, 159, 0.4)',
    '0px 36px 84px rgba(196, 139, 159, 0.42)',
    '0px 38px 88px rgba(196, 139, 159, 0.44)',
    '0px 40px 92px rgba(196, 139, 159, 0.46)',
    '0px 42px 96px rgba(196, 139, 159, 0.48)',
    '0px 44px 100px rgba(196, 139, 159, 0.5)',
    '0px 46px 104px rgba(196, 139, 159, 0.52)',
    '0px 48px 108px rgba(196, 139, 159, 0.54)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: '10px 28px',
          fontSize: '0.9rem',
        },
        contained: {
          boxShadow: '0px 4px 12px rgba(244, 160, 181, 0.3)',
          '&:hover': {
            boxShadow: '0px 6px 20px rgba(244, 160, 181, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 12px rgba(196, 139, 159, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
  },
});
