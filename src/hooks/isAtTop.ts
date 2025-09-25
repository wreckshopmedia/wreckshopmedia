import { useEffect, useState } from 'react';

/**
 * @function useIsAtTop
 * Custom hook to determine if the user has scrolled to the top of the page.
 * @param {number} offset - The scroll offset in pixels to consider as "top". Default is 20.
 * @returns {boolean} - Returns true if the user is at the top of the page, false otherwise.
 */
export function useIsAtTop(offset = 20) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return isAtTop;
}
