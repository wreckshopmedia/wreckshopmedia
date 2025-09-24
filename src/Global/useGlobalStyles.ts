import { createStyles } from '@mantine/core';

export const useGlobalStyles = createStyles((theme) => ({
  

  page: {
    width: '100%',
    minHeight: '100dvh',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
    flexGrow: 1,
    '& h1, h2, h3,': {
      textWrap: 'balance',
    },
    '& h4, h5, h6, p, a, span': {
      textWrap: 'pretty',
    },
  },

  wreckText: {
    color: theme.colors.yellow,
    fontSize: '2.5rem',
    letterSpacing: '0.15em',
    marginBlock: 0,
    fontFamily: '"Winky Sans", sans-serif',
    lineHeight: '1em',
    [theme.other.mq.mobile]: {
      fontSize: '2rem',
    },
  },

  shopText: {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    textDecoration: 'inherit',
    textUnderlineOffset: 'inherit',
    textDecorationThickness: 'inherit',
    textDecorationLine: 'inherit',
    textTransform: 'inherit',
    fontStyle: 'inherit',
    letterSpacing: 'inherit',
    color: theme.colors.blue,
  },
}));
