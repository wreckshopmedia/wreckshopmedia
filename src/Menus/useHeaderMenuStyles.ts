import { createStyles } from '@mantine/core';

interface useHeaderMenuStylesProps {
  isAtTop: boolean;
  show?: boolean;
}

export const useHeaderMenuStyles = createStyles((theme, { isAtTop, show }: useHeaderMenuStylesProps) => ({
  headerOuter: {
    background: isAtTop ? 'transparent' : `${theme.colors.peach}DD`,
    backdropFilter: isAtTop ? 'none' : 'blur(3px)',
    opacity: show ? 1 : 0,
    border: 'none',
    transition: 'box-shadow 200ms ease-out, background 200ms ease-out 100ms, transform 300ms ease-out, opacity 400ms ease-out, backdrop-filter 200ms ease-out',
    boxShadow: isAtTop ? 'none' : '0 4px 20px #00000016',
    transform: show ? 'translateY(0)' : 'translateY(-100%)',
  },

  headerMenuInner: {
    paddingInline: theme.other.inlinePadding,
    marginInline: 'min(60px, 3vw)',
  },

  headerMenu: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerMenuOptionsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 'min(2em, 1em + 2cqi)',
  },

  menuItem: {
    textTransform: 'uppercase',
    background: 'transparent',
    fontFamily: '"Zain", sans-serif',
    fontSize: '1.25rem',
    fontWeight: 600,
    margin: 0,
    color: theme.colors.offWhite,
    textDecoration: 'none',
    '&.active': {
      color: theme.colors.offWhiteDarker,
      fontWeight: 800,
    },  
  },
}));
