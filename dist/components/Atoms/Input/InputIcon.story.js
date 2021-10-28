import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { IconArticle, IconBookmark, IconClose } from '@excelwithbusiness/webmobile-svg-library';
import { InputIcon } from "./InputIcon";
var CustomIcon = {
  Visible: 'visible',
  Hidden: 'hidden',
  Arrow: 'arrow'
};
var icons = {
  visible: React.createElement(IconBookmark, null),
  hidden: React.createElement(IconClose, null),
  arrow: React.createElement(IconArticle, null),
  default: null
};
var stories = storiesOf('Design System/Atoms/InputIcon', module);
stories.add('Default', function () {
  var knobs = function knobs() {
    var iconName = select('icon', CustomIcon, CustomIcon.Hidden);
    var icon = icons[iconName];
    var iconState = select('iconState', ['default', 'valid', 'error'], 'default');
    return {
      icon: icon,
      iconState: iconState,
      onClick: action('onclick')
    };
  };

  return React.createElement(InputIcon, knobs());
});
//# sourceMappingURL=InputIcon.story.js.map