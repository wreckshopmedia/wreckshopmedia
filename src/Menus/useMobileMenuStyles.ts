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
        fill: theme.colors.offWhiteLighter,
      },
    },
    '&:hover': {
      svg: {
        '& *': {
          fill: theme.colors.offWhiteDark,
        },
      },
    },
  },

  drawer: {
    section: {
      position: 'relative',
      zIndex: 1000,
      backgroundColor: theme.colors.blue,
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



  mobileMenuTitleLink: {
    textDecoration: 'none',
    cursor: 'pointer',
    '& h1, & span': {

      transition: 'color 300ms ease-out, transform 150ms ease-out',
    },
    '&:hover': {
      transform: 'translateX(30px)',
      h1: { // "WRECK"
        color: theme.colors.offWhite,
        transform: 'translateX(10px)',
        span: { // "SHOP"
          color: theme.colors.yellow,
          transform: 'translateX(10px)',
        },
      },
    },

  },

  mobileMenuItem: {
    textTransform: 'uppercase',
    marginBlock: '0.25em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    lineHeight: '1.35em',
    
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 800,
    letterSpacing: '0.05em',
    color: theme.colors.offWhite,
    padding: '0.25em 0.15em 0.15em 0.5em',
    fontSize: 'clamp(1.25rem, 7vw, 1.5rem)',
    fontFamily: '"Zain", sans-serif',

    '&.active': {
      backgroundColor: `${theme.colors.blueDark}60`,
      pointerEvents: 'none',
      cursor: 'default',
    },

    '&:hover': {
      backgroundColor: theme.colors.blueDarkest,
    },
  },

    mobileMenuLogoLink: { 
    // bottom skull styles?
  },
}));
