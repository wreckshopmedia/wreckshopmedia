import { Title, Text } from '@mantine/core';
import { useWreckShopTitleStyles } from '.';

export interface WreckShopTitleProps {
  wreckColor?: string;
  shopColor?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function WreckShopTitle(props: WreckShopTitleProps) {
  const { wreckColor, shopColor, size } = props;
  const { classes } = useWreckShopTitleStyles({ wreckColor, shopColor });

  // function to get font size
  function getFontSize(size: WreckShopTitleProps['size']) {
    switch (size) {
      case 'xs':
        return 'clamp(1rem, 4cqi, 1.5rem)';
      case 'sm':
        return 'clamp(1.5rem, 6cqi, 2rem)';
      case 'md':
        return 'clamp(2rem, 8cqi, 2.5rem)';
      case 'lg':
        return 'clamp(2.5rem, 10cqi, 3rem)';
      case 'xl':
        return 'clamp(3rem, 12cqi, 4rem)';
      default:
        return 'clamp(2rem, 14cqi, 2.5rem)'; // default to 'md'
    }
  }

  return (
    <Title className={classes.wreckText} order={1} fz={getFontSize(size)}>
      WRECK
      <Text className={classes.shopText} component="span">
        SHOP
      </Text>
    </Title>
  );
}
