import { createStyles } from '@mantine/core';

export const useMobileMenuStyles = createStyles((theme) => ({
  mobileMenuOuter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  hamburger: {
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',

    svg: {
      '& *': {
        fill: theme.colors.offWhite,
      },
    },
    '&:hover': {
      svg: {
        '& *': {
          fill: theme.colors.offWhiteDarker,
        },
      },
    },
  },

  drawer: {
    section: {
      position: 'relative',
      zIndex: 1000,
      backgroundColor: theme.colors.offWhiteLightest,
    },
  },

  mobileMenuNavContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginInline: 'auto',
    height: '97dvh',
    paddingBlock: '1rem',
    width: '100%',
  },

  mobileMenuTextRoutesContainer: {
    width: '100%',
    h1: {
      marginBottom: 'min(2rem, calc(2vh + 1vw))',
    },
    
  },

  mobileMenuLogoLink: {},

  mobileMenuItem: {
    textTransform: 'uppercase',

    marginBlock: '0.25em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 800,
    letterSpacing: '0.05em',
    color: theme.colors.eerieBlack,
    padding: '0.15em 0.15em 0.15em 0.5em',
    fontSize: 'clamp(1.25rem, 7vw, 1.5rem)',
    fontFamily: '"Zain", sans-serif',

    '&.active': {
      backgroundColor: `${theme.colors.blue}30`,
      pointerEvents: 'none',
      cursor: 'default',
    },

    '&:hover': {
      backgroundColor: theme.colors.blueLightest,
    },
  },
}));
