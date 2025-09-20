import { Box, Title, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useServicesStyles } from './useServicesStyles';
import { PageHelmet, useGlobalStyles } from '../Global';

export function Services() {
  const { classes, cx } = useServicesStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="services">
      <PageHelmet title="Services" description="Learn more services our company" />
      <Box className={cx(globalClasses.page, classes.servicesOuter)}>
        <Title order={1}>SERVICES PAGE STUFF</Title>
        <Text component="p">Huzzah, here is the stuff we does do things ya</Text>
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
