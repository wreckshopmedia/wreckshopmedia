import { useLocation } from 'react-router-dom';
import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { HeaderMenu, Footer } from '..';
import { useLayoutStyles } from '.';

export function Layout() {
  const { classes } = useLayoutStyles();

  const location = useLocation();
  const showHeaderMenu = location.pathname === '/' || location.pathname === '/home';

  return (
    <Box className={classes.layout} id="layout-outer">
      {!showHeaderMenu && <HeaderMenu />}
      <Box component="main">
        <Outlet />
      </Box>
      {/* maybe show Footer always??? */}
      {!showHeaderMenu && <Footer />}
    </Box>
  );
}
