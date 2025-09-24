import { createStyles } from '@mantine/core';

export const useFooterStyles = createStyles((theme) => ({
  footerOuter: {
    background: theme.colors.eerieBlack,
    paddingBlock: '1rem',
    width: '100dvw',
    
    

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
