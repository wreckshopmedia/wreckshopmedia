import { createStyles } from '@mantine/styles';

export const useIntroStyles = createStyles((theme) => ({
  introOuter: {
    overflow: 'hidden',

    svg: {
      [theme.other.mq.tabletPortrait]: {
        width: '120px',
      },
    },
  },

  introButtonWrapper: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    marginInline: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    gap: 'min(0.5rem, 2cqi)',
  },
}));
