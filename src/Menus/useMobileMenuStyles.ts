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
    width: 'min(70vw, 315px)',
    maxWidth: '100%',
    zIndex: 1200,
  },

  // BLACK BUBBLE, GROWS INTO MENU, BLACK
  mobileMenuBackground: {
    position: 'absolute',
    inset: 0,
    backgroundColor: theme.colors.eerieBlack,
    // borderRadius: '18px 0 0 18px', // REVISIT - removed, like without?
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
    height: '92dvh',
    paddingTop: 0, // set text logo to create height to match X
    paddingBottom: '1rem',
    width: '100%',
    position: 'relative',
    zIndex: 2,
    paddingInline: '1.5rem',
  },

  mobileMenuTextRoutesContainer: {
    width: '100%',
  },

  // container for title, align with X, 75 tall
  mobileTopRowLogoCloseButton: {
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    transformOrigin: 'left center',
  },

  mobileMenuTitleLink: {
    textDecoration: 'none',
    cursor: 'pointer',
  },

  mobileMenuItem: {
    textTransform: 'uppercase',
    marginBlock: '0.25em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    lineHeight: '1.2em',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 800,
    letterSpacing: '0.05em',
    color: theme.colors.offWhite,
    padding: '0.30em 0 0.05em 0.4em',
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
    padding: '16px',
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
