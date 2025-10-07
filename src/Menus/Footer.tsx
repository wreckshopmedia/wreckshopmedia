import { Box, Text } from '@mantine/core';
import { useFooterStyles } from './useFooterStyles';
import { useGlobalStyles } from '../Global';
import { FOOTER_HEIGHT } from '../theme/theme';

export interface FooterProps {
  show?: boolean;
}

export function Footer(props: FooterProps) {
  const { show = true } = props;
  const { classes, cx } = useFooterStyles({ show });
  const { classes: globalClasses } = useGlobalStyles();

  // if someone clicks colors button we toggle state of showColors. If showColors is clicked and we are on the '/' page (intro, no slug), we show colors!

  return (
    <Box component="footer" className={classes.footerOuter} w="106dvw" h={FOOTER_HEIGHT}>
      <Box className={cx(globalClasses.centerLock, classes.footerInner)}>
        <Text component="h6">
          Copyright © 2025 Wreck Shop Media LLC. All Rights Reserved So There.
        </Text>
      </Box>
    </Box>
  );
}
