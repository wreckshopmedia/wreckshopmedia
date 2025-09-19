import { createStyles } from '@mantine/core';

export const useGlobalStyles = createStyles(() => ({
  // ! FIX - THIS IS JUST PLACEHOLDER
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: 'Open Sans, sans-serif',
    },
  },

  page: {
    minHeight: '600px',
    minWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
