import { createStyles } from '@mantine/styles';

export const useHomeStyles = createStyles((theme) => ({
  homeOuter: {
    height: '100%',
    overflow: 'hidden',
  },

  homeCardsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'min(1.25rem, 4cqi)',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    paddingBlock: 'min(2em, 1em + 2cqi)',
    backgroundColor: theme.colors.offWhiteLightest,
  },

  homeCard: {
    containerType: 'inline-size',
    background: `color-mix(in srgb, ${theme.colors.eerieBlack}80 30%, ${theme.colors.peach} 70%)`,
    color: theme.colors.offWhite,
    border: 'none',
    width: '20%',
    flexBasis: '20%',
    minWidth: '170px',
    maxWidth: '200px',
    aspectRatio: '4 / 5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 'min(1em, 2cqi)',
    cursor: 'pointer',
    transformOrigin: 'center',
    transition: 'transform 150ms ease, box-shadow 150ms ease, background 150ms ease',

    h4: {
      textTransform: 'capitalize',
      fontSize: '19cqi',
      fontWeight: 600,
    },
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: theme.shadows.xl,
    },
  },
}));
