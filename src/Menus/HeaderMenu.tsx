import { Header, Box } from '@mantine/core';
import { useHeaderMenuStyles } from '.';
import { Link } from 'react-router-dom';
import { SkullLogo } from '../SkullLogo/SkullLogo';

export function HeaderMenu() {
  const { classes } = useHeaderMenuStyles();
  return (
    <Header pos="fixed" id="header" height="80px" className={classes.headerOuter}>
      <Box h="100%" className={classes.headerMenuInner} id="header-menu">
        <Link to="/">
          <SkullLogo size="50px" />
        </Link>
        <Box h="100%" component="nav" className={classes.headerMenuOptionsWrapper}>
          <Link className={classes.menuItem} to="/home">
            HOME
          </Link>
          <Link className={classes.menuItem} to="/about">
            ABOUT
          </Link>
          <Link className={classes.menuItem} to="/services">
            SERVICES
          </Link>
          <Link className={classes.menuItem} to="/projects">
            PROJECTS
          </Link>
          <Link className={classes.menuItem} to="/contact">
            CONTACT
          </Link>
        </Box>
      </Box>
    </Header>
  );
}
