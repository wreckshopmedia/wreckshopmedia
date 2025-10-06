import { createStyles } from '@mantine/core';

interface useSkullLogoStylesProps {
  borderColor?: string;
}

export const useSkullLogoStyles = createStyles(
  (theme, { borderColor }: useSkullLogoStylesProps) => ({
    skullLogoSvg: {
      display: 'block',
      margin: 'auto',
      filter: borderColor
        ? `drop-shadow(-1px -1px 0 ${theme.colors[borderColor]}) drop-shadow(1px -1px 0 ${theme.colors[borderColor]}) drop-shadow(-1px 1px 0 ${theme.colors[borderColor]}) drop-shadow(1px 1px 0 ${theme.colors[borderColor]})`
        : 'none',
    },
  })
);
