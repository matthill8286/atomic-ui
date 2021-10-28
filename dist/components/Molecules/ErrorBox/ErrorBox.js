import React from 'react';
import { Button } from "../../Atoms/Button";
import { Card } from "../../Atoms/Card";
import { Icon } from "../../Atoms/Icon";
import { FlexBox } from "../../Helper/FlexBox";
import { FlexItem } from "../../Helper/FlexBox";
import { BoxHeading, BoxSubtitle, InfoHost } from "./ErrorBox.styled";
import { IconClearCircleOutlined } from '@excelwithbusiness/webmobile-svg-library';
export var ErrorBox = function ErrorBox(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      buttonLabel = _ref.buttonLabel,
      _onClick = _ref.onClick,
      isLoading = _ref.isLoading;
  return React.createElement(Card, {
    elevation: 0,
    overflow: "hidden",
    padding: "md",
    shape: "rounded-small",
    surface: "white"
  }, React.createElement(FlexBox, null, React.createElement(FlexItem, null, React.createElement(Icon, {
    color: "grey6"
  }, React.createElement(IconClearCircleOutlined, null))), React.createElement(FlexItem, null, React.createElement(InfoHost, null, React.createElement(BoxHeading, {
    bold: true,
    color: "grey6",
    fontFamily: "default",
    margin: "",
    scale: "level-4",
    tag: "h1"
  }, title), React.createElement(BoxSubtitle, null, subtitle), React.createElement(Button, {
    onClick: function onClick(e) {
      return _onClick ? _onClick(e) : null;
    },
    isLoading: isLoading,
    actionType: "primary"
  }, buttonLabel)))));
};
ErrorBox.displayName = 'ErrorBox';
//# sourceMappingURL=ErrorBox.js.map