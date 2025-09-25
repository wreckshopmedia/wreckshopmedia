import { Header, Box } from '@mantine/core';
import { useHeaderMenuStyles } from '.';
import { Link } from 'react-router-dom';
import { SkullLogo } from '../SkullLogo';
import { HEADER_HEIGHT } from '../theme/theme';
import { useIsAtTop } from '../hooks';

export interface HeaderMenuProps {
  show?: boolean;
}

export function HeaderMenu(props: HeaderMenuProps) {
  const { show = true } = props;
  const isAtTop = useIsAtTop(60);
  const { classes } = useHeaderMenuStyles({ isAtTop, show });

  return (
    <Header pos="fixed" id="header" height={HEADER_HEIGHT} className={classes.headerOuter}>
      <Box h="100%" className={classes.headerMenuInner} id="header-menu">
        <Box className={classes.headerMenu} m={0} p={0}>
          <Link id="home-link" to="/home">
            <SkullLogo size="50px" />
          </Link>
          <Box h="100%" component="nav" className={classes.headerMenuOptionsWrapper}>
            <Link className={classes.menuItem} to="/about" id="about-link">
              ABOUT
            </Link>
            <Link className={classes.menuItem} to="/services" id="services-link">
              SERVICES
            </Link>
            <Link className={classes.menuItem} to="/projects" id="projects-link">
              PROJECTS
            </Link>
            <Link className={classes.menuItem} to="/contact" id="contact-link">
              CONTACT
            </Link>
          </Box>
        </Box>
      </Box>
    </Header>
  );
}
