function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { breakpoints, button as buttonGlobal, container, defaultSpacing, spacing } from "./sc-vars-global";
var name = 'Alternate';
var color = {
  primary: '#EF7C00',
  secondary: '#121723',
  grey1: '#F2F3F4',
  grey2: '#C9CCCD',
  grey3: '#8B8F91',
  grey4: '#454647',
  grey5: '#242424',
  grey6: '#666666',
  black: '#000',
  white: '#fff',
  success: '#30885f',
  alert: '#ffbe00',
  error: '#b43135',
  info: '#5741d9',
  selected: '#eb680b',
  textColor: '#454647',
  clear: 'transparent'
};
var body = {
  background: color.grey1
};
var polished = {
  inactive: 0.4,
  darken: 0.04
};

var button = _objectSpread(_objectSpread({}, buttonGlobal), {}, {
  isRound: false
});

var header = {
  background: color.grey5,
  topBar: color.grey4,
  statusType: 'white',
  height: '80px',
  padding: 'xs xxxl'
};
var footer = {
  background: color.grey5,
  statusType: 'white',
  height: '80px',
  padding: 'xs xxxl'
};
var heading = {
  featured: {
    textTransform: 'uppercase',
    fontPadding: '8px',
    fontSize: '75px',
    lineHeight: {
      xl: '48px',
      md: '40px',
      xs: '32px'
    }
  }
};
var font = {
  family: {
    default: 'Oswald, Arial, sans-serif',
    featured: 'Oswald, Arial, sans-serif',
    meta: 'Oswald, Arial, sans-serif'
  },
  spacing: {
    base: '0.4px',
    half: '0.2px'
  },
  size: {
    xxxs: '10px',
    xxs: '12px',
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    xxl: '28px',
    xxxl: '32px',
    xxxxl: '40px',
    xxxxxl: '48px'
  },
  lineHeight: {
    xxxs: '16px',
    xxs: '16px',
    xs: '20px',
    sm: '24px',
    md: '28px',
    lg: '32px',
    xl: '40px',
    xxl: '48px',
    xxxl: '48px',
    xxxxl: '48px',
    xxxxxl: '48px'
  },
  weight: {
    regular: 400,
    semibold: 600,
    bold: 700
  },
  textTransform: 'uppercase',
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
      xxxxl: '30px',
      xxxxxl: '32px'
    },
    top: {
      xxxs: '0px',
      xxs: '-1px',
      xs: '-2px',
      sm: '-3px',
      md: '-3px',
      lg: '-3px',
      xl: '-4px',
      xxl: '-4px',
      xxxl: '-6px',
      xxxxl: '-7px',
      xxxxxl: '-8px'
    }
  }
};
var hero = {
  size: {
    sm: '300px',
    md: '350px',
    lg: '400px'
  },
  color: 'white',
  intro: {
    font: {
      size: font.size.sm,
      height: '21px',
      weight: 'regular'
    },
    textTransform: 'uppercase',
    background: 'rgba(5, 5, 5, 0.8)'
  },
  copy: {
    font: {
      size: '35px',
      height: '50px',
      weight: 'bold'
    },
    background: 'rgba(5, 5, 5, 0.1)'
  }
};
var dimension = {
  borderWidth: '1px',
  borderRadius0: '0',
  borderRadius1: '0',
  borderRadius2: '0',
  borderRadius3: '0',
  borderRadius4: '0',
  borderRadius5: '0',
  borderRadius6: '0',
  borderRadius7: '0',
  borderRadius8: '0',
  elevationLevel1: '0 1px 1px 0 rgba(0,0,0,0.10)',
  elevationLevel2: '0 3px 4px 0 rgba(0,0,0,0.07), 0 3px 3px -2px rgba(0,0,0,0.06), 0 1px 8px 0 rgba(0,0,0,0.10)',
  elevationLevel3: '0 8px 10px 1px rgba(0,0,0,0.07), 0 3px 14px 2px rgba(0,0,0,0.06), 0 5px 5px -3px rgba(0,0,0,0.10)',
  elevationLevel4: '0 24px 38px 3px rgba(0,0,0,0.07), 0 9px 46px 8px rgba(0,0,0,0.06), 0 11px 15px -7px rgba(0,0,0,0.10)'
};
var transition = {
  short: '0.15s',
  medium: '0.25s',
  long: '0.33s',
  defaultEasing: 'ease-in-out'
};
export var alternateTheme = {
  name: name,
  button: button,
  breakpoints: breakpoints,
  color: color,
  body: body,
  container: container,
  header: header,
  footer: footer,
  hero: hero,
  heading: heading,
  defaultSpacing: defaultSpacing,
  spacing: spacing,
  dimension: dimension,
  font: font,
  transition: transition,
  polished: polished
};
//# sourceMappingURL=sc-vars-alternate.js.map