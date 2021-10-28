import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { saiyanTheme } from "../../../../styles/sc-vars-saiyan";
import { Heading } from "./Heading";
import { HeadingFeatured } from "./HeadingFeatured";
var stories = storiesOf('Design System/Atoms/Typography', module);

var knobs = function knobs(_ref) {
  var _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 'level-1' : _ref$scale,
      _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? 'h1' : _ref$tag,
      _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'grey6' : _ref$color,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '' : _ref$margin,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? 'default' : _ref$fontFamily,
      _ref$showCursor = _ref.showCursor,
      showCursor = _ref$showCursor === void 0 ? false : _ref$showCursor;
  return {
    scale: select('Type scale', ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'], scale),
    tag: select('Tag name', ['h1', 'h2', 'h3', 'h4', 'h5', 'strong', 'span'], tag),
    bold: boolean('Bold', bold),
    uppercase: boolean('uppercase', false),
    showCursor: boolean('Show Cursor', false),
    color: select('Color', Object.keys(saiyanTheme.color), color),
    margin: select('margin', ['', 'xl', 'xl 0', 'md xl xxl xl', '0'], margin),
    fontFamily: select('fontFamily', Object.keys(saiyanTheme.font.family), fontFamily)
  };
};

stories.add('Heading', function () {
  var sampleText = text('Example text', "Lorem ipsum dolor");
  return React.createElement(Heading, knobs({}), sampleText);
});
stories.add('Heading Featured', function () {
  var sampleText = text('Example text', "Featured Text for Teasers");
  var fixedSize = select('fixed size', ['', 'xl', 'xxxl'], undefined);
  var fixedMdSize = boolean('medium as maximum size', false);
  return React.createElement(HeadingFeatured, {
    tag: "h2",
    fixedSize: fixedSize,
    fixedMdSize: fixedMdSize,
    color: "secondary"
  }, sampleText);
});
//# sourceMappingURL=Heading.story.js.map