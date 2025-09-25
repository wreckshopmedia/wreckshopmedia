import { Box, Title, Text } from '@mantine/core';
import { useContactStyles } from './useContactStyles';
import { PageHelmet, useGlobalStyles } from '../Global';

export function Contact() {
  const { classes, cx } = useContactStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="contact">
      <PageHelmet title="Contact" description="Get in touch with our team" />
      <Box className={cx(globalClasses.page, classes.contactOuter)}>
        <Title order={2}>NEW PHONE WHO DIS</Title>
        <Text component="p">Yo lem</Text>
        
      </Box>
    </Box>
  );
}
