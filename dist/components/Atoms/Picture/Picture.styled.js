import { media } from "../../../styles/media";
import { css, styled } from "../../../styles/styled";

var disabledPicture = function disabledPicture(isDisabled) {
  if (isDisabled) {
    return css(["-ms-filter:grayscale(100%);filter:grayscale(100%);opacity:0.4;pointer-events:none;"]);
  }

  return '';
};

export var StyledPicture = styled.div.withConfig({
  displayName: "Picturestyled__StyledPicture",
  componentId: "et82gi-0"
})(["position:relative;display:flex;width:100%;max-width:100%;", ";", "{max-width:", ";}& img{", ";", ";", ";", ";", ";", "{max-width:100%;width:auto;height:auto;}}"], function (_ref) {
  var disabled = _ref.disabled;
  return disabledPicture(!!disabled);
}, media.ie11, function (_ref2) {
  var width = _ref2.width;
  return width ? "".concat(width) : '100%';
}, function (_ref3) {
  var rounded = _ref3.rounded,
      theme = _ref3.theme;
  return rounded ? "border-radius: ".concat(theme.dimension.borderRadius2, ";") : '';
}, function (_ref4) {
  var imageMaxHeight = _ref4.imageMaxHeight;
  return imageMaxHeight ? "max-height: ".concat(imageMaxHeight, ";") : '';
}, function (_ref5) {
  var imageMaxWidth = _ref5.imageMaxWidth;
  return imageMaxWidth ? "max-width: ".concat(imageMaxWidth, ";") : '';
}, function (_ref6) {
  var height = _ref6.height;
  return height ? "height: ".concat(height, ";") : '';
}, function (_ref7) {
  var objectFit = _ref7.objectFit;
  return objectFit ? "object-fit: ".concat(objectFit, ";") : '';
}, media.ie11);
//# sourceMappingURL=Picture.styled.js.map