import { createStyles } from '@mantine/core';

export const useColorCheckerStyles = createStyles((theme) => ({
  colorCheckerOuter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  blackBox: {
    '&:first-of-type': {
      background: theme.colors.eerieBlackLightest,
    },
    '&:nth-of-type(2)': {
      background: theme.colors.eerieBlackLighter,
    },
    '&:nth-of-type(3)': {
      background: theme.colors.eerieBlackLight,
    },
    '&:nth-of-type(4)': {
      background: theme.colors.eerieBlack,
    },
    '&:nth-of-type(5)': {
      background: theme.colors.eerieBlackDark,
    },
    '&:nth-of-type(6)': {
      background: theme.colors.eerieBlackDarker,
    },
    '&:nth-of-type(7)': {
      background: theme.colors.eerieBlackDarkest,
    },
  },

  blueBox: {
    '&:first-of-type': {
      background: theme.colors.blueLightest,
    },
    '&:nth-of-type(2)': {
      background: theme.colors.blueLighter,
    },
    '&:nth-of-type(3)': {
      background: theme.colors.blueLight,
    },
    '&:nth-of-type(4)': {
      background: theme.colors.blue,
    },
    '&:nth-of-type(5)': {
      background: theme.colors.blueDark,
    },
    '&:nth-of-type(6)': {
      background: theme.colors.blueDarker,
    },
    '&:nth-of-type(7)': {
      background: theme.colors.blueDarkest,
    },
  },

  yellowBox: {
    '&:first-of-type': {
      background: theme.colors.yellowLightest,
    },
    '&:nth-of-type(2)': {
      background: theme.colors.yellowLighter,
    },
    '&:nth-of-type(3)': {
      background: theme.colors.yellowLight,
    },
    '&:nth-of-type(4)': {
      background: theme.colors.yellow,
    },
    '&:nth-of-type(5)': {
      background: theme.colors.yellowDark,
    },
    '&:nth-of-type(6)': {
      background: theme.colors.yellowDarker,
    },
    '&:nth-of-type(7)': {
      background: theme.colors.yellowDarkest,
    },
  },

  peachBox: {
    '&:first-of-type': {
      background: theme.colors.peachLightest,
    },
    '&:nth-of-type(2)': {
      background: theme.colors.peachLighter,
    },
    '&:nth-of-type(3)': {
      background: theme.colors.peachLight,
    },
    '&:nth-of-type(4)': {
      background: theme.colors.peach,
    },
    '&:nth-of-type(5)': {
      background: theme.colors.peachDark,
    },
    '&:nth-of-type(6)': {
      background: theme.colors.peachDarker,
    },
    '&:nth-of-type(7)': {
      background: theme.colors.peachDarkest,
    },
  },

  whiteBox: {
    '&:first-of-type': {
      background: theme.colors.offWhiteLightest,
    },
    '&:nth-of-type(2)': {
      background: theme.colors.offWhiteLighter,
    },
    '&:nth-of-type(3)': {
      background: theme.colors.offWhiteLight,
    },
    '&:nth-of-type(4)': {
      background: theme.colors.offWhite,
    },
    '&:nth-of-type(5)': {
      background: theme.colors.offWhiteDark,
    },
    '&:nth-of-type(6)': {
      background: theme.colors.offWhiteDarker,
    },
    '&:nth-of-type(7)': {
      background: theme.colors.offWhiteDarkest,
    },
  },
}));
