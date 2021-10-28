import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TypeRhythm, TypoExampleBox } from "./utils";
import { alternateTheme } from "../../../styles/sc-vars-alternate";
import { saiyanTheme } from "../../../styles/sc-vars-saiyan";
import { StorybookWrapper } from "../../../utils/StorybookWrapper";
import { CopyText } from "./CopyText";
import { Heading } from "./Heading";
import { HeadingPresets } from "./Heading/HeadingPresets";
import { InfoText } from "./InfoText";
storiesOf('Design System/Atoms/Typography', module).add('Overview', function () {
  var headingKeys = Object.keys(HeadingPresets);
  var demoText = text('Text', 'AbBbCc, 12345');
  var showRhythm = boolean('Show Rhythm', false);
  var infoTextScales = ['small', 'small-highlighted', 'extra-small'];

  var getFontSizeString = function getFontSizeString(fontName) {
    if (!fontName) {
      return '';
    }

    var separator = '  •  ';
    var fontSizeString = separator + fontName;

    if (saiyanTheme.font.size[fontName]) {
      fontSizeString = fontSizeString + separator + 'filtered' + saiyanTheme.font.size[fontName];
    }

    if (alternateTheme.font.size[fontName]) {
      fontSizeString = fontSizeString + separator + 'alternate' + alternateTheme.font.size[fontName];
    }

    return fontSizeString;
  };

  var exampleBoxes = headingKeys.map(function (k) {
    return React.createElement(TypoExampleBox, {
      key: k,
      labelTop: 'Headline' + getFontSizeString(HeadingPresets[k].fontSize),
      labelBottom: k
    }, React.createElement(TypeRhythm, {
      visible: showRhythm
    }, React.createElement(Heading, {
      scale: k
    }, demoText)));
  });
  exampleBoxes.push(React.createElement(TypoExampleBox, {
    labelTop: "CopyText",
    key: 'CopyText'
  }, React.createElement(TypeRhythm, {
    visible: boolean('Show Rhythm', false)
  }, React.createElement(CopyText, null, demoText))));
  infoTextScales.forEach(function (scale) {
    exampleBoxes.push(React.createElement(TypoExampleBox, {
      key: 'InfoText_' + scale,
      labelTop: "InfoText",
      labelBottom: scale
    }, React.createElement(TypeRhythm, {
      visible: boolean('Show Rhythm', false)
    }, React.createElement(InfoText, {
      scale: scale
    }, demoText))));
  });
  return React.createElement(StorybookWrapper, null, exampleBoxes);
});
//# sourceMappingURL=TypoOverview.story.js.map