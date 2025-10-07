import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Image } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { HeaderMenu, Footer } from '..';
import { useLayoutStyles } from '.';
import DotMask from '../assets/dot-mask.svg';

export function Layout() {
  const { classes } = useLayoutStyles();
  const location = useLocation();
  const [showBars, setShowBars] = useState(false);



  useEffect(() => {
    // Show header only for these routes
    const visibleRoutes = ['/home', '/about', '/services', '/projects', '/contact'];
    setShowBars(visibleRoutes.includes(location.pathname));
  }, [location.pathname]);

  return (
    <Box className={classes.layout} id="layout-outer">
      <HeaderMenu show={showBars} />
      <Box component="main" className={classes.main} id="main-content">
        <Outlet />
      </Box>
      <Image src={DotMask} className={classes.dotMaskTop} /> 
      <Image src={DotMask} className={classes.dotMaskBottom} /> 
      <Footer show={showBars} />
    </Box>
  );
}
