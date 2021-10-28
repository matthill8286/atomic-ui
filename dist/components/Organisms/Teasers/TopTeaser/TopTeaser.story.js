function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StorybookRouterWrapper } from "../../../../utils/StorybookWrapper";
import { storiesOf } from '@storybook/react';
import { number, text, select } from '@storybook/addon-knobs';
import { Illustration09 } from '@excelwithbusiness/webmobile-svg-library';
import { TopTeaser } from "./..";
var badges = [{
  id: 0,
  name: 'New'
}, {
  id: 1,
  name: '100% Awesome!'
}];
var actionTypes = {
  prominent: 'prominent',
  secondary: 'secondary'
};
var colorTypes = {
  primary: 'primary',
  selected: 'selected',
  white: 'white',
  black: 'black',
  grey: 'grey'
};

var knobs = function knobs() {
  return {
    link: {
      to: text('Link To', '/')
    },
    height: {
      mobile: number('mobile', 350),
      tablet: number('tablet', 300),
      desktop: number('desktop', 400)
    },
    badgeActionType: select('Badge Type', actionTypes, actionTypes[0]),
    color: select('Colors', colorTypes, colorTypes[0]),
    content: {
      primary: text('Headline', 'Welcome to'),
      secondary: text('Copy text', 'Digital Agility at Filtered'),
      name: text('Name', 'Matthew')
    },
    heroImages: {
      lg: text('large', "https://media.graphcms.com/resize=fit:crop,height:275,width:800/tbT0Znk2RJmb3d6RtCLm"),
      md: text('medium', 'https://media.graphcms.com/resize=fit:crop,height:250,width:600/tbT0Znk2RJmb3d6RtCLm'),
      sm: text('small', 'https://media.graphcms.com/resize=fit:crop,height:100,width:350/tbT0Znk2RJmb3d6RtCLm'),
      xl: text('XL', 'https://media.graphcms.com/resize=fit:crop,height:300,width:1000/tbT0Znk2RJmb3d6RtCLm')
    }
  };
};

storiesOf('Design System/Organisms/Teasers/AssetTeaser', module).add('Slim version With Feature Image & Heading', function () {
  return React.createElement(StorybookRouterWrapper, null, React.createElement(TopTeaser, _extends({}, knobs(), {
    height: {
      mobile: 100,
      tablet: 150,
      desktop: 150
    }
  })));
}).add('With Featured Content', function () {
  return React.createElement(StorybookRouterWrapper, null, React.createElement(TopTeaser, _extends({}, knobs(), {
    content: _objectSpread({}, knobs().content),
    heroImages: {
      lg: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      md: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      sm: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      xl: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm'
    }
  })));
}).add('With Featured Images & Featured Content', function () {
  return React.createElement(StorybookRouterWrapper, null, React.createElement(TopTeaser, _extends({}, knobs(), {
    heroImages: undefined,
    content: _objectSpread({}, knobs().content),
    images: {
      lg: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      md: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      sm: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      xl: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm'
    }
  })));
}).add('With Hero Banner Image and featured badges ', function () {
  return React.createElement(StorybookRouterWrapper, null, React.createElement(TopTeaser, _extends({}, knobs(), {
    badges: badges,
    heroImages: {
      lg: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      md: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      sm: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm',
      xl: 'https://media.graphcms.com/resize=fit:crop,height:300,width:800/tbT0Znk2RJmb3d6RtCLm'
    },
    content: _objectSpread({}, knobs().content),
    images: undefined
  })));
}).add('With SVG, Featured Content and featured badges ', function () {
  return React.createElement(StorybookRouterWrapper, null, React.createElement(TopTeaser, _extends({}, knobs(), {
    badges: badges,
    badgeActionType: "prominent",
    heroImages: undefined,
    content: _objectSpread({}, knobs().content),
    svg: React.createElement(Illustration09, null)
  })));
});
//# sourceMappingURL=TopTeaser.story.js.map