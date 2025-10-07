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
    '& h1, h2, h3,': {
      textWrap: 'balance',
    },
    '& h4, h5, h6, p, a, span': {
      textWrap: 'pretty',
    },

    p: {
      fontSize: '1.25rem',
      lineHeight: '1.125em',
    },
   
  },

  centerLock: {
    paddingInline: theme.other.inlinePadding,
  },

  titleText: {
    ...TITLE_TEXT_STYLES, // UPDATE IN THEME FILE
  },


}));
