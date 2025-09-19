import { createStyles } from '@mantine/styles';

export const useHomeStyles = createStyles(() => ({
  homeOuter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '600px',
    minWidth: '800px',
    background: '#283044',
    color: '#fff',
  },
}));
