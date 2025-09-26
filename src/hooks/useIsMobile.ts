import { useMediaQuery } from '@mantine/hooks';
import { XS, SM } from '../theme/theme';

/**
 * @function useIsMobile
 * @description Returns true if the screen width is less than the small (sm) breakpoint via Mantine's useMediaQuery hook
 * Pulls theme object for sm breakpoint
 * @author Chris "Mo" Mochinski <mo@wreckshopmedia.com>
 * @version 2.0.0
 * @returns {boolean} useIsMobile
 */
export const useIsMobile = () => useMediaQuery(`(max-width: ${SM}px)`);

/**
 * @function useIsPhone
 * @description Returns true if the screen width is less than 500px via Mantine's useMediaQuery hook
 * Pulls theme object for xs breakpoint
 * @author Chris "Mo" Mochinski <mo@wreckshopmedia.com>
 * @version 2.0.0
 * @returns {boolean} useIsPhone
 */
export const useIsPhone = () => useMediaQuery(`(max-width: ${XS}px)`);
