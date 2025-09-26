import { createStyles } from '@mantine/core';
import type { WreckShopTitleProps } from '.';

export const useWreckShopTitleStyles = createStyles((theme, {
  wreckColor, shopColor 
}: WreckShopTitleProps) => ({
  wreckText: {
    color: wreckColor || theme.colors.yellow,
    letterSpacing: '0.15em',
    marginBlock: 0,
    fontFamily: '"Winky Sans", sans-serif',
    lineHeight: '1em',
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
}));
