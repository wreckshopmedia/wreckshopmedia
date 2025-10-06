import { useDisclosure } from '@mantine/hooks';
import { Box, Drawer, Text } from '@mantine/core';
import { navLinks, WreckShopTitle } from '../Global';
import { useIsPhone } from '../hooks';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useLocation } from 'react-router-dom';
import { useMobileMenuStyles } from '.';
import { SkullLogo } from '../SkullLogo';
import { BLUE, YELLOW } from '../theme/theme';

export function MobileMenu() {
  const isPhone = useIsPhone();
  const [opened, { open, close }] = useDisclosure(false);
  const { classes, cx } = useMobileMenuStyles();
  const location = useLocation();

  const handleHamburgerClick = () => {
    open();
  };

  return (
    <Box className={classes.mobileMenuOuter} id="mobile-menu">
      <Box
        onClick={handleHamburgerClick}
        component="button"
        aria-label="Open menu"
        className={classes.hamburger}
      >
        <RxHamburgerMenu size={40} />
      </Box>

      <Drawer
        opened={opened}
        onClose={close}
        padding="md"
        overlayProps={{ opacity: 0.5, blur: 3 }}
        position="right"
        size={isPhone ? 'clamp(200px, calc(60dvw + 30dvh), 280px)' : 'md'}
        withCloseButton={false}
        transitionProps={{ transition: 'slide-left', duration: 170, timingFunction: 'ease' }}
        className={classes.drawer}
      >
        <Box component="nav" className={classes.mobileMenuNavContainer} id="mobile-drawer-menu">
          <Box className={classes.mobileMenuTextRoutesContainer}>
            <Link to="/home" onClick={close} className={classes.mobileMenuTitleLink}>
              <WreckShopTitle wreckColor={YELLOW} shopColor={BLUE} size="lg" />
            </Link>
            {navLinks.map((link) => {
              const isActive = location.pathname === `/${link.name}`;

              return (
                <Text
                  component={Link}
                  key={link.name}
                  to={`/${link.name === 'home' ? '' : link.name}`}
                  className={cx(classes.mobileMenuItem, isActive && 'active')}
                  onClick={close}
                  id={`${link.name}-drawer-link`}
                >
                  {link.name}
                </Text>
              );
            })}
          </Box>
          <Link to="/" onClick={close} className={classes.mobileMenuLogoLink} >
            <SkullLogo size="100px" borderColor="offWhite" />
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
}
