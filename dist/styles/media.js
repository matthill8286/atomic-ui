import { breakpoints } from "./sc-vars-global";

var customMediaQuery = function customMediaQuery(breakpoint, isMaxWidth) {
  var widthPrefix = isMaxWidth ? 'max' : 'min';
  return "@media (".concat(widthPrefix, "-width: ").concat(breakpoint, "px)");
};

var xs = breakpoints.xs,
    sm = breakpoints.sm,
    md = breakpoints.md,
    lg = breakpoints.lg,
    xl = breakpoints.xl,
    xxl = breakpoints.xxl;
export var media = {
  xxl: customMediaQuery(xxl),
  xl: customMediaQuery(xl),
  lg: customMediaQuery(lg),
  md: customMediaQuery(md),
  sm: customMediaQuery(sm),
  xs: customMediaQuery(xs),
  maxXxl: customMediaQuery(xxl, true),
  maxXl: customMediaQuery(xl, true),
  maxLg: customMediaQuery(lg, true),
  maxMd: customMediaQuery(md, true),
  maxSm: customMediaQuery(sm, true),
  mobile: customMediaQuery(sm, true),
  tablet: customMediaQuery(sm),
  desktop: customMediaQuery(lg),
  ie11: " @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none)"
};
//# sourceMappingURL=media.js.map