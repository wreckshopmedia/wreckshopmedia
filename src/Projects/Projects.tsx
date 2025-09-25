import { Box, Title, Text } from '@mantine/core';

import { useProjectsStyles } from './useProjectsStyles';
import { PageHelmet, useGlobalStyles } from '../Global';

export function Projects() {
  const { classes, cx } = useProjectsStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="projects">
      <PageHelmet title="Projects" description="Learn more projects our company" />
      <Box className={cx(globalClasses.page, classes.projectsOuter)}>
        <Title order={1}>STUFF I DUN DID</Title>
        <Title order={4}>And/or stuff I be doing</Title>
        <Text component="p">
          This page will probably be updated a lot. Like, all the time. Like I am constantly doing a
          bajillion things so get ready to wet your pants, Daphne. It's go time. Also, motion to
          spell it "pance" moving forward. Great...now I got squiggly lines in my code editor.
          Cowabunga.
        </Text>
      </Box>
    </Box>
  );
}
