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
        <Title order={4} className={globalClasses.pageSubtitleText}>
          Eventually, we may have a form and stuff here. Even though forms can be a bit antiquated.
        </Title>
        <Text component="p">How do you even spell antiquated?</Text>
        <Text component="p">Also, I'm here if ya need me in the meantime: <Text component="span" fw={700}>mo@wreckshopmedia.com</Text></Text>
      </Box>
    </Box>
  );
}
