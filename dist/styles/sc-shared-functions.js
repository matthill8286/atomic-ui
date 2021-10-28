import { media } from "./";
export var getBoxDimension = function getBoxDimension(theme) {
  var boxDimensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (boxDimensions && boxDimensions.split) {
    var result = boxDimensions.split(' ').map(function (m) {
      return theme.spacing.base[m] || m;
    });

    if (result.length) {
      return result.join(' ');
    }
  }

  return boxDimensions;
};
export var margin = function margin(_ref) {
  var theme = _ref.theme,
      margin = _ref.margin;
  if (!margin) return;
  return handleBoxDimensions({
    theme: theme,
    dimensions: margin,
    propertyName: 'margin'
  });
};
export var padding = function padding(_ref2) {
  var theme = _ref2.theme,
      padding = _ref2.padding;
  if (!padding) return;
  return handleBoxDimensions({
    theme: theme,
    dimensions: padding,
    propertyName: 'padding'
  });
};
export var handleBoxDimensions = function handleBoxDimensions(props) {
  var theme = props.theme,
      dimensions = props.dimensions,
      propertyName = props.propertyName;
  var boxDimensionsIsString = typeof dimensions === 'string';

  if (boxDimensionsIsString) {
    return "".concat(propertyName, ": ").concat(getBoxDimensionStrings(theme, dimensions), ";");
  }

  return getBoxDimensionResponsiveObjects(theme, dimensions, propertyName);
};
export var getBoxDimensionStrings = function getBoxDimensionStrings(theme) {
  var dimensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (dimensions.split) {
    var result = dimensions.split(' ').map(function (d) {
      return theme.spacing.base[d] || d;
    });

    if (result.length) {
      return result.join(' ');
    }
  }
};
export var getBoxDimensionResponsiveObjects = function getBoxDimensionResponsiveObjects(theme, boxDimensions, propertyName) {
  var mobileStyle = "".concat(propertyName, ": ").concat(getBoxDimensionStrings(theme, boxDimensions.mobile), ";");
  var tabletStyle = "".concat(media.tablet, "{").concat(propertyName, ": ").concat(getBoxDimensionStrings(theme, boxDimensions.tablet), ";}");
  var desktopStyle = " ".concat(media.desktop, "{").concat(propertyName, ": ").concat(getBoxDimensionStrings(theme, boxDimensions.desktop), ";}");
  var mobile = (boxDimensions === null || boxDimensions === void 0 ? void 0 : boxDimensions.mobile) && mobileStyle;
  var tablet = (boxDimensions === null || boxDimensions === void 0 ? void 0 : boxDimensions.tablet) && tabletStyle;
  var desktop = (boxDimensions === null || boxDimensions === void 0 ? void 0 : boxDimensions.desktop) && desktopStyle;
  return [mobile, tablet, desktop].filter(function (style) {
    return !!style;
  }).join('');
};
export var getSizeInPx = function getSizeInPx(size, themeSizes) {
  if (typeof size === 'number') {
    return "".concat(size, "px");
  } else {
    return themeSizes[size] || themeSizes['sm'];
  }
};
//# sourceMappingURL=sc-shared-functions.js.map