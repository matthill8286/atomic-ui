function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { boolean, optionsKnob as options, radios, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { StorybookWrapper } from "../../../utils/StorybookWrapper";
import { Heading } from "../Typography";
import { Card } from "./CardV2";
import Readme from "./Card.readme.md";
var customMargins = {
  bottom: 'xxs',
  left: 'sm',
  right: 'md',
  top: 'xl'
};
var responsiveMargins = {
  mobile: 'xs',
  tablet: 'md',
  desktop: 'xl'
};
var customPaddings = {
  bottom: 'xxs',
  left: 'sm',
  right: 'md',
  top: 'xl'
};
var responsivePaddings = {
  mobile: 'xs',
  tablet: 'md',
  desktop: 'xl'
};
var borders = {
  Bottom: 'bottom',
  Left: 'left',
  Right: 'right',
  Top: 'top'
};
var customShapes = {
  bottomLeft: 'sharp',
  bottomRight: 'sharp',
  topLeft: 'rounded-small',
  topRight: 'rounded-small'
};
var shapes = ['rounded-big', 'rounded-small', 'sharp'];
var surfaces = ['white', 'grey', 'black', 'primary', 'selected'];
var elevations = [0, 1, 2, 3, 4];
var paddings = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'];
var margins = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'];
var optionsObj = {
  display: 'check'
};
var displays = ['flex', 'block'];
var actionTypes = {
  Prominent: 'prominent',
  Secondary: 'secondary'
};
var overflow = {
  none: 'none',
  hidden: 'hidden',
  undefined: undefined
};
var featuredAssetImages = [{
  image: 'public/images/logos/flower-logoa.jpg'
}, {
  image: 'public/images/logos/tree-logoa.jpg'
}];
storiesOf('Design System/Atoms/Card', module).add('Default', function () {
  var knobs = {
    children: text('Content', 'Here stands the card content'),
    center: boolean('Center', false),
    elevation: select('Elevation', elevations, 0),
    elevationHover: select('Elevation on Hover', elevations, 1),
    overflow: select('Overflow', overflow, 'hidden'),
    padding: select('Padding', paddings, 'xxs'),
    margin: select('Margin', margins, 'xxs'),
    shape: select('Shape', shapes, 'rounded-big'),
    surface: select('Surface', surfaces, 'white')
  };
  return React.createElement(Card, knobs);
}, {
  info: Readme
}).add('Custom Shape', function () {
  var knobs = {
    noBorder: options('Remove border', borders, [], optionsObj),
    children: text('Content', 'Here stands the card content'),
    elevation: select('Elevation', elevations, 0),
    elevationHover: select('Elevation on Hover', elevations, 0),
    padding: select('Padding', paddings, 'xxs'),
    shape: {
      bottomLeft: select('shape|bottomLeft', shapes, customShapes.bottomLeft),
      bottomRight: select('shape|bottomRight', shapes, customShapes.bottomRight),
      topLeft: select('shape|topLeft', shapes, customShapes.topLeft),
      topRight: select('shape|topRight', shapes, customShapes.topRight)
    },
    surface: select('Surface', surfaces, 'white'),
    display: select('Display', displays, 'block')
  };
  return React.createElement(Card, knobs);
}, {
  info: Readme
}).add('Custom Padding', function () {
  var horizontalPaddings = ['xs', 'sm', 'md', 'lg', 'xl'];
  var knobs = {
    noBorder: options('Remove border', borders, [], optionsObj),
    children: text('Content', 'Here stands the card content'),
    elevation: select('Elevation', elevations, 1),
    elevationHover: select('Elevation on Hover', elevations, 2),
    shape: select('Shape', shapes, 'sharp'),
    surface: select('Surface', surfaces, 'white'),
    padding: {
      top: select('padding|paddingTop', paddings, customPaddings.top),
      bottom: select('padding|paddingBottom', paddings, customPaddings.bottom),
      left: select('padding|paddingLeft', horizontalPaddings, customPaddings.left),
      right: select('padding|paddingRight', horizontalPaddings, customPaddings.right)
    },
    display: select('Display', displays, 'block')
  };
  return React.createElement(Card, _objectSpread({}, knobs));
}, {
  info: Readme
}).add('Responsive Padding', function () {
  var paddingOverrides = {
    top: boolean('override top', false) ? select('padding top', paddings, customPaddings.top) : undefined,
    bottom: boolean('override bottom', false) ? select('padding bottom', paddings, customPaddings.bottom) : undefined
  };
  var isLeftPadding = boolean('override left', false);

  if (isLeftPadding) {
    paddingOverrides.left = select('padding left', paddings, customPaddings.left);
  }

  var isRightPadding = boolean('override right', false);

  if (isRightPadding) {
    paddingOverrides.right = select('padding right', paddings, customPaddings.right);
  }

  var horizontalPaddings = ['xs', 'sm', 'md', 'lg', 'xl'];
  var knobs = {
    children: 'Here stands the card content',
    elevation: 1,
    padding: _objectSpread({
      mobile: select('padding mobile', paddings, responsivePaddings.mobile),
      tablet: select('padding tablet', paddings, responsivePaddings.tablet),
      desktop: select('padding desktop', horizontalPaddings, responsivePaddings.desktop)
    }, paddingOverrides)
  };
  return React.createElement(Card, _objectSpread({}, knobs));
}, {
  info: Readme
}).add('Custom Margin', function () {
  var horizontalMargins = ['xs', 'sm', 'md', 'lg', 'xl'];
  var knobs = {
    noBorder: options('Remove border', borders, [], optionsObj),
    children: text('Content', 'Here stands the card content'),
    elevation: select('Elevation', elevations, 1),
    elevationHover: select('Elevation on Hover', elevations, 2),
    shape: select('Shape', shapes, 'sharp'),
    surface: select('Surface', surfaces, 'white'),
    padding: select('Padding', paddings, 'md'),
    margin: {
      top: select('margin|marginTop', margins, customMargins.top),
      bottom: select('margin|marginBottom', margins, customMargins.bottom),
      left: select('margin|marginLeft', horizontalMargins, customMargins.left),
      right: select('margin|marginRight', horizontalMargins, customMargins.right)
    },
    display: select('Display', displays, 'block')
  };
  return React.createElement(Card, _objectSpread({}, knobs));
}, {
  info: Readme
}).add('Responsive Margin', function () {
  var marginOverrides = {
    top: boolean('override top', false) ? select('margin top', margins, customMargins.top) : undefined,
    bottom: boolean('override bottom', false) ? select('margin bottom', margins, customMargins.bottom) : undefined
  };
  var isLeftMargin = boolean('override left', false);

  if (isLeftMargin) {
    marginOverrides.left = select('margin left', margins, customMargins.left);
  }

  var isRightMargin = boolean('override right', false);

  if (isRightMargin) {
    marginOverrides.right = select('margin right', margins, customMargins.right);
  }

  var horizontalMargins = ['xs', 'sm', 'md', 'lg', 'xl'];
  var knobs = {
    children: 'Here stands the card content',
    elevation: 1,
    margin: _objectSpread({
      mobile: select('margin mobile', margins, responsiveMargins.mobile),
      tablet: select('margin tablet', margins, responsiveMargins.tablet),
      desktop: select('margin desktop', horizontalMargins, responsiveMargins.desktop)
    }, marginOverrides)
  };
  return React.createElement(Card, _objectSpread({}, knobs));
}, {
  info: Readme
}).add('With badges and asset images', function () {
  var badges = [{
    id: 1,
    name: 'Live'
  }, {
    id: 1,
    name: 'Sponsored',
    badgeActionType: 'primary'
  }];
  var withFeaturedAssets = boolean('With Featured Assets', true);

  var knobs = function knobs() {
    return {
      elevation: select('Elevation', elevations, 1),
      elevationHover: select('Elevation on Hover', elevations, 2),
      overflow: select('Overflow', overflow, 'hidden'),
      padding: 'lg',
      badgeActionType: radios('Type', actionTypes, actionTypes.Prominent),
      borderWidth: 0,
      children: React.createElement(Heading, {
        scale: "level-1",
        tag: "h1",
        color: "primary",
        lineHeight: "xl",
        fontFamily: "featured",
        weight: "regular",
        fontSize: "xxl",
        spacing: "base"
      }, "That's an awesome content!")
    };
  };

  var paddingForContent = {
    top: 'xl',
    bottom: 'xl',
    left: 'xl',
    right: 'xl'
  };
  return React.createElement(StorybookWrapper, null, React.createElement(Card, _extends({}, knobs(), {
    badges: badges,
    padding: paddingForContent,
    featuredAssetImages: withFeaturedAssets ? featuredAssetImages : undefined
  })));
}, {
  info: Readme
}).add('Accessible', function () {
  var knobs = {
    children: text('Content', 'Here stands the card content'),
    center: boolean('Center', false),
    elevation: select('Elevation', elevations, 0),
    elevationHover: select('Elevation on Hover', elevations, 1),
    overflow: select('Overflow', overflow, 'hidden'),
    padding: select('Padding', paddings, 'xxs'),
    margin: select('Margin', margins, 'xxs'),
    shape: select('Shape', shapes, 'rounded-big'),
    surface: select('Surface', surfaces, 'white')
  };
  return React.createElement(Card, _extends({}, knobs, {
    onClick: function onClick() {
      return alert('CLICK');
    },
    ariaLabel: "Click me..."
  }));
}, {
  info: Readme
});
//# sourceMappingURL=Card.story.js.map