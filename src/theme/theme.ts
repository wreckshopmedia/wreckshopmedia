import type { MantineThemeOverride } from '@mantine/core';
import chroma from 'chroma-js';

// ------------------------------------------------------------ //
// ------------------- EXPORTED GLOBAL VARS ------------------- //
// --------------- IF YOU UPDATE, UPDATE THESE! --------------- //
// ------------------------------------------------------------ //

export const EERIE_BLACK: string = '#222725';
export const YELLOW: string = '#F5E663';
export const BLUE: string = '#0E79B2';
export const PEACH: string = '#F68E5F';
export const OFF_WHITE: string = '#FAFAFF';

export type ThemeColors = 'eerieBlack' | 'yellow' | 'blue' | 'peach' | 'offWhite';
// todo do I need to add variations? Time will tell...

export const HEADER_HEIGHT =
  'clamp(70px, min(calc(calc(50px + 4cqi) + 10dvh), calc(55px + 7cqi)), 140px)';

// footer should be thicker on big screens and down to ab out 60px on small screens
export const FOOTER_HEIGHT =
  'clamp(50px, min(calc(calc(20px + 2cqi) + 5dvh), calc(20px + 4cqi)), 70px)';

// WIDTH BREAKPOINTS
export const BASE = 0;
export const XS = 500;
export const SM = 768;
export const MD = 991;
// ☝️ mantine | 👇 custom
export const LG = 1280;
export const XL = 1536;
export const XXL = 1920;

export const TITLE_TEXT_STYLES = {
  fontFamily: '"Lilita One", sans-serif',
  fontWeight: 700,
  letterSpacing: '0.05em',
  marginBlock: 0,
  lineHeight: '1em',
  textTransform: 'uppercase' as const,
  textWrap: 'balance' as const,
};

export const INLINE_PADDING = `
  max(10vw, calc(-1200px + 100vw) / 2);
    @media (max-width: ${MD}px) {
      padding-inline: 6vw;
    };
    @media (max-width: ${SM}px) {
      padding-inline: 4vw;
    };
  `;

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

export const theme: MantineThemeOverride = {
  globalStyles: (theme) => ({
    ':root': {
      scrollBehavior: 'smooth',
      colorScheme: 'light dark',
      '--zain': '"Zain", sans-serif', // paragraph text
      '--lilita-one': '"Lilita One", sans-serif', // alt heading???
      '--winky-sans': '"Winky Sans", sans-serif', // old headings!
    },

    body: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      background: theme.colors.peach,
      color: theme.colorScheme === 'dark' ? theme.colors.eerieBlack : theme.colors.offWhite,

      '& #root': {
        height: '100%',
        width: '100%',
      },
    },
  }),

  colors: {
    eerieBlack: [EERIE_BLACK],
    eerieBlackDark: [chroma(EERIE_BLACK).darken(0.5).hex()],
    eerieBlackDarker: [chroma(EERIE_BLACK).darken(1).hex()],
    eerieBlackDarkest: [chroma(EERIE_BLACK).darken(1.5).hex()],
    eerieBlackLight: [chroma(EERIE_BLACK).brighten(0.5).hex()],
    eerieBlackLighter: [chroma(EERIE_BLACK).brighten(1).hex()],
    eerieBlackLightest: [chroma(EERIE_BLACK).brighten(1.5).hex()],

    yellow: [YELLOW],
    yellowDark: [chroma(YELLOW).darken(0.5).hex()],
    yellowDarker: [chroma(YELLOW).darken(1).hex()],
    yellowDarkest: [chroma(YELLOW).darken(1.5).hex()],
    yellowLight: [chroma(YELLOW).brighten(0.5).hex()],
    yellowLighter: [chroma(YELLOW).brighten(1).hex()],
    yellowLightest: [chroma(YELLOW).brighten(1.5).hex()],

    blue: [BLUE],
    blueDark: [chroma(BLUE).darken(0.5).hex()],
    blueDarker: [chroma(BLUE).darken(1).hex()],
    blueDarkest: [chroma(BLUE).darken(1.5).hex()],
    blueLight: [chroma(BLUE).brighten(0.5).hex()],
    blueLighter: [chroma(BLUE).brighten(1).hex()],
    blueLightest: [chroma(BLUE).brighten(1.5).hex()],

    peach: [PEACH],
    peachDark: [chroma(PEACH).darken(0.5).hex()],
    peachDarker: [chroma(PEACH).darken(1).hex()],
    peachDarkest: [chroma(PEACH).darken(1.5).hex()],
    peachLight: [chroma(PEACH).brighten(0.5).hex()],
    peachLighter: [chroma(PEACH).brighten(1).hex()],
    peachLightest: [chroma(PEACH).brighten(1.5).hex()],

    offWhite: [OFF_WHITE],
    offWhiteDark: [chroma(OFF_WHITE).darken(0.5).hex()],
    offWhiteDarker: [chroma(OFF_WHITE).darken(1).hex()],
    offWhiteDarkest: [chroma(OFF_WHITE).darken(1.5).hex()],
    offWhiteLight: [chroma(OFF_WHITE).brighten(0.5).hex()],
    offWhiteLighter: [chroma(OFF_WHITE).brighten(1).hex()],
    offWhiteLightest: [chroma(OFF_WHITE).brighten(1.5).hex()],
  },

  headings: {
    fontFamily: '"Lilita One", sans-serif',
    sizes: {
      h1: { fontSize: '3rem', lineHeight: '1em', fontWeight: 700 },
      h2: { fontSize: '2.5rem', lineHeight: '1.1em', fontWeight: 600 },
      h3: { fontSize: '2rem', lineHeight: '1.2em', fontWeight: 600 },
      h4: { fontSize: '1.5rem', lineHeight: '1.25em', fontWeight: 500 },
      h5: { fontSize: '1.25rem', lineHeight: '1.3em', fontWeight: 500 },
      h6: { fontSize: '1rem', lineHeight: '1.35em', fontWeight: 400 },
    },
  },

  fontFamily: '"Zain", sans-serif',

  breakpoints: {
    base: `${BASE}px`,
    xs: `${XS}px`,
    sm: `${SM}px`,
    md: `${MD}px`,
    lg: `${LG}px`,
    xl: `${XL}px`,
    xxl: `${XXL}px`,
  },

  other: {
    inlinePadding: INLINE_PADDING,
    headerHeight: HEADER_HEIGHT,
    base: BASE,
    xs: XS,
    sm: SM,
    md: MD,
    lg: LG,
    xl: XL,
    xxl: XXL,

    // CUSTOM MEDIA QUERIES - use like: [theme.other.mq.tabletPortrait]
    mq: {
      customMax: (max: number) => `@media (max-width: ${max}px)`,
      customMin: (min: number) => `@media (min-width: ${min}px)`,
      megaMonitor: `@media (max-width: ${XL + 1}px)`,
      desktop: `@media (max-width: ${XL}px)`,
      tabletLandscape: `@media (max-width: ${MD}px)`,
      tabletPortrait: `@media (max-width: ${SM}px)`,
      mobile: `@media (max-width: ${XS}px)`,

      shortScreen: (max: number = 700) => `@media (max-height: ${max}px)`,
      tallScreen: (min: number = 900) => `@media (min-height: ${min}px)`,

      // ------- DEVICES - COMBINED W/H ------- //

      iPhone15Pro: `@media (max-width: 400px) and (max-height: 860px)`,
      iPhone15ProMax: `@media (max-width: 430px) and (max-height: 932px)`,
      iPadPortrait: `@media (max-width: 768px) and (max-height: 1024px)`,
      iPadLandscape: `@media (max-width: 1024px) and (max-height: 768px)`,

      // Combined width + height CUSTOM!
      combine: (maxW: number, maxH: number) =>
        `@media (max-width: ${maxW}px) and (max-height: ${maxH}px)`,

      portrait: `@media (orientation: portrait)`,
      landscape: `@media (orientation: landscape)`,
    },
  },

  focusRing: 'auto', // keyboard  nav only - no lingering rings on touch devices
  white: '#FFFFFF',
  black: '#000000',
};
