import { number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { saiyanTheme } from "../../../styles/sc-vars-saiyan";
import { loremIpsumArray } from "../../../utils/loremIpsumArray";
import { StorybookWrapper } from "../../../utils/StorybookWrapper";
import { Tag } from "./Tag";
import Readme from "./Tag.readme.md";
storiesOf('Design System/Atoms/Tag', module).add('Default', function () {
  return React.createElement(Tag, {
    text: "Some text",
    padding: {
      left: 'lg',
      right: 'lg'
    }
  });
}, {
  info: Readme
}).add('Custom Padding', function () {
  return React.createElement(Tag, {
    text: "Featured",
    padding: {
      left: 'md',
      right: 'md',
      top: 'xxs',
      bottom: 'xxs'
    }
  });
}, {
  info: Readme
}).add('Colored', function () {
  var selectedColor = select('Color', Object.keys(saiyanTheme.color), 'black');
  return React.createElement(Tag, {
    text: "some text with anchor link",
    href: "#",
    targetBlank: true,
    color: selectedColor,
    padding: {
      left: 'sm',
      right: 'sm'
    }
  });
}, {
  info: Readme
}).add('Link', function () {
  return React.createElement(Tag, {
    text: "some text with anchor link",
    href: "#",
    targetBlank: true,
    padding: {
      left: 'sm',
      right: 'sm'
    }
  });
}, {
  info: Readme
}).add('Many Tags', function () {
  var tags = loremIpsumArray.slice(0, number('number of tags', 20, {
    range: true,
    min: 0,
    max: loremIpsumArray.length,
    step: 1
  })).map(function (t) {
    return React.createElement(Tag, {
      key: t,
      text: t,
      targetBlank: true,
      marginBottom: true,
      marginRight: true
    });
  });
  return React.createElement(StorybookWrapper, {
    style: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, tags);
}, {
  info: Readme
});
//# sourceMappingURL=Tag.story.js.map