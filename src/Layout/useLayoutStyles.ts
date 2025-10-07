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

  dotMaskTop: {
    // zIndex: 10000,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    maxWidth: '100dvw', // TODO FIX THIS
    // maxHeight: '70px',
    minWidth: '2000px',

  },
  
  dotMaskBottom: {
    // zIndex: 10000,
    transform: 'scaleY(-1)',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    maxWidth: '100dvw', // TODO FIX THIS
    // maxHeight: '70px',
    minWidth: '2000px',
  },


}));
