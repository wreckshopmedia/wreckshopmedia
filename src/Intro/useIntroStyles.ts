import { createStyles } from '@mantine/styles';

export const useIntroStyles = createStyles((theme) => ({
  introOuter: {
    
    
    overflow: 'hidden',
    color: theme.colors.eerieBlack,

    svg: {
      [theme.other.mq.mobile]: {
        width: '120px',
      },
    },
  },

  introButtonWrapper: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    gap: 'min(0.5rem, 2cqi)',
  },
}));
