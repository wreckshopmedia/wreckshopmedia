import { Box, Text } from '@mantine/core';
import { useFooterStyles } from './useFooterStyles';

export function Footer() {
  const { classes } = useFooterStyles();
  return (
    <Box component="footer" className={classes.footerOuter} m={0} p="1rem">
      <Text align="center" component="h6" my={0}>
        © 2025 Wreck Shop Media LLC. All rights reserved.
      </Text>
    </Box>
  );
}
