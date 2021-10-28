import { padding } from "../../../styles/sc-shared-functions";
import { css, styled } from "../../../styles/styled";
var DefaultSize = '25px';
export var Icon = styled.div.withConfig({
  displayName: "Icon",
  componentId: "sc-1ate1r7-0"
})(function (_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      _ref$rotate = _ref.rotate,
      rotate = _ref$rotate === void 0 ? 0 : _ref$rotate,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'flex' : _ref$display,
      alignSelf = _ref.alignSelf,
      withBorder = _ref.withBorder;
  return css(["", ";", ";", ";", " svg{width:", ";height:", ";transform:rotate(", "deg);fill:", ";", ";}svg g,svg p{fill:", ";}"], display && "display: ".concat(display, ";"), padding, alignSelf && "align-self: ".concat(alignSelf, ";"), withBorder && "border: 2px solid ".concat(theme.color.grey2, ";\n        border-radius: 50%;\n        padding: ").concat(theme.spacing.base.xs, ";"), width ? getSizeInPx(width, theme.spacing.base) : DefaultSize, height ? getSizeInPx(height, theme.spacing.base) : DefaultSize, rotate, color ? theme.color[color] : 'currentColor', animate && css(["transition:transform 0.3s ease-in-out;"]), color ? theme.color[color] : 'currentColor');
});

var getSizeInPx = function getSizeInPx(size, themeSizes) {
  if (typeof size === 'number') {
    return "".concat(size, "px");
  } else {
    return themeSizes[size] || "".concat(DefaultSize, "px");
  }
};
//# sourceMappingURL=Icon.js.map