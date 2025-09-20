import { createStyles } from '@mantine/styles';

export const useHomeStyles = createStyles((theme) => ({
  homeOuter: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    background: theme.colors.peach,
    color: theme.colors.eerieBlack,

    svg: {
      [theme.other.mq.mobile]: {
        width: '140px',
      },
    },

    p: {
      fontFamily: '"Zain", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '0.05em',
      marginBlock: 0,
      lineHeight: '1em',
      color: theme.colors.offWhite,
    },

    [theme.other.mq.mobile]: {
      p: {
        fontSize: '1.25rem',
      },
      
    },
  },
}));
