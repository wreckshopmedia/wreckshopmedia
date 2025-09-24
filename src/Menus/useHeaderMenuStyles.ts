import { createStyles } from '@mantine/core';

export const useHeaderMenuStyles = createStyles((theme) => ({
  headerOuter: {
    // the ACTUAL "Header" element
    background: `${theme.colors.peach}EE`,
    backdropFilter: 'blur(2px)',
    border: 'none',
    boxShadow: '0 4px 20px #00000010',

  },

  headerMenuInner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  headerMenuOptionsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 'min(2em, 1em + 2cqi)'
  },

  menuItem: {
    background: 'transparent',
    fontFamily: '"Zain", sans-serif',
    fontSize: '1.175rem',
    fontWeight: 600,
    margin: 0,
    color: theme.colors.offWhite,
    textDecoration: 'none',
  },
}));
