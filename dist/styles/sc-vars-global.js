var defaultSpacing = 8;
var breakpoints = {
  xs: 320,
  sm: 512,
  md: 752,
  lg: 1008,
  xl: 1232,
  xxl: 1472,
  xxxl: 10000
};
var button = {
  size: {
    sm: "".concat(5 * defaultSpacing, "px"),
    md: "".concat(6 * defaultSpacing, "px"),
    lg: "".concat(7 * defaultSpacing, "px")
  },
  isRound: true
};
var container = {
  xs: breakpoints.sm,
  sm: breakpoints.sm,
  md: breakpoints.sm,
  lg: breakpoints.md,
  xl: breakpoints.lg,
  xxl: breakpoints.xl,
  xxxl: breakpoints.xxl,
  padding: '20px'
};
var spacing = {
  base: {
    xxs: "".concat(0.5 * defaultSpacing, "px"),
    xs: "".concat(defaultSpacing, "px"),
    sm: "".concat(2 * defaultSpacing, "px"),
    md: "".concat(3 * defaultSpacing, "px"),
    lg: "".concat(4 * defaultSpacing, "px"),
    xl: "".concat(5 * defaultSpacing, "px"),
    xxl: "".concat(6 * defaultSpacing, "px"),
    xxxl: "".concat(7 * defaultSpacing, "px"),
    xxxxl: "".concat(8 * defaultSpacing, "px"),
    xxxxxl: "".concat(9 * defaultSpacing, "px")
  },
  baseMobile: {
    xxs: "".concat(0.5 * defaultSpacing, "px"),
    xs: "".concat(defaultSpacing, "px"),
    sm: "".concat(2 * defaultSpacing, "px"),
    md: "".concat(2 * defaultSpacing, "px"),
    lg: "".concat(3 * defaultSpacing, "px"),
    xl: "".concat(4 * defaultSpacing, "px"),
    xxl: "".concat(4 * defaultSpacing, "px"),
    xxxl: "".concat(5 * defaultSpacing, "px"),
    xxxxl: "".concat(6 * defaultSpacing, "px"),
    xxxxxl: "".concat(7 * defaultSpacing, "px")
  },
  gap: {
    narrow: "".concat(defaultSpacing, "px"),
    default: "".concat(2 * defaultSpacing, "px"),
    wide: "".concat(2.5 * defaultSpacing, "px"),
    extraWide: "".concat(4 * defaultSpacing, "px")
  }
};
export { breakpoints, container, spacing, defaultSpacing, button };
//# sourceMappingURL=sc-vars-global.js.map