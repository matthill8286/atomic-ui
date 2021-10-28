import { styled, css } from "../../../styles";

var color = function color(x) {
  return function (_ref) {
    var theme = _ref.theme;
    return theme.color[x];
  };
};

var spacing = function spacing(x) {
  return function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.base[x];
  };
};

var innerShadowColor = function innerShadowColor(strColor) {
  return "inset 0px 0px 0px 1px ".concat(strColor);
};

var innerShadowFromTheme = function innerShadowFromTheme(x) {
  return function (_ref3) {
    var theme = _ref3.theme;
    return innerShadowColor(theme.color[x]);
  };
};

export var StyledButtonGroup = styled.div.withConfig({
  displayName: "ButtonGroupstyled__StyledButtonGroup",
  componentId: "sc-1p9j1bf-0"
})(["display:flex;width:100%;background-color:", ";button,[type='button']{border-radius:0;flex:1 1 auto;&:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px;}&:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;}}"], color('white'));
var StyledButton = styled.button.attrs({
  type: 'button'
}).withConfig({
  displayName: "ButtonGroupstyled__StyledButton",
  componentId: "sc-1p9j1bf-1"
})(["cursor:pointer;box-sizing:border-box;min-width:50px;padding:", ";border-width:1px;border-style:solid;border-color:", ";border-radius:", ";background-color:", ";transition-duration:0.15s;transition-timing-function:ease-in-out;transition-property:border-color,box-shadow;outline:none;&:hover:enabled,&:active:enabled{box-shadow:", ";border-color:", ";}&:disabled{cursor:not-allowed;}"], spacing('xs'), color('grey2'), spacing('xxs'), color('white'), innerShadowFromTheme('primary'), color('primary'));
export var BorderedButton = styled(StyledButton).withConfig({
  displayName: "ButtonGroupstyled__BorderedButton",
  componentId: "sc-1p9j1bf-2"
})(function (_ref4) {
  var selected = _ref4.selected,
      theme = _ref4.theme;
  return css(["", ""], Boolean(selected) && css(["border-color:", ";box-shadow:", ";"], theme.color.primary, innerShadowColor(theme.color.primary)));
});
//# sourceMappingURL=ButtonGroup.styled.js.map