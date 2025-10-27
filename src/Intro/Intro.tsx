import { Box } from '@mantine/core';
import { useIntroStyles } from './useIntroStyles';
import { PageHelmet, useGlobalStyles, WreckShopTitle } from '../Global';
import { Link } from 'react-router-dom';
import { SkullLogo } from '../SkullLogo/SkullLogo';
import { useSpring, useTransform } from 'motion/react';

export function Intro() {
  const { classes, cx } = useIntroStyles();
  const { classes: globalClasses } = useGlobalStyles();

  // 👇 The spring itself is now the source
  const progress = useSpring(0, {
    // stiffness: 250, // higher = snappier
    // damping: 5,    // lower = less resistance
    // mass: 1.5,   // lower = faster
    duration: 500,
  });

  const clipPath = useTransform(
    progress,
    [0, 1],
    ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
  );

  const handleHoverStart = () => progress.set(1);
  const handleHoverEnd = () => progress.set(0);

  return (
    <Box id="intro">
      <PageHelmet />
      <Box className={cx(globalClasses.page, classes.introOuter)}>
        <Box
          component={Link}
          to="/home"
          className={classes.introButtonWrapper}
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          <SkullLogo size="160px" />
          <WreckShopTitle size="lg" clipPath={clipPath} />
        </Box>
      </Box>
    </Box>
  );
}
