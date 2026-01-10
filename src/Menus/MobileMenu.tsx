import { Box, Text } from '@mantine/core';
import type { Variants } from 'motion/react';
import { motion, stagger } from 'motion/react';
import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';
import { navLinks, WreckShopTitle } from '../Global';
import { Link, useLocation } from 'react-router-dom';
import { useMobileMenuStyles } from '.';
import { SkullLogo } from '../SkullLogo';

const navVariants = {
  open: {
    transition: { delayChildren: stagger(0.06, { startDelay: 0.07 }) },
  },
  closed: {
    transition: { delayChildren: stagger(0.04, { from: 'last' }) },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const contentVariants = {
  open: {
    opacity: 1,
    transition: { delayChildren: 0.05 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const logoVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 900, velocity: -90 },
      delay: 0.3,
    },
  },
  closed: {
    y: 40,
    opacity: 0,
    transition: {
      y: { stiffness: 900 },
    },
  },
};

const sidebarVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(28px at calc(100% - 40px) 40px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path fill="transparent" strokeWidth="3" strokeLinecap="round" {...props} />
);

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { classes, cx } = useMobileMenuStyles();
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  const handleToggle = () => {
    setIsOpen((value) => !value);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <Box className={classes.mobileMenuOuter} id="mobile-menu">
      <Box className={classes.mobileMenuHeader}>
        <button
          type="button"
          onClick={handleToggle}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-drawer-menu"
          className={classes.mobileMenuToggle}
        >
          <motion.svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            className={classes.mobileMenuToggleIcon}
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
          >
            <Path
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' },
              }}
            />
          </motion.svg>
        </button>
      </Box>
      <motion.nav
        id="motion-nav"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className={classes.mobileMenuNav}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <motion.div
          id="motion-div-mobile-menu-background"
          className={classes.mobileMenuBackground}
          variants={sidebarVariants}
        />
        <motion.div className={classes.mobileMenuContent} variants={contentVariants}>
          <Box component="nav" className={classes.mobileMenuNavContainer} id="mobile-drawer-menu">
            <Box className={classes.mobileMenuTextRoutesContainer}>
              <Link to="/home" onClick={handleClose} className={classes.mobileMenuTitleLink}>
                <WreckShopTitle size="lg" />
              </Link>
              <motion.ul className={classes.mobileMenuList} variants={navVariants}>
                {navLinks.map((link) => {
                  const isActive = location.pathname === `/${link.name}`;

                  return (
                    <motion.li
                      key={link.name}
                      className={classes.mobileMenuListItem}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Text
                        component={Link}
                        to={`/${link.name === 'home' ? '' : link.name}`}
                        className={cx(classes.mobileMenuItem, isActive && 'active')}
                        onClick={handleClose}
                        id={`${link.name}-drawer-link`}
                      >
                        {link.name}
                      </Text>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </Box>
            <motion.div className={classes.mobileMenuLogoLink} variants={logoVariants}>
              <Link to="/" onClick={handleClose}>
                <SkullLogo size="100px" borderColor="offWhite" />
              </Link>
            </motion.div>
          </Box>
        </motion.div>
      </motion.nav>
    </Box>
  );
}

const useDimensions = (ref: RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
