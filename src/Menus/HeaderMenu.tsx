import { Header, Box } from '@mantine/core';
import { useHeaderMenuStyles, MobileMenu } from '.';
import { Link, useLocation } from 'react-router-dom';
// import { SkullLogo } from '..';
import { HEADER_HEIGHT } from '../theme/theme';
import { useIsMobile } from '../hooks';
import { navLinks, useGlobalStyles, WreckShopTitle } from '../Global';

export interface HeaderMenuProps {
  show?: boolean;
}

export function HeaderMenu(props: HeaderMenuProps) {
  const { show = true } = props;
  const isMobile = useIsMobile();
  const { classes, cx } = useHeaderMenuStyles({ show });
  const { classes: globalClasses } = useGlobalStyles();
  const location = useLocation();

  return (
    // WRAPPING WITH MOTION FOR ANIMATION ENTRANCE

    <Header
      pos="fixed"
      w="111dvw"
      id="header"
      height={isMobile ? '80px' : HEADER_HEIGHT}
      className={classes.headerOuter}
    >
      <Box
        h="95%"
        className={cx(classes.headerMenuInner, globalClasses.centerLock)}
        id="header-menu"
      >
        <Box className={classes.headerMenu} m={0} p={0}>
          {/* <Link id="home-link" to="/home">
            <SkullLogo size="80px" borderColor="peach"  />
          </Link> */}
 
          {isMobile ? (
            <MobileMenu />
          ) : (
            <Box className={classes.menuTitleLinksBox}>
              <Link id="home-link" to="/home" className={classes.headerHomeLink}>
                <WreckShopTitle size="clamp(2.75rem, 7.25cqi, 4.5rem)" />
              </Link>
              <Box h="100%" component="nav" className={classes.headerMenuOptionsWrapper}>
                {navLinks.map((link) => {
                  const isActive = location.pathname === `/${link.name}`;

                  return (
                    <Link
                      key={link.name}
                      className={cx(classes.menuItem, isActive && 'active')}
                      to={`/${link.name === 'home' ? '' : link.name}`}
                      id={`${link.name}-link`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Header>
  );
}
