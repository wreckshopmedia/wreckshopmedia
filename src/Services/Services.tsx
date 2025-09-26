import { Box, Title, Text } from '@mantine/core';
import { useServicesStyles } from './useServicesStyles';
import { PageHelmet, useGlobalStyles } from '../Global';

export function Services() {
  const { classes, cx } = useServicesStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="services">
      <PageHelmet title="Services" description="Learn more services our company" />
      <Box className={cx(globalClasses.page, classes.servicesOuter)}>
        <Title order={2}>SERVICES PAGE STUFF</Title>
        <Text component="p">Huzzah, here is the stuff we does do things ya</Text>
       
      </Box>
    </Box>
  );
}
