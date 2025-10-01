import { createStyles } from '@mantine/core';

interface useSkullLogoStylesProps {
  whiteBorder?: boolean;
}

export const useSkullLogoStyles = createStyles(
  (theme, { whiteBorder = false }: useSkullLogoStylesProps) => ({
    skullLogoSvg: {
      display: 'block',
      margin: 'auto',
      filter: whiteBorder
        ? `drop-shadow(-1px -1px 0 ${theme.colors.offWhite}) drop-shadow(1px -1px 0 ${theme.colors.offWhite}) drop-shadow(-1px 1px 0 ${theme.colors.offWhite}) drop-shadow(1px 1px 0 ${theme.colors.offWhite})`
        : 'none',
    },
  })
);
