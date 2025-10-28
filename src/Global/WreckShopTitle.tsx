import { Title, Text } from '@mantine/core';
import { useWreckShopTitleStyles } from '.';
import { BLUE, YELLOW } from '../theme/theme';

export interface WreckShopTitleProps {
  wreckColor?: string;
  shopColor?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string;
}

export function WreckShopTitle(props: WreckShopTitleProps) {
  const { wreckColor = YELLOW, shopColor = BLUE, size = 'xl' } = props;
  const { classes } = useWreckShopTitleStyles({ wreckColor, shopColor });

  function getFontSize(size: WreckShopTitleProps['size']) {
    switch (size) {
      case 'xxs':
        return 'clamp(14px, 2cqi, 18px)';
      case 'xs':
        return 'clamp(1rem,  3cqi, 1.5rem)';
      case 'sm':
        return 'clamp(1.5rem, 4cqi, 2rem)';
      case 'md':
        return 'clamp(2rem, 5cqi, 2.5rem)';
      case 'lg':
        return 'clamp(2.5rem, 6cqi, 3rem)';
      case 'xl':
        return 'clamp(3rem, 7cqi, 4rem)';
      case 'xxl':
        return 'clamp(3.5rem, 8cqi, 4.5rem)';
      default:
        return size;
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
