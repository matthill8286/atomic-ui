import { array, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Icon } from "../Icon";
import { CopyText } from "../Typography/CopyText";
import { IconCheckmarkCircle } from '@excelwithbusiness/webmobile-svg-library';
import { Lists } from "./Lists";
storiesOf('Design System/Atoms/Lists', module).add('Lists', function () {
  var ListItems = array('List items', ['Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ', 'Dolore est', 'Testing this']);
  var icon = boolean('Icon', false);
  var ordered = boolean('Ordered', false);
  var margin = boolean('With Margin', false);
  return React.createElement(Lists, {
    icon: icon,
    ordered: ordered,
    withMargin: margin
  }, ListItems.map(function (item, index) {
    return React.createElement("li", {
      key: index
    }, icon && React.createElement(Icon, {
      color: 'grey4',
      width: 24,
      height: 24
    }, React.createElement(IconCheckmarkCircle, null)), React.createElement(CopyText, null, item));
  }));
});
//# sourceMappingURL=Lists.story.js.map