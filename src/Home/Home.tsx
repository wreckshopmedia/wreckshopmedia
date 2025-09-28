import { Box, Text, Paper, Title } from '@mantine/core';
import { useHomeStyles } from '.';
import { PageHelmet, useGlobalStyles, navLinks } from '../Global';
import { Link } from 'react-router-dom';

export function Home() {
  const { classes, cx } = useHomeStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="home">
      <PageHelmet />
      <Box className={cx(globalClasses.page, classes.homeOuter)}>
        <Box className={classes.homeCardsWrapper}>
          {navLinks.map((link) => (
            <Paper
              key={link.name}
              component={Link}
              role="button"
              to={`/${link.name}`}
              className={classes.homeCard}
              shadow="md"
              radius="lg"
              p="lg"
            >
              <Title order={4} className={globalClasses.titleText}>{link.name}</Title>
              <Text component="p">{link.blurb}</Text>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
