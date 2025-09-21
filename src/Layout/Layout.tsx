import { useLocation } from 'react-router-dom';
import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { HeaderMenu, Footer } from '..';
import { useLayoutStyles } from '.';

export function Layout() {
  const { classes } = useLayoutStyles();

  const location = useLocation();
  const isIntro = location.pathname === '/';

  return (
    <Box className={classes.layout} id="layout-outer">
      {!isIntro && <HeaderMenu />}
      <Box component="main">
        <Outlet />
      </Box>
      {!isIntro && <Footer />}
    </Box>
  );
}
