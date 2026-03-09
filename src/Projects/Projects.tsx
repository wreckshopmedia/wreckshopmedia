import { useRef } from 'react';
import { Box, Title, Text } from '@mantine/core';
import { motion, useScroll, useTransform } from 'motion/react';
import { useProjectsStyles } from './useProjectsStyles';
import { PageHelmet, useGlobalStyles } from '../Global';

export function Projects() {
  const { classes, cx } = useProjectsStyles();
  const { classes: globalClasses } = useGlobalStyles();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // 0 → 1 as it moves into view
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1], { clamp: true });
  const scale = useTransform(scrollYProgress, [0.1, 0.2], [0.4, 1], { clamp: true });

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
        <Title order={4} ta="center" pt="1em">
          MOTION BOX 1 - did SPRING and DRAG
        </Title>
        <Box
          className={classes.motionTestBox}
          h="600px"
          w="100%"
          my="min(calc(0.5dvh + 2dvw + 0.25rem), 2rem)"
        ></Box>
        <Title order={4} ta="center" pt="1em">
          MOTION BOX 2 - CURRENTLY "ENTER"
        </Title>
        <Box
          className={classes.motionTestBox}
          h="500px"
          w="100%"
          my="min(calc(0.5dvh + 2dvw + 0.25rem), 2rem)"
        >
          <motion.div className={classes.motionObject} 
            ref={ref}
            style= {{ opacity, scale }}
          />
        </Box>
      </Box>
    </Box>
  );
}
