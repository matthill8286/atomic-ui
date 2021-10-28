import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useContext } from 'react';
import { styled, ThemeContext } from "../../../styles/styled";
import { Logo } from "./Logo";
var StyledBackground = styled.div.withConfig({
  displayName: "Logostory__StyledBackground",
  componentId: "sc-5olx3j-0"
})(["padding:1em;background-color:", ";"], function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  var colors = {
    white: theme.color.white
  };
  return color ? colors[color] : theme.header.background;
});

var LogoStory = function LogoStory() {
  var _useContext = useContext(ThemeContext),
      name = _useContext.name;

  if (name === 'Saiyan') {
    return React.createElement(React.Fragment, null, React.createElement(StyledBackground, {
      color: "white"
    }, React.createElement(Logo, {
      white: boolean('Variant: white', false)
    })));
  }

  return React.createElement(StyledBackground, {
    color: "white"
  }, React.createElement(Logo, {
    white: boolean('Variant: white', false),
    uni: boolean('Whole logo in one color', false)
  }));
};

storiesOf('Design System/Atoms/Logo', module).add('Saiyan', function () {
  return React.createElement(LogoStory, null);
});
//# sourceMappingURL=Logo.story.js.map