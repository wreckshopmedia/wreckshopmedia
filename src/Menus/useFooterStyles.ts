import { createStyles } from '@mantine/core';
import { type FooterProps } from './Footer';

export const useFooterStyles = createStyles((theme, { show = true }: FooterProps) => ({
  footerOuter: {
    transform: show ? 'translateY(0)' : 'translateY(calc(7dvh + 7dvw))',
    // transition: 'rotate 200ms ease-out, transform 300ms ease-out, backdrop-filter 200ms ease-out',
    transition: 'all 250ms ease-out, transform 300ms ease-out',
    background: theme.colors.eerieBlack,
    width: '100dvw',
    left: '50%',
    translate: '-50% 0',
    bottom: 0,
    position: 'fixed',
    zIndex: 100,
    transformOrigin: 'bottom',
    transformStyle: 'preserve-3d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    rotate: '7deg',

    h6: {
      fontFamily: '"Zain", sans-serif',
      fontSize: 'clamp(13px, 2.5cqi, 16px)',
      fontWeight: 400,
      letterSpacing: '0.05em',
      marginBlock: 0,
      lineHeight: '1em',
      color: theme.colors.offWhite,
      textWrap: 'balance',
      [theme.other.mq.tabletPortrait]: {
        textAlign: 'center',
      },
    },

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
      translate: '-50% calc(140% + -10dvh)',
      height: '50px',
    },
    [theme.other.mq.shortScreen(700)]: {
      rotate: '0deg',
      translate: 0,
      left: 0,
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
  },

  footerInner: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.other.mq.customMax(500)]: {
      textAlign: 'center',
      justifyContent: 'center',
      marginInline: 'auto',
    },
    [theme.other.mq.shortScreen(700)]: {
      textAlign: 'center',
      justifyContent: 'center',
      marginInline: 'auto',
    },
  },
}));
