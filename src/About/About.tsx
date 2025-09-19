import { Box, Title, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useAboutStyles } from './useAboutStyles';
import { PageHelmet, useGlobalStyles } from '../Global';

export function About() {
  const { classes, cx } = useAboutStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="about">
      <PageHelmet title="About" description="Learn more about our company" />
      <Box className={cx(globalClasses.page, classes.aboutOuter)}>
        <Title order={1}>ABOUT THE FLERP</Title>
        <Text component="p">INFORMATION ABOUT THE FLERP IS NEAT</Text>
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
