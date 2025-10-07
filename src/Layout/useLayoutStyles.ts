import { createStyles } from '@mantine/core';

export const useLayoutStyles = createStyles((theme) => ({
  layout: {
    position: 'relative',
    minHeight: '100dvh',
    background: theme.colors.peach,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden', // ! MUY IMPERRTOINT!
  },

  main: {
    position: 'relative',
    flex: '1 0 auto',
    width: '100%',
  
    
  },
}));
