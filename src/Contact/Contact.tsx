import { Box, Title, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useContactStyles } from './useContactStyles';
import { PageHelmet, useGlobalStyles } from '../Global';

export function Contact() {
  const { classes, cx } = useContactStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="contact">
      <PageHelmet title="Contact" description="Get in touch with our team" />
      <Box className={cx(globalClasses.page, classes.contactOuter)}>
        <Title order={1}>CONTACT BEEFY NEET YAAAAAA</Title>
        <Text component="p">I just freakin want helmet to work</Text>

        <Button
          variant="outline"
          color="darkblue"
          radius="md"
          component={Link}
          to="/"
          mt="md"
          ml="md"
        >
          Back Home
        </Button>
        <Button
          variant="outline"
          color="yellow"
          radius="md"
          component={Link}
          to="/about"
          mt="md"
          ml="md"
        >
          About Wreck Shop
        </Button>
      </Box>
    </Box>
  );
}
