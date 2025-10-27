import { createStyles } from '@mantine/styles';

export const useServicesStyles = createStyles((theme) => ({
  servicesOuter: {

    color: theme.colors.eerieBlack,
    
    h3: {
      fontSize: 'clamp(1.5rem, 4cqi, 2.25rem)',
      marginBlock: 0,
    },
  },
}));
