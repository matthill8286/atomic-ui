function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { number, radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { styled } from "../../../styles/styled";
import { StorybookWrapper } from "../../../utils/StorybookWrapper";
import { Badge } from "./Badge";
var actionTypes = {
  Prominent: 'prominent',
  Secondary: 'secondary',
  Disabled: 'disabled'
};
var badges = [{
  id: 0,
  name: 'Featured'
}, {
  id: 1,
  name: 'Structured'
}, {
  id: 2,
  name: 'Sponsored'
}, {
  id: 3,
  name: 'Hot Hot Hot'
}, {
  id: 4,
  name: 'Last one',
  actionType: 'secondary'
}];
export var StyledLineMaxWidthContainer = styled.div.withConfig({
  displayName: "Badgestory__StyledLineMaxWidthContainer",
  componentId: "sc-1qzfvr6-0"
})(["background:lightgrey;padding-top:8px;padding-bottom:8px;"]);

var knobs = function knobs() {
  return {
    actionType: radios('Type', actionTypes, actionTypes.Prominent)
  };
};

storiesOf('Design System/Atoms/Badge', module).add('Default', function () {
  return React.createElement(StorybookWrapper, null, React.createElement(Badge, _extends({
    badges: badges.slice(0, 1)
  }, knobs())));
}).add('with two badges', function () {
  return React.createElement(StorybookWrapper, null, React.createElement(Badge, _extends({
    badges: badges.slice(0, 2)
  }, knobs())));
}).add('with two action types', function () {
  return React.createElement(StorybookWrapper, null, React.createElement(Badge, _extends({
    badges: badges.slice(3, 5)
  }, knobs())));
}).add('BadgeLine', function () {
  var maxWidth = number('Maximum width of container', 600);

  var knobs = function knobs() {
    return {
      actionType: radios('Type', actionTypes, actionTypes.Prominent)
    };
  };

  return React.createElement(StorybookWrapper, null, React.createElement(StyledLineMaxWidthContainer, {
    style: {
      maxWidth: maxWidth
    }
  }, React.createElement(Badge, _extends({
    badges: badges,
    isBadgeLine: true
  }, knobs()))));
});
//# sourceMappingURL=Badge.story.js.map