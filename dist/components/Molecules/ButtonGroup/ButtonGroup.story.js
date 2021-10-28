import * as React from 'react';
import { withState } from '@dump247/storybook-state';
import { storiesOf } from '@storybook/react';
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../../Atoms/Button";
import { styled } from "../../../styles/styled";
var stories = storiesOf('Design System/Molecules/ButtonGroup', module);

var voidFn = function voidFn() {};

var StyledDivWithTopBorder = styled.div.withConfig({
  displayName: "ButtonGroupstory__StyledDivWithTopBorder",
  componentId: "d97zw2-0"
})(["padding-top:25px;position:relative;background-color:#fff;border-top:1px solid #000;&:after,&:before{top:-1px;left:7px;border:solid transparent;content:'';height:0;width:0;position:absolute;pointer-events:none;}&:after{border-color:rgba(136,183,213,0);border-top-color:#fff;border-width:8px;margin-left:-8px;}&:before{border-color:rgba(194,225,245,0);border-top-color:#000;border-width:9px;margin-left:-9px;}"]);
stories.add('With 2 Buttons', withState({
  value: '1'
}, function (store) {
  return React.createElement("div", {
    style: {
      padding: '20px'
    }
  }, React.createElement(ButtonGroup, null, React.createElement(Button, {
    actionType: "outlined",
    onClick: voidFn,
    size: "sm",
    type: "button"
  }, "Button 1"), React.createElement(Button, {
    actionType: "outlined",
    onClick: voidFn,
    size: "sm",
    type: "button"
  }, "Button 2")));
}));
stories.add('With 3 Buttons', withState({
  value: '1'
}, function (store) {
  return React.createElement("div", {
    style: {
      padding: '20px'
    }
  }, React.createElement(ButtonGroup, null, React.createElement(Button, {
    actionType: "outlined",
    onClick: voidFn,
    size: "sm",
    type: "button"
  }, "Button 1"), React.createElement(Button, {
    actionType: "outlined",
    onClick: voidFn,
    size: "sm",
    type: "button"
  }, "Button 2"), React.createElement(Button, {
    actionType: "outlined",
    onClick: voidFn,
    size: "sm",
    type: "button"
  }, "Button 3")), React.createElement("br", null), React.createElement(ButtonGroup, null, React.createElement(Button, {
    actionType: "secondary",
    onClick: voidFn,
    size: "sm",
    type: "button"
  }, "Button 1"), React.createElement(Button, {
    actionType: "secondary",
    onClick: voidFn,
    size: "sm",
    type: "button"
  }, "Button 2"), React.createElement(Button, {
    actionType: "secondary",
    onClick: voidFn,
    size: "sm",
    type: "button"
  }, "Button 3")), React.createElement("br", null), React.createElement(ButtonGroup, null, React.createElement(Button, {
    actionType: "prominent",
    onClick: voidFn,
    size: "sm",
    type: "button"
  }, "Button 1"), React.createElement(Button, {
    actionType: "prominent",
    onClick: voidFn,
    size: "sm",
    type: "button"
  }, "Button 2"), React.createElement(Button, {
    actionType: "prominent",
    onClick: voidFn,
    size: "sm",
    type: "button"
  }, "Button 3")));
}));
//# sourceMappingURL=ButtonGroup.story.js.map