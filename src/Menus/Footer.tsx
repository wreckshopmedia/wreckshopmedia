import { Box, Text } from '@mantine/core';
import { useFooterStyles } from './useFooterStyles';

export function Footer() {
  const { classes } = useFooterStyles();

  // if someone clicks colors button we toggle state of showColors. If showColors is clicked and we are on the '/' page (intro, no slug), we show colors!

  return (
    <Box component="footer" className={classes.footerOuter} m={0} p="1rem">
      <Text align="center" component="h6" my={0}>
        Copyright © 2025 Wreck Shop Media LLC. All Rights Reserved So There.
      </Text>
    </Box>
  );
}
