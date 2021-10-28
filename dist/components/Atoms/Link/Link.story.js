function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Icon } from "../Icon";
import { CopyText } from "../Typography";
import { saiyanTheme } from "../../../styles/sc-vars-saiyan";
import { StyleguideShare } from '@excelwithbusiness/webmobile-svg-library';
import { Link } from "./Link";
import { StyleguideEdit } from "../../../svgs";
import { action } from '@storybook/addon-actions';
var scales = ['large', 'small'];
var sizes = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
var targets = ['_self', '_blank'];

var knobs = function knobs() {
  return {
    color: select('Color', Object.keys(saiyanTheme.color), 'grey4'),
    disabled: boolean('Set disabled', false),
    bold: boolean('Bold', false),
    target: select('Target', targets, '_self')
  };
};

storiesOf('Design System/Atoms/Link', module).add('Link', function () {
  var scale = select('Type scale', scales, 'large');
  var sampleText = text('Example text', "Lorem ipsum dolor");
  var underline = boolean('Underline', true);
  return React.createElement(Link, _extends({}, knobs(), {
    scale: scale,
    href: "#",
    underline: underline
  }), sampleText);
}).add('with Icon', function () {
  var scale = select('Type scale', scales, 'large');
  var sampleText = text('Example text', "Lorem ipsum dolor");
  var iconPositions = ['left', 'right', 'both'];
  var iconPosition = select('Icon Position', iconPositions, 'left');
  var iconColor = select('Icon Color', Object.keys(saiyanTheme.color), 'primary');
  var underline = boolean('Underline', true);
  return React.createElement(BrowserRouter, null, React.createElement(Link, _extends({}, knobs(), {
    to: "/test",
    scale: scale,
    underline: underline
  }, (iconPosition === 'left' || iconPosition === 'both') && {
    iconLeft: React.createElement(Icon, {
      color: iconColor
    }, React.createElement(StyleguideShare, {
      height: "sm",
      width: "sm",
      fill: iconColor
    }))
  }, (iconPosition === 'right' || iconPosition === 'both') && {
    iconRight: React.createElement(Icon, {
      color: iconColor
    }, React.createElement(StyleguideEdit, {
      height: "sm",
      width: "sm",
      fill: iconColor
    }))
  }), sampleText));
}).add('inline Link', function () {
  var sampleText = text('Example text', "Lorem ipsum link");
  var fontSize = select('Size', sizes, sizes[3]);
  var underline = boolean('Underline', true);
  return React.createElement(CopyText, {
    fontSize: fontSize,
    tag: "div"
  }, React.createElement(Link, _extends({}, knobs(), {
    fontSize: fontSize,
    inline: true,
    href: "/test",
    underline: underline
  }), sampleText), ' found this useful');
}).add('smooth scroll Anker Link', function () {
  var sampleText = text('Example text', "Lorem ipsum link");
  var fontSize = select('Size', sizes, sizes[3]);
  var scrollOffset = number('ScrollOffset', 0);
  return React.createElement("div", null, React.createElement(CopyText, {
    fontSize: fontSize,
    tag: "div"
  }, React.createElement(Link, _extends({}, knobs(), {
    fontSize: fontSize,
    href: "#smooth_anker",
    smooth: true,
    scrollOffset: scrollOffset
  }), sampleText)), React.createElement("div", {
    id: "smooth_anker",
    style: {
      marginTop: '1500px',
      marginBottom: '800px'
    }
  }, "Anker Target"));
}).add('Link as span', function () {
  var scale = select('Type scale', scales, 'large');
  var sampleText = text('Example text', "Lorem ipsum dolor");
  var underline = boolean('Underline', true);
  return React.createElement(Link, _extends({}, knobs(), {
    scale: scale,
    href: "/test",
    underline: underline
  }), sampleText);
}).add('Link as branded', function () {
  var scale = select('Type scale', scales, 'large');
  var sampleText = text('Example text', "Lorem ipsum dolor");
  var branded = boolean('Branded', true);
  return React.createElement(Link, _extends({}, knobs(), {
    underline: false,
    scale: scale,
    href: "#",
    branded: branded
  }), sampleText);
});

var buttonKnobs = function buttonKnobs() {
  return {
    color: select('Color', Object.keys(saiyanTheme.color), 'black'),
    disabled: boolean('Set disabled', false),
    bold: boolean('Bold', false),
    onClick: action('onclick')
  };
};

storiesOf('Design System/Atoms/Link/Button', module).add('Default', function () {
  var scale = select('Type scale', scales, 'large');
  var sampleText = text('Example text', "Lorem ipsum dolor");
  var underline = boolean('Underline', true);
  return React.createElement(Link, _extends({}, buttonKnobs(), {
    scale: scale,
    underline: underline
  }), sampleText);
}).add('With Icon', function () {
  var scale = select('Type scale', scales, 'large');
  var sampleText = text('Example text', "Lorem ipsum dolor");
  var iconPositions = ['left', 'right', 'both'];
  var iconPosition = select('Icon Position', iconPositions, 'left');
  var iconColor = select('Icon Color', Object.keys(saiyanTheme.color), 'primary');
  var underline = boolean('Underline', true);
  return React.createElement(Link, _extends({}, buttonKnobs(), {
    scale: scale,
    underline: underline
  }, (iconPosition === 'left' || iconPosition === 'both') && {
    iconLeft: React.createElement(Icon, {
      color: iconColor
    }, React.createElement(StyleguideShare, {
      height: "sm",
      width: "sm",
      fill: iconColor
    }))
  }, (iconPosition === 'right' || iconPosition === 'both') && {
    iconRight: React.createElement(Icon, {
      color: iconColor
    }, React.createElement(StyleguideEdit, {
      height: "sm",
      width: "sm",
      fill: iconColor
    }))
  }), sampleText);
}).add('Inline', function () {
  var sampleText = text('Example text', "Lorem ipsum link");
  var fontSize = select('Size', sizes, sizes[3]);
  var underline = boolean('Underline', true);
  return React.createElement(CopyText, {
    fontSize: fontSize,
    tag: "div"
  }, 'This is random Text with a ', React.createElement(Link, _extends({}, buttonKnobs(), {
    fontSize: fontSize,
    inline: true,
    underline: underline
  }), sampleText), ' read more...');
});
//# sourceMappingURL=Link.story.js.map