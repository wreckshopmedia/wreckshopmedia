import { createStyles } from '@mantine/styles';

export const useProjectsStyles = createStyles((theme) => ({
  projectsOuter: {
    color: theme.colors.eerieBlack,
  },

  motionTestBox: {
    border: `2px dashed ${theme.colors.eerieBlack}`,
    borderRadius: theme.radius.lg,
  },
}));
