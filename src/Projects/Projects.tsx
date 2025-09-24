import { Box, Title, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useProjectsStyles } from './useProjectsStyles';
import { PageHelmet, useGlobalStyles } from '../Global';

export function Projects() {
  const { classes, cx } = useProjectsStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="projects">
      <PageHelmet title="Projects" description="Learn more projects our company" />
      <Box className={cx(globalClasses.page, classes.projectsOuter)}>
        <Title order={1}>PROJECTS HERE yaaaaaaaaa</Title>
        <Text component="p">Side by side view porjects that ir neato stuff</Text>
        <Button variant="outline" color="darkblue" radius="md" component={Link} to="/" mt="md">
          Back Home
        </Button>

        <Button
          variant="outline"
          color="darkgray"
          radius="md"
          component={Link}
          to="/contact"
          mt="md"
          ml="md"
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}
