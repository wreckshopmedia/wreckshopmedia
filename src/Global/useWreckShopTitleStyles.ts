import { createStyles } from '@mantine/core';
import type { WreckShopTitleProps } from '.';
import { TITLE_TEXT_STYLES } from '../theme/theme';

export const useWreckShopTitleStyles = createStyles(
  (theme, { wreckColor, shopColor }: WreckShopTitleProps) => ({
    wreckText: {
      ...TITLE_TEXT_STYLES, // UPDATE IN THEME FILE
      color: wreckColor || theme.colors.yellow,
    },

    shopText: {
      color: shopColor || theme.colors.blue,
      fontSize: 'inherit',
      fontWeight: 'inherit',
      fontFamily: 'inherit',
      lineHeight: 'inherit',
      textDecoration: 'inherit',
      textUnderlineOffset: 'inherit',
      textDecorationThickness: 'inherit',
      textDecorationLine: 'inherit',
      textTransform: 'inherit',
      fontStyle: 'inherit',
      letterSpacing: 'inherit',
    },
  })
);
