import { createStyles } from '@mantine/core';

interface useHeaderMenuStylesProps {
  isAtTop: boolean;
  show?: boolean;
}

export const useHeaderMenuStyles = createStyles((theme, { isAtTop, show }: useHeaderMenuStylesProps) => ({
  headerOuter: {
    background: theme.colors.eerieBlack,
    backdropFilter: isAtTop ? 'none' : 'blur(3px)',
    opacity: show ? 1 : 0,
    border: 'none',
    transition: 'box-shadow 200ms ease-out, background 200ms ease-out 100ms, transform 300ms ease-out, opacity 400ms ease-out, backdrop-filter 200ms ease-out',
    boxShadow: isAtTop ? 'none' : '0 4px 20px #00000016',
    transform: show ? 'translateY(0)' : 'translateY(-100%)',
    rotate: '8deg',
    zIndex: 100,
    left: '50%',
    transformOrigin: 'top',
    transformStyle: 'preserve-3d',
    translate: '-50% 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [theme.other.mq.customMax(1200)]: {
      rotate: '7deg',
    },
    [theme.other.mq.customMax(900)]: {
      rotate: '6deg',
    },
    [theme.other.mq.customMax(500)]: {
      rotate: '0deg',
    },
    
  },

  headerMenuInner: {
    paddingInline: theme.other.inlinePadding,
    marginInline: 'min(20px 2cqi)',
    [theme.other.mq.mobile]: {
      marginInline: '25px', // hamburger breakpoint!
    },
    
  },

  headerMenu: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  menuTitleLinksBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
  },

  headerMenuOptionsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    marginInline: 'min(2em, 1em + 2cqi)',
    height: '90%',
  },

  menuItem: {
    textTransform: 'uppercase',
    background: 'transparent',
    fontFamily: '"Zain", sans-serif',
    fontSize: 'clamp(1.125rem, 2.75cqi, 1.75rem)',
    fontWeight: 600,
    lineHeight: '1.125em',
    margin: 0,
    color: theme.colors.offWhite,
    textDecoration: 'none',
    '&.active': {
      color: theme.colors.offWhiteDarker,

    },  
  },
}));
