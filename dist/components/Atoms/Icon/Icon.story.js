import { storiesOf } from '@storybook/react';
import React from 'react';
import { FlexBox } from "../../Helper/FlexBox";
import { IconArrowRightCircle, IconArticle, IconBookmark, IconClose, IconCompleteChecked, IconDone, IconUseful, SocialFacebook, StyleguideArrowRightCircle } from '@excelwithbusiness/webmobile-svg-library';
import { Icon } from "./Icon";
import { Spacer } from "../Spacer";
import Readme from "./Icon.readme.md";
import { IconButton } from "../Button";
storiesOf('Design System/Atoms/Icon', module).add('Icons', function () {
  return React.createElement(React.Fragment, null, React.createElement(Icon, {
    color: 'primary'
  }, React.createElement(IconArticle, null)), React.createElement(Spacer, {
    size: 'xl'
  }), React.createElement(Icon, {
    rotate: 90
  }, React.createElement(IconCompleteChecked, null)), React.createElement(Spacer, {
    size: 'xl'
  }), React.createElement(Icon, {
    height: "md",
    width: "md"
  }, React.createElement(IconBookmark, null)), React.createElement(Spacer, {
    size: 'xl'
  }), React.createElement(Icon, {
    height: "sm",
    width: "sm"
  }, React.createElement(IconClose, null)), React.createElement(Spacer, {
    size: 'xl'
  }), React.createElement(Icon, {
    height: "lg",
    width: "lg",
    color: 'secondary'
  }, React.createElement(IconUseful, {
    height: "lg",
    width: "lg"
  })), React.createElement(Spacer, {
    size: 'xl'
  }), React.createElement(Icon, {
    height: 'md',
    width: 'md',
    color: 'primary'
  }, React.createElement(StyleguideArrowRightCircle, null)));
}, {
  info: Readme
}).add('Rotated icon', function () {
  return React.createElement(Icon, {
    height: 'md',
    width: 'md',
    rotate: 90
  }, React.createElement(IconArrowRightCircle, {
    fill: 'primary'
  }));
}, {
  info: Readme
}).add('With border', function () {
  return React.createElement(FlexBox, null, React.createElement(Icon, {
    withBorder: true,
    width: 25,
    height: 25,
    color: "primary"
  }, React.createElement(SocialFacebook, null)));
}).add('Large primary icon button', function () {
  return React.createElement(FlexBox, null, React.createElement(IconButton, {
    round: true,
    width: 65,
    height: 65,
    actionType: "primary"
  }, React.createElement(IconDone, {
    fill: 'white'
  })));
});
//# sourceMappingURL=Icon.story.js.map