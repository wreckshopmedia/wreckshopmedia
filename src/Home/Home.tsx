import { Box, Text, Paper, Title } from '@mantine/core';
import { useHomeStyles } from './useHomeStyles';
import { PageHelmet, useGlobalStyles } from '../Global';
import { Link } from 'react-router-dom';

export function Home() {
  const { classes, cx } = useHomeStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="home">
      <PageHelmet />
      <Box className={cx(globalClasses.page, classes.homeOuter)}>
        <Box className={classes.homeCardsWrapper}>
          <Paper
            component={Link}
            role="button"
            to="/about"
            className={classes.homeCard}
            shadow="md"
            radius="lg"
            p="lg"
          >
            <Title order={3}>About</Title>
            <Text component="h4">About art, short blurb</Text>
          </Paper>
          <Paper
            component={Link}
            role="button"
            to="/services"
            className={classes.homeCard}
            shadow="md"
            radius="lg"
            p="lg"
          >
            <Title order={3}>Services</Title>
            <Text component="h4">Services art, short blurb</Text>
          </Paper>
          <Paper
            component={Link}
            role="button"
            to="/projects"
            className={classes.homeCard}
            shadow="md"
            radius="lg"
            p="lg"
          >
            <Title order={3}>Projects</Title>
            <Text component="h4">Projects art, short blurb</Text>
          </Paper>
          <Paper
            component={Link}
            role="button"
            to="/contact"
            className={classes.homeCard}
            shadow="md"
            radius="lg"
            p="lg"
          >
            <Title order={3}>Contact</Title>
            <Text component="h4">Contact art, short blurb</Text>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
