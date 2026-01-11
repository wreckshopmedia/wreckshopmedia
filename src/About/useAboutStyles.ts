import { createStyles } from '@mantine/styles';

export const useAboutStyles = createStyles((theme) => ({
  aboutOuter: {
    color: theme.colors.offWhite,

   

    svg: {
      marginInline: 'unset',
    },

    p: {
      fontFamily: '"Zain", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 500,
    },
  },
}));
