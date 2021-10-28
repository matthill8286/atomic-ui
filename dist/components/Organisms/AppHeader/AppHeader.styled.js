import { Section } from "../../Atoms/Section";
import { FlexItem } from "../../Helper/FlexBox";
import { css, styled } from "../../../styles";
import { getBoxDimension } from "../../../styles/sc-shared-functions";
export var StyledSection = styled(Section).withConfig({
  displayName: "AppHeaderstyled__StyledSection",
  componentId: "sc-1phuonn-0"
})(["background:", ";height:", ";z-index:10;top:0;left:auto;right:0;position:fixed;"], function (_ref) {
  var theme = _ref.theme;
  return theme.header.topBar;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.header.height;
});
export var StyledHeaderWrapper = styled.div.withConfig({
  displayName: "AppHeaderstyled__StyledHeaderWrapper",
  componentId: "sc-1phuonn-1"
})(function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color,
      padding = _ref3.padding;
  return css(["", " box-shadow:", ";display:flex;flex-direction:row;z-index:15;"], padding ? "padding: ".concat(getBoxDimension(theme, padding) || 0, ";") : '', function (_ref4) {
    var theme = _ref4.theme;
    return theme.dimension.elevationLevel1;
  });
});
export var StyledLogo = styled.div.withConfig({
  displayName: "AppHeaderstyled__StyledLogo",
  componentId: "sc-1phuonn-2"
})(["display:flex;flex:1;justify-content:flex-start;"]);
export var StyledActionItems = styled.div.withConfig({
  displayName: "AppHeaderstyled__StyledActionItems",
  componentId: "sc-1phuonn-3"
})(["display:flex;flex-grow:2;justify-content:flex-end;"]);
export var StyledItemWrapper = styled(FlexItem).withConfig({
  displayName: "AppHeaderstyled__StyledItemWrapper",
  componentId: "sc-1phuonn-4"
})(["align-self:center;margin-left:", ";margin-right:", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.gap.narrow;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.gap.narrow;
});
//# sourceMappingURL=AppHeader.styled.js.map