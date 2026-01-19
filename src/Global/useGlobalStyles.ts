import { createStyles } from '@mantine/core';
import { TITLE_TEXT_STYLES } from '../theme/theme';

export const useGlobalStyles = createStyles((theme) => ({
  page: {
    width: '100%',
    minHeight: '100dvh',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexGrow: 1,
    paddingInline: theme.other.inlinePadding, // "CENTER LOCK"
    paddingTop: '130px',
    paddingBottom: '120px',
    [theme.other.mq.tabletPortrait]: {
      paddingTop: '40px',
    },
    [theme.other.mq.customMax(550)]: {
      paddingBottom: '40px',
    },
    [theme.other.mq.shortScreen(700)]: {
      paddingBottom: '40px',
    },
    [theme.other.mq.iPhone15ProMax]: {
      paddingBottom: '40px',
    },
    '& h1, h2, h3, h4': {
      textWrap: 'balance',
      lineHeight: '1.2em',
    },
    '& h5, h6, p, a, span': {
      textWrap: 'pretty',
    },

    p: {
      fontSize: '1.2rem',
      lineHeight: '1.125em',
      marginBlock: '0.5em',
      span: {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        marginBlock: 0,
      },
    },
  },

  centerLock: {
    paddingInline: theme.other.inlinePadding,
  },

  titleText: {
    ...TITLE_TEXT_STYLES, // UPDATE IN THEME FILE
  },

  pageSubtitleText: {
    fontFamily: '"Lilita One", sans-serif',
    fontSize: 'clamp(1.25rem, 2cqi, 1.5rem)',
    lineHeight: '1.2em',
    marginBlock: '0',
    fontWeight: 400,
    
  },
}));
