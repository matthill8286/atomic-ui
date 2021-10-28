import { media } from "../../../../styles/media";
import { getBoxDimension } from "../../../../styles/sc-shared-functions";
import { css, styled } from "../../../../styles/styled";
import { FILTERED } from "../../../../styles/themes";

var getLineHeight = function getLineHeight(theme, fontSize, lineHeight) {
  var lh = lineHeight ? lineHeight : fontSize;
  return theme.font.lineHeight[lh] || theme.font.lineHeight.sm;
};

var getfontSize = function getfontSize(theme, fontSize) {
  return fontSize && theme.font.size[fontSize] || fontSize || theme.font.size.sm;
};

var superscript = function superscript(theme, fontSize) {
  if (fontSize && typeof fontSize === 'string') {
    return css(["font-size:", ";top:", ";"], fontSize && theme.font.superscript.size[fontSize] || theme.font.superscript.size.sm, fontSize && theme.font.superscript.top[fontSize] || theme.font.superscript.top.sm);
  } else {
    if (fontSize && fontSize !== null && fontSize !== void 0 && fontSize.mobile) {
      return css(["font-size:", ";top:", ";"], fontSize && theme.font.superscript.size[fontSize.mobile] || theme.font.superscript.size.sm, fontSize && theme.font.superscript.top[fontSize.mobile] || theme.font.superscript.top.sm);
    }

    if (fontSize && fontSize !== null && fontSize !== void 0 && fontSize.tablet) {
      return css(["", "{font-size:", ";top:", ";}"], media.md, fontSize && theme.font.superscript.size[fontSize.tablet] || theme.font.superscript.size.sm, fontSize && theme.font.superscript.top[fontSize.tablet] || theme.font.superscript.top.sm);
    }

    if (fontSize && fontSize !== null && fontSize !== void 0 && fontSize.desktop) {
      return css(["", "{font-size:", ";top:", ";}"], media.lg, fontSize && theme.font.superscript.size[fontSize.desktop] || theme.font.superscript.size.sm, fontSize && theme.font.superscript.top[fontSize.desktop] || theme.font.superscript.top.sm);
    }
  }
};

var ul = function ul(_ref) {
  var theme = _ref.theme;
  return css(["list-style-type:disc;padding-left:", ";& li{list-style-type:disc;}"], theme.spacing.base.lg);
};

var ol = function ol(_ref2) {
  var theme = _ref2.theme;
  return css(["list-style-type:decimal;padding-left:", ";& li{list-style-type:decimal;}"], theme.spacing.base.lg);
};

export var StyledInfoTypo = styled.div.withConfig({
  displayName: "Typostyled__StyledInfoTypo",
  componentId: "sc-11xgqbn-0"
})(function (_ref3) {
  var theme = _ref3.theme,
      tag = _ref3.tag,
      display = _ref3.display,
      background = _ref3.background,
      borderRadius = _ref3.borderRadius,
      color = _ref3.color,
      fontSize = _ref3.fontSize,
      lineHeight = _ref3.lineHeight,
      weight = _ref3.weight,
      fontFamily = _ref3.fontFamily,
      limitLines = _ref3.limitLines,
      underline = _ref3.underline,
      spacing = _ref3.spacing,
      margin = _ref3.margin,
      padding = _ref3.padding,
      textAlign = _ref3.textAlign,
      toUpperCase = _ref3.toUpperCase,
      showCursor = _ref3.showCursor;
  return css(["", " ", " ", " font-size:", ";line-height:", ";font-family:", ";font-weight:", ";letter-spacing:", ";", " ", ";", ";", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], margin ? "margin: ".concat(getBoxDimension(theme, margin) || 0, ";") : '', padding ? "padding: ".concat(getBoxDimension(theme, padding) || 0, ";") : '', color ? "color: ".concat(color && theme.color[color] || theme.color.grey4, ";") : '', fontSize && (typeof fontSize === 'string' ? getfontSize(theme, fontSize) : getfontSize(theme, fontSize.mobile)), fontSize && (typeof fontSize === 'string' ? getLineHeight(theme, fontSize, lineHeight) : getLineHeight(theme, fontSize.mobile, lineHeight)), fontFamily && theme.font.family[fontFamily] || theme.font.family.default, weight && theme.font.weight[weight] || theme.font.weight.regular, spacing ? theme.font.spacing[spacing] : 'normal', toUpperCase && "text-transform: uppercase;", textAlign ? "text-align: ".concat(textAlign) : '', showCursor ? "cursor: pointer" : '', display ? "display: ".concat(display, ";") : '', underline ? "text-decoration: underline;" : '', background ? "background: ".concat(theme.color[background] || background, ";") : '', borderRadius ? "border-radius: ".concat(theme.dimension[borderRadius] || '0', ";") : '', tag === 'sup' && superscript(theme, fontSize), tag === 'ul' && ul, tag === 'ol' && ol, limitLines && limitLines > 0 ? limitLines === 1 ? css(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", ""], fontFamily === 'featured' && theme.name === FILTERED && "padding-left: 2px;") : css(["white-space:normal;overflow:hidden;", " max-height:calc(", " * ", ");-webkit-line-clamp:", ";display:-webkit-box;-webkit-box-orient:vertical;"], fontFamily === 'featured' && theme.name === FILTERED && "padding-left: 2px;", getLineHeight(theme, fontSize, lineHeight), limitLines, limitLines) : '', (fontSize === null || fontSize === void 0 ? void 0 : fontSize.tablet) && css(["", "{font-size:", ";line-height:", ";}"], media.md, getfontSize(theme, fontSize.tablet), getLineHeight(theme, fontSize.tablet, lineHeight)), (fontSize === null || fontSize === void 0 ? void 0 : fontSize.desktop) && css(["", "{font-size:", ";line-height:", ";}"], media.lg, getfontSize(theme, fontSize.desktop), getLineHeight(theme, fontSize.desktop, lineHeight)));
});
//# sourceMappingURL=Typo.styled.js.map