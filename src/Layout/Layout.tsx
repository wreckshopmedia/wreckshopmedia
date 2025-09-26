import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, UnstyledButton } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { HeaderMenu, Footer, ColorChecker } from '..';
import { useLayoutStyles } from '.';


export function Layout() {
  const { classes } = useLayoutStyles();
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(false);
  const [showColors, setShowColors] = useState(false);

  const handleColorsClick = () => {
    setShowColors((prev) => !prev);
  };

  useEffect(() => {
    // Show header only for these routes
    const visibleRoutes = ['/about', '/services', '/projects', '/contact'];
    setShowHeader(visibleRoutes.includes(location.pathname));
  }, [location.pathname]);

  return (
    <Box className={classes.layout} id="layout-outer">
      <HeaderMenu show={showHeader} />
      <Box component="main" className={classes.main} id="main-content">
        <Outlet />
      </Box>
      {showColors && location.pathname === '/' && <ColorChecker />}
      <UnstyledButton
        c="white"
        fz="10px"
        opacity="0.4"
        onClick={handleColorsClick}
        type="button"
        pos="absolute"
        left="10px"
        bottom="10px"
      >
        colors
      </UnstyledButton>
      <Footer />
    </Box>
  );
}
