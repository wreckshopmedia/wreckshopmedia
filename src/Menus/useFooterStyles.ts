import { createStyles } from '@mantine/core';

export const useFooterStyles = createStyles((theme) => ({
  footerOuter: {
    background: `${theme.colors.peach}80`,
    backdropFilter: 'blur(5px)',
    paddingBlock: '1rem',
    width: '100dvw',
    color: theme.colors.offWhite,
    boxShadow: '0px -4px 12px 2px #00000015',

    h6: {
      fontFamily: '"Zain", sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.05em',
      marginBlock: 0,
      lineHeight: '1em',
      color: theme.colors.offWhite,
    },
  },
}));
