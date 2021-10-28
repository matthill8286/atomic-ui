import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { styled } from "../../../styles/styled";
import { Spacer } from "../Spacer";
import info from "./Skeleton.readme.md";
import { SkeletonBlockItem } from "./SkeletonBlockItem";
import { SkeletonInlineItem } from "./SkeletonInlineItem";
var exampleHeadline = 'Lorem Ipsum';
var exampleSubline = 'Some are shunning pleasure to work at a home';
var StyledExampleWrapper = styled.div.withConfig({
  displayName: "Skeletonstory__StyledExampleWrapper",
  componentId: "sc-1fd94rn-0"
})(["display:flex;"]);
var StyledExampleBoxWrapper = styled.div.withConfig({
  displayName: "Skeletonstory__StyledExampleBoxWrapper",
  componentId: "sc-1fd94rn-1"
})(["margin-right:16px;"]);
var StyledExampleBox = styled.div.withConfig({
  displayName: "Skeletonstory__StyledExampleBox",
  componentId: "sc-1fd94rn-2"
})(["height:150px;width:200px;background:blue;"]);
storiesOf('Design System/Atoms/Skeleton', module).add('Inline Item', function () {
  return React.createElement(React.Fragment, null, React.createElement(SkeletonInlineItem, {
    length: 20
  }), React.createElement(SkeletonInlineItem, {
    text: "Lorem Ipsum dolor sit amet",
    fontSize: "lg",
    newLine: true,
    margin: "xxs 0"
  }));
}, {
  info: info
}).add('Inline Item Animated', function () {
  return React.createElement(React.Fragment, null, React.createElement(SkeletonInlineItem, {
    animated: true,
    length: 20
  }), React.createElement(SkeletonInlineItem, {
    animated: true,
    text: "Lorem Ipsum dolor sit amet",
    fontSize: "lg",
    newLine: true,
    margin: "xxs 0"
  }));
}, {
  info: info
}).add('Block Item', function () {
  return React.createElement(React.Fragment, null, React.createElement(SkeletonBlockItem, {
    height: "50px"
  }), React.createElement(Spacer, {
    size: "xxs"
  }), React.createElement(SkeletonBlockItem, {
    height: "300px",
    width: "400px"
  }));
}, {
  info: info
}).add('Block Item Animated', function () {
  return React.createElement(React.Fragment, null, React.createElement(SkeletonBlockItem, {
    animated: true,
    height: "50px"
  }), React.createElement(Spacer, {
    size: "xxs"
  }), React.createElement(SkeletonBlockItem, {
    animated: true,
    height: "300px",
    width: "400px"
  }));
}, {
  info: info
}).add('Conditional Example', function () {
  var loading = boolean('Loading', false);
  return React.createElement(StyledExampleWrapper, null, React.createElement(StyledExampleBoxWrapper, null, loading ? React.createElement(SkeletonBlockItem, {
    height: "150px",
    width: "200px"
  }) : React.createElement(StyledExampleBox, null)));
}, {
  info: info
}).add('Conditional Example Animated', function () {
  var loading = boolean('Loading', false);
  return React.createElement(StyledExampleWrapper, null, React.createElement(StyledExampleBoxWrapper, null, loading ? React.createElement(SkeletonBlockItem, {
    animated: true,
    height: "150px",
    width: "200px"
  }) : React.createElement(StyledExampleBox, null)));
}, {
  info: info
});
//# sourceMappingURL=Skeleton.story.js.map