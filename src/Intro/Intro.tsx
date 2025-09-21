import { Box, Text, Title } from '@mantine/core';
import { useIntroStyles } from './useIntroStyles';
import { PageHelmet, useGlobalStyles } from '../Global';
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
          <Title className={globalClasses.wreckText} order={1}>
            WRECK
            <Text className={globalClasses.shopText} component="span">
              SHOP
            </Text>
          </Title>
        </Box>
      </Box>
    </Box>
  );
}
