import { createStyles } from '@mantine/styles';

export const useProjectsStyles = createStyles((theme) => ({
  projectsOuter: {
    color: theme.colors.eerieBlack,
  },

  motionTestBox: {
    border: `2px dashed ${theme.colors.eerieBlack}`,
    borderRadius: theme.radius.lg,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  motionObject: {
    width: '100px',
    aspectRatio: '1 / 1',
    backgroundColor: theme.colors.blue,
    borderRadius: '50%',
  },
}));
