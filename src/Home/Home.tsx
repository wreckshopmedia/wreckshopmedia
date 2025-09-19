import { Box, Title, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useHomeStyles } from './useHomeStyles';
import { PageHelmet, useGlobalStyles } from '../Global';

export function Home() {
  const { classes, cx } = useHomeStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="home">
      <PageHelmet />
      <Box className={cx(globalClasses.page, classes.homeOuter)}>
        <Title order={1}>HOME PAGE WEEEEE</Title>
        <Text component="p">This is the home page of the application.</Text>

        <Button variant="outline" color="yellow" radius="md" component={Link} to="/about" mt="md">
          About Wreck Shop
        </Button>
        <Button
          variant="outline"
          color="red"
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
