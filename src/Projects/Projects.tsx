

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
        <Title order={4} className={globalClasses.pageSubtitleText}>
          And/or stuff I be doing
        </Title>
        <Text component="p">
          At the moment, I'm actually using this page for testing of of the Motion+ library. If
          you're here to check my work out, this is very much under construction, but feel free to
          take a peek at the junk I'm playing around with if it's live! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequatur molestias reprehenderit vero similique facere
          culpa officia ratione tempore sapiente rem, id, fugit quidem est debitis minima ipsum
          nostrum? Voluptatem, possimus!
        </Text>
        <Box
          className={classes.motionTestBox}
          h="600px"
          w="100%"
          my="calc(1dvh + 2dvw + 1rem)"
        ></Box>
      </Box>
    </Box>
  );
}
