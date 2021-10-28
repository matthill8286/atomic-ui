import { useContext } from 'react';
import { alternateTheme, saiyanTheme } from "../styles";
import { ThemeContext } from "../styles/styled";
export var isSaiyanTheme = function isSaiyanTheme() {
  var _useContext = useContext(ThemeContext),
      name = _useContext.name;

  return name === saiyanTheme.name;
};
export var isAlternateTheme = function isAlternateTheme() {
  var _useContext2 = useContext(ThemeContext),
      name = _useContext2.name;

  return name === alternateTheme.name;
};
export var getColor = function getColor(changeColorProps) {
  var color = changeColorProps.color;
  var theme = changeColorProps.theme;
  var colorProp;

  if (color === 'primary') {
    if (isSaiyanTheme()) {
      colorProp = color;
    } else {
      colorProp = 'grey6';
    }
  } else {
    colorProp = color;
  }

  return colorProp ? theme ? theme.color[colorProp] : colorProp : changeColorProps.defaultColor;
};
export var useTheme = function useTheme() {
  return useContext(ThemeContext);
};
export var containsHtmlTags = /<.+?>/g;
//# sourceMappingURL=helper.js.map