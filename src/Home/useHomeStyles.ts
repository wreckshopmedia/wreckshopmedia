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

    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: theme.shadows.xl,
    },
  },
  
  
  cardTitle: {
    // h4 from card top/front
    textTransform: 'uppercase',
    fontSize: '22cqi',
    fontWeight: 700,
    letterSpacing: '0.03em',
    '&[data-card-name="contact"]': {
      // idea do this stuff
      // fontSize: '27cqi',
    },
    
  },
}));
