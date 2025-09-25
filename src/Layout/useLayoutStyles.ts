import { createStyles } from '@mantine/core';

export const useLayoutStyles = createStyles((theme) => ({
  layout: {
    minHeight: '100dvh',
    background: theme.colors.peach,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    paddingInline: theme.other.inlinePadding,
  },

  main: {
    flex: '1 0 auto',
    width: '100%',
    maxWidth: '1200px',
  },
}));
