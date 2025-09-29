import { Box } from '@mantine/core';
import { useIntroStyles } from './useIntroStyles';
import { PageHelmet, useGlobalStyles, WreckShopTitle } from '../Global';
import { Link } from 'react-router-dom';
import { SkullLogo } from '../SkullLogo/SkullLogo';

export function Intro() {
  const { classes, cx } = useIntroStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="intro">
      <PageHelmet />
      <Box className={cx(globalClasses.page, classes.introOuter)}>
        <Box component={Link} to="/home" className={classes.introButtonWrapper}>
          <SkullLogo size={'160px'} />
          <WreckShopTitle />
        </Box>
      </Box>
    </Box>
  );
}
