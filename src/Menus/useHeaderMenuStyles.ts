import { createStyles } from '@mantine/core';

interface useHeaderMenuStylesProps {
  show?: boolean;
}

export const useHeaderMenuStyles = createStyles((theme, { show }: useHeaderMenuStylesProps) => ({
  headerOuter: {
    background: theme.colors.eerieBlack,
    border: show ? 'none' : 'none',
    transition: 'all 250ms ease-out',

    transform: show ? 'translateY(0)' : 'translateY(calc(-10dvh + -10dvw))',
    rotate: '7deg',
    zIndex: 100,
    left: '50%',
    transformOrigin: 'top',
    transformStyle: 'preserve-3d',
    translate: '-50% 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    // -------- WIDTH --------- //
    [theme.other.mq.customMax(900)]: {
      rotate: '6deg',
    },
    [theme.other.mq.customMax(500)]: {
      rotate: '0deg',
    },

    // ------- HEIGHT -------- //
    [theme.other.mq.shortScreen(800)]: {
      rotate: '4deg',
      height: 'clamp(60px, calc(40px + 12dvh), 120px)',
    },
    [theme.other.mq.shortScreen(600)]: {
      rotate: '0deg',
    },

    // ------- COMBO! iPad First, hamburger short menu -------- //

    [theme.other.mq.iPhone15ProMax]: {
      rotate: '0deg',
      height: '60px',
    },
  },

  headerMenuInner: {
    marginInline: '20px',
  },

  headerMenu: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  headerHomeLink: {
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      h1: {
        // "WRECK"
        color: theme.colors.offWhite,
        span: {
          // "SHOP"
          color: theme.colors.blueLighter,
        },
      },
    },
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
