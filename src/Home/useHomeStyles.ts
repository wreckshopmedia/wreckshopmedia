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
    background: `${theme.colors.eerieBlack}10`,
    width: '20%',
    flexBasis: '20%',
    minWidth: '170px',
    aspectRatio: '4 / 5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 'min(1em, 2cqi)',

    h3: {
      fontFamily: '"Winky Sans", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      marginBlock: 0,
      lineHeight: '1em',
      color: theme.colors.offWhite,
    },
    h4: {
      fontFamily: '"Zain", sans-serif',
      fontWeight: 400,
      fontSize: '1.25rem',
      marginBlock: 0,
      lineHeight: '1em',
      color: theme.colors.offWhite,
    },
  },
}));
