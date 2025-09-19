import { createStyles } from '@mantine/styles';

export const useHomeStyles = createStyles((theme) => ({
  homeOuter: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    background: theme.colors.peach,
    color: theme.colors.eerieBlack,

    p: {
      fontFamily: '"Zain", sans-serif',
      fontSize: 'clamp(1.25rem, 10cqi, 1.75rem)',
      fontWeight: 300,
      letterSpacing: '0.05em',
      marginBlock: 0,
      lineHeight: '1em',
      color: theme.colors.offWhite,
    },

    [theme.other.mq.customMax(800)]: {
      rotate: '90deg',
    },
  },
}));
