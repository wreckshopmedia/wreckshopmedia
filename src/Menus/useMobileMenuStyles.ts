import { createStyles } from '@mantine/core';

export const useMobileMenuStyles = createStyles((theme) => ({
  mobileMenuOuter: {
    position: 'relative',
    zIndex: 50,
    width: '100%',
  },

  mobileMenuHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    zIndex: 1300,
    position: 'relative',
  },

  mobileMenuNav: {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100dvh',
    width: 'min(78vw, 320px)',
    maxWidth: '100%',
    zIndex: 1200,
  },

  // BLACK BUBBLE, GROWS INTO MENU, BLACK
  mobileMenuBackground: {
    position: 'absolute',
    inset: 0,
    backgroundColor: theme.colors.eerieBlack,
    borderRadius: '18px 0 0 18px',
  },

  mobileMenuContent: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
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
    position: 'relative',
    zIndex: 2,
    paddingInline: '1.5rem',
  },

  mobileMenuTextRoutesContainer: {
    width: '100%',
    h1: {
      marginBottom: 'min(2rem, calc(2vh + 1vw))',
    },
  },

  mobileMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },

  mobileMenuListItem: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },

  mobileMenuTitleLink: {
    textDecoration: 'none',
    cursor: 'pointer',
    '& h1, & span': {
      transition: 'color 180ms ease-out, transform 120ms ease-out',
    },
    '&:hover': {
      transform: 'translateX(30px)',
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
      color: theme.colors.yellow,
      pointerEvents: 'none',
      cursor: 'default',
    },

    '&:hover': {
      backgroundColor: theme.colors.blueLightest,
      color: theme.colors.eerieBlackDarker,
    },
  },

  mobileMenuLogoLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& a': {
      display: 'inline-flex',
      textDecoration: 'none',
    },
  },

  mobileMenuToggle: {
    outline: 'none',
    border: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    cursor: 'pointer',
    position: 'relative',
    borderRadius: '50%',
    background: 'transparent',
    zIndex: 1300,
    color: theme.colors.offWhiteLighter,
    paddingInline: 0,
  },

  mobileMenuToggleIcon: {
    display: 'block',
    width: '23px',
    height: '23px',
    margin: 'auto',
    '& path': {
      stroke: 'currentColor',
    },
  },
}));
