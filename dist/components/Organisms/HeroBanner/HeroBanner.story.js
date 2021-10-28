function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Heading } from "../../Atoms/Typography";
import { StorybookRouterWrapper } from "../../../utils/StorybookWrapper";
import { HeroBanner } from "./HeroBanner";
var badges = [{
  id: 0,
  name: 'New'
}, {
  id: 1,
  name: '100% Awesome!'
}];

var knobs = function knobs() {
  return {
    link: {
      to: text('Link To', '#')
    },
    height: {
      mobile: 350,
      tablet: 300,
      desktop: 400
    },
    heroImages: {
      lg: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      md: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      sm: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      xl: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm'
    }
  };
};

storiesOf('Design System/Organisms/HeroBanner', module).add('Default', function () {
  return React.createElement(StorybookRouterWrapper, null, React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex'
    }
  }, React.createElement(HeroBanner, _extends({
    key: 'ImageTile_' + knobs().height
  }, knobs()))));
}).add('With promoted badged', function () {
  return React.createElement(StorybookRouterWrapper, null, React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex'
    }
  }, React.createElement(HeroBanner, _extends({
    key: 'ImageTile_' + knobs().height
  }, knobs(), {
    badges: badges
  }))));
}).add('Slim version With Feature Hero Image & Heading', function () {
  return React.createElement(StorybookRouterWrapper, null, React.createElement(HeroBanner, _extends({}, knobs(), {
    height: {
      mobile: 100,
      tablet: 125,
      desktop: 150
    },
    heroImages: {
      lg: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      md: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      sm: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      xl: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm'
    }
  }), React.createElement(Heading, {
    scale: "level-3",
    padding: "md",
    textAlign: 'center',
    margin: 'auto'
  }, "What we can offer our professionals")));
});
//# sourceMappingURL=HeroBanner.story.js.map