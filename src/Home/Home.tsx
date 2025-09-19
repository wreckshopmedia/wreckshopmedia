import { Box, Text, Title } from '@mantine/core';
import { useHomeStyles } from './useHomeStyles';
import { PageHelmet, useGlobalStyles } from '../Global';
// import { Link } from 'react-router-dom';
import { SkullLogo } from '../SkullLogo/SkullLogo';

export function Home() {
  const { classes, cx } = useHomeStyles();
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box id="home">
      <PageHelmet />
      <Box className={cx(globalClasses.page, classes.homeOuter)}>
        <SkullLogo size={'180px'} />
        <Title className={globalClasses.wreckText} order={1}>
          WRECK
          <Text className={globalClasses.shopText} component="span">
            SHOP</Text>
        </Title>
        <Text component="p">We're working on it.</Text>
        {/* <Box>
          <Button
            variant="filled"
            color="darkblue"
            radius="md"
            size="lg"
            component={Link}
            to="/about"
          >
            About
          </Button>

          <Button
            variant="filled"
            color="darkblue"
            radius="md"
            size="lg"
            component={Link}
            to="/contact"
          >
            Contact
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
}
