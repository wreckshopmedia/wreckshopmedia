import { createStyles } from '@mantine/core';
import { type FooterProps } from './Footer';

export const useFooterStyles = createStyles((theme, { show = true }: FooterProps) => ({
  footerOuter: {
    transform: show ? 'translateY(0)' : 'translateY(calc(7dvh + 7dvw))',
    transition: 'all 250ms ease-out, transform 300ms ease-out',
    background: theme.colors.eerieBlack,
    height: '60px',
    width: '10dvw',
    left: '50%',
    translate: '-50% 0',
    bottom: '5px',
    position: 'fixed',
    zIndex: 100,
    transformOrigin: 'bottom',
    transformStyle: 'preserve-3d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    rotate: '7deg',

    // -------- WIDTH --------- //
    [theme.other.mq.customMax(900)]: {
      rotate: '6deg',
      bottom: '2vw',
    },
    [theme.other.mq.customMax(700)]: {
      rotate: '5deg',
    },
    [theme.other.mq.customMax(550)]: {
      rotate: '0deg',
      bottom: 0,
    },

    // ------- HEIGHT -------- //
    [theme.other.mq.shortScreen(800)]: {
      rotate: '4deg',
      translate: '-50% calc(140% + -10dvh)',
      height: '50px',
    },
    [theme.other.mq.shortScreen(700)]: {
      rotate: '0deg',
      bottom: 0,
      translate: 0,
      left: 0,
    },
    [theme.other.mq.shortScreen(550)]: {
      position: 'relative',
    },

    // ------- COMBO! - UNDOCK AND GO TO TRADITIONAL FOOTER MODE! -------- //
    [theme.other.mq.iPhone15ProMax]: {
      rotate: '0deg',
      position: 'relative',
      bottom: 0,
      left: 0,
      width: '100%',
      translate: 0,
    },
    h6: {
      fontFamily: '"Zain", sans-serif',
      fontSize: 'clamp(12px, 1.6cqi, 16px)',
      fontWeight: 400,
      letterSpacing: '0.05em',
      marginBlock: 0,
      lineHeight: '1.35em',
      color: theme.colors.offWhite,
      textWrap: 'balance',
      [theme.other.mq.tabletPortrait]: {
        textAlign: 'center',
      },
    },
  },

  footerInner: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 'max(6vw, calc(-1200px + 100vw) / 2)',
    [theme.other.mq.tabletPortrait]: {
      paddingLeft: 'calc(3vw + 2rem)',
    },
    [theme.other.mq.customMax(550)]: {
      textAlign: 'center',
      justifyContent: 'center',
      marginInline: 'auto',
      paddingInline: '2dvw',
    },
    [theme.other.mq.shortScreen(700)]: {
      textAlign: 'center',
      justifyContent: 'center',
      marginInline: 'auto',
      paddingInline: '2dvw',
    },
  },
}));
