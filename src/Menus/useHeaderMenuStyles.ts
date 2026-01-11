import { createStyles } from '@mantine/core';

interface useHeaderMenuStylesProps {
  show?: boolean;
  isMobile?: boolean;
}

export const useHeaderMenuStyles = createStyles(
  (theme, { show, isMobile }: useHeaderMenuStylesProps) => ({
    headerOuter: {
      background: isMobile ? 'transparent' : theme.colors.eerieBlack,
      border: show ? 'none' : 'none',
      transition: 'all 250ms ease-out',
      transform: show ? 'translateY(0)' : 'translateY(calc(-10dvh + -10dvw))',
      rotate: isMobile ? '0deg' : '7deg',
      zIndex: 100,
      left: isMobile ? '0' : '50%',
      transformOrigin: 'top',
      transformStyle: 'preserve-3d',
      translate: isMobile ? '0 0' : '-50% 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      top: isMobile ? 0 : 'clamp(-20px, calc(30px + -1dvw + -2dvh), 0px)',

      // -------- WIDTH --------- //
      [theme.other.mq.customMax(900)]: {
        rotate: isMobile ? '0deg' : '6deg',
      },
      [theme.other.mq.customMax(500)]: {
        rotate: '0deg',
      },

      // ------- HEIGHT -------- //
      [theme.other.mq.shortScreen(800)]: {
        rotate: isMobile ? '0deg' : '4deg',
      },
      [theme.other.mq.shortScreen(600)]: {
        top: 0,
        rotate: '0deg',
        minHeight: isMobile ? 'unset' : '110px',
      },

      // ------- COMBO! iPad First, hamburger short menu -------- //

      [theme.other.mq.iPhone15ProMax]: {
        rotate: '0deg',
        // > REVISIT THIS...MAYBE SHRINK UP, but adjust bubble too
        // height: '60px',
      },
    },

    headerMenuInner: {
      marginInline: isMobile ? 0 : '20px',
      paddingInline: isMobile ? '12px' : theme.other.inlinePadding,
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
      // height: '90%', // > REVISIT
    },

    menuItem: {
      textTransform: 'uppercase',
      background: 'transparent',
      fontFamily: '"Zain", sans-serif',
      fontSize: 'clamp(1.125rem, 2.25cqi, 1.5rem)',
      fontWeight: 600,
      lineHeight: '1.125em',
      margin: 0,
      color: theme.colors.offWhite,
      textDecoration: 'none',
      '&.active': {
        color: theme.colors.peach,
      },
    },
  })
);
