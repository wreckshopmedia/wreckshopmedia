import { createStyles } from '@mantine/styles';

export const useHomeStyles = createStyles((theme) => ({
  homeOuter: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    background: theme.colors.peach,
    color: theme.colors.eerieBlack,

    [theme.other.mq.customMax(800)]: {
      rotate: '90deg',
    },
  },
}));
