// Saiyan Theme config
import {
  Body,
  Color,
  Dimension,
  Font,
  Footer,
  Header,
  HeadingTheme,
  HeroTheme,
  Polished,
  Theme,
  Transition,
} from '@/types/theme'
import { breakpoints, button, container, defaultSpacing, spacing } from './sc-vars-global'

const name = 'Saiyan'

const color: Color = {
  primary: '#00C8DC', // Buttons, Dividers, Secondary Button text
  secondary: '#164fa5',
  grey1: '#FAFAFA',
  grey2: '#E5E5E5', // Dropdown active / hover, // Borders
  grey3: '#CCCCCC',
  grey4: '#999999', // Body text
  grey5: '#666666', // Asset card provider, onboardinng button text, links, navigation text +  buttons
  grey6: '#333333', // Heading text, Asset card [ description, meta ]
  black: '#000000',
  white: '#FFFFFF',
  success: '#55e1a7',
  alert: '#f1a153',
  error: '#e24c4c',
  info: '#009fe3',
  selected: '#4bcade',
  textColor: '#999999',
  clear: 'transparent',
}

const body: Body = {
  background: color.grey1,
}

const polished: Polished = {
  inactive: 0.4,
  darken: 0.04,
}

const header: Header = {
  background: color.white,
  topBar: color.white,
  statusType: 'white',
  height: '80px',
  padding: 'xs xxxl',
}

const footer: Footer = {
  background: color.white,
  statusType: 'white',
  height: '80px',
  padding: 'xs xxxl',
}

const heading: HeadingTheme = {
  featured: {
    textTransform: 'none',
    fontPadding: '0',
    fontSize: '75px',
    lineHeight: {
      xl: '80px',
      md: '70px',
      xs: '58px',
    },
  },
}

const font: Font = {
  family: {
    default: '"Oswald", "Raleway", Arial, sans-serif',
    featured: '"SourceSansPro", "Oswald", Arial, sans-serif',
    meta: '"Oswald", "SourceSansPro", Arial, sans-serif',
  },
  spacing: {
    base: '0.4px',
    half: '0.2px',
  },
  size: {
    xxxs: '10px',
    xxs: '12px', // Asset Card Tag (competency), Asset Card Badge (Playlist)
    xs: '14px', //  Small body text, Asset card [  provider | meta ]
    sm: '16px', // Body text, header links
    md: '18px', // H5
    lg: '22px', // H4, Asset card description
    xl: '26px', // H3, Playlist Card description
    xxl: '30px', // H2,
    xxxl: '34px', // H1
    xxxxl: '40px',
    xxxxxl: '48px',
  },
  lineHeight: {
    xxxs: `16px`,
    xxs: `16px`,
    xs: `20px`,
    sm: `24px`,
    md: `28px`, // 24 -> 28
    lg: `32px`, // 28 -> 32
    xl: `40px`,
    xxl: `44px`,
    xxxl: `44px`,
    xxxxl: `44px`,
    xxxxxl: '48px',
  },
  weight: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  textTransform: 'initial',
  superscript: {
    size: {
      xxxs: '8px',
      xxs: '9px',
      xs: '11px',
      sm: '12px',
      md: '14px',
      lg: '15px',
      xl: '18px',
      xxl: '21px',
      xxxl: '24px',
      xxxxl: '36px',
      xxxxxl: '40px',
    },
    top: {
      xxxs: '-1px',
      xxs: '-1px',
      xs: '-2px',
      sm: '-3px',
      md: '-3px',
      lg: '-3px',
      xl: '-3px',
      xxl: '-4px',
      xxxl: '-7px',
      xxxxl: '-8px',
      xxxxxl: '-9px',
    },
  },
}

const hero: HeroTheme = {
  size: {
    sm: '300px',
    md: '350px',
    lg: '400px',
  },
  color: 'primary',
  intro: {
    font: {
      size: font.size.sm,
      height: '21px',
      weight: 'bold',
    },
    background: 'rgba(5, 5, 5, 0.4)',
    textTransform: 'uppercase',
  },
  copy: {
    font: {
      size: '55px',
      height: '55px',
      weight: 'bold',
    },
    background: 'rgba(0, 0, 0, 0.2)',
  },
}

const dimension: Dimension = {
  borderWidth: '1px',
  borderRadius0: '0',
  borderRadius1: '4px',
  borderRadius2: '8px',
  borderRadius3: '12px',
  borderRadius4: '16px',
  borderRadius5: '20px',
  borderRadius6: '25px',
  borderRadius7: '40px',
  borderRadius8: '60px',
  elevationLevel1:
    '0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.06), 0 1px 3px 0 rgba(0,0,0,0.10)',
  elevationLevel2:
    '0 3px 4px 0 rgba(0,0,0,0.07), 0 3px 3px -2px rgba(0,0,0,0.06), 0 1px 8px 0 rgba(0,0,0,0.10)',
  elevationLevel3:
    '0 8px 10px 1px rgba(0,0,0,0.07), 0 3px 14px 2px rgba(0,0,0,0.06), 0 5px 5px -3px rgba(0,0,0,0.10)',
  elevationLevel4:
    '0 24px 38px 3px rgba(0,0,0,0.07), 0 9px 46px 8px rgba(0,0,0,0.06), 0 11px 15px -7px rgba(0,0,0,0.10)',
}

const transition: Transition = {
  short: '0.15s',
  medium: '0.25s',
  long: '0.33s',
  defaultEasing: 'ease-in-out',
}

export const saiyanTheme: Theme = {
  name,
  button,
  breakpoints,
  color,
  body,
  container,
  header,
  footer,
  hero,
  heading,
  defaultSpacing,
  spacing,
  dimension,
  font,
  transition,
  polished,
}
