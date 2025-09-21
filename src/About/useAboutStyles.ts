import { createStyles } from '@mantine/styles';

export const useAboutStyles = createStyles((theme) => ({
  aboutOuter: {
    
    color: theme.colors.offWhite,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    paddingBlock: 'min(2em, 1em + 2cqi)',
    


    p: {
      fontFamily: '"Zain", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 500,
    },
  },
}));
