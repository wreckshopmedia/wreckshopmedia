import { Title, Text } from '@mantine/core';
import { motion, useSpring, useTransform, useMotionValue, MotionValue } from 'motion/react';
import { useWreckShopTitleStyles } from '.';
import { BLUE, YELLOW } from '../theme/theme';

export interface WreckShopTitleProps {
  wreckColor?: string;
  shopColor?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string;
  clipPath?: MotionValue<string>; 
}

export function WreckShopTitle(props: WreckShopTitleProps) {
  const { wreckColor = YELLOW, shopColor = BLUE, size = 'xl', clipPath: externalClip } = props;
  const { classes } = useWreckShopTitleStyles({ wreckColor, shopColor });

  // failover if not provided externally
  const progress = useMotionValue(0);
  const smooth = useSpring(progress, { stiffness: 120, damping: 25 });
  const internalClip = useTransform(smooth, [0, 1], ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']);

  const clipPath = externalClip ?? internalClip;

  function getFontSize(size: WreckShopTitleProps['size']) {
    switch (size) {
      case 'xxs':
        return 'clamp(14px, 2cqi, 18px)';
      case 'xs':
        return 'clamp(1rem, 3cqi, 1.5rem)';
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
    <div
      style={{
        display: 'inline-block',
        position: 'relative',
      }}
      // only trigger locally if no external control
      {...(!externalClip && {
        onMouseEnter: () => progress.set(1),
        onMouseLeave: () => progress.set(0),
      })}
    >
      {/* Background / dimmed layer */}
      <Title className={classes.textBase} order={1} fz={getFontSize(size)}>
        WRECK
        <Text className={classes.textBase} component="span">
          SHOP
        </Text>
      </Title>

      {/* Animated fill layer */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          clipPath,
          willChange: 'clip-path',
        }}
      >
        <Title className={classes.wreckText} order={1} fz={getFontSize(size)}>
          WRECK
          <Text className={classes.shopText} component="span">
            SHOP
          </Text>
        </Title>
      </motion.div>
    </div>
  );
}
