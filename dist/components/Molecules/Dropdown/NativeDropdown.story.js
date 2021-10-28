import { withState } from '@dump247/storybook-state';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { IconShare } from '@excelwithbusiness/webmobile-svg-library';
import { NativeDropdown } from "./NativeDropdown";
import readme from "./NativeDropdown.readme.md";
var options = [{
  label: 'BMW'
}, {
  label: 'Audi'
}, {
  label: 'Mercedes'
}, {
  label: 'Porsche'
}, {
  label: 'Very long text item that is long rly rly long long long'
}];
var story = storiesOf('Design System/Molecules/Dropdown/NativeDropdown', module);
story.add('Initial', withState({
  value: ''
}, function (store) {
  var props = function props() {
    return {
      value: store.state.value,
      onChange: function onChange(e) {
        store.set({
          value: e.target.value
        });
        action('on-change')(e);
      },
      margin: text('margin', ''),
      padding: text('padding', ''),
      noBorder: boolean('noBorder', false)
    };
  };

  return React.createElement(NativeDropdown, props(), options.map(function (option, i) {
    return React.createElement("option", {
      key: i,
      value: option.label
    }, option.label);
  }));
}), {
  info: readme
});
story.add('Selected', withState({
  value: 'Porsche'
}, function (store) {
  var props = function props() {
    return {
      value: store.state.value,
      onChange: function onChange(e) {
        store.set({
          value: e.target.value
        });
        action('on-change')(e);
      },
      margin: text('margin', ''),
      padding: text('padding', '')
    };
  };

  return React.createElement(NativeDropdown, props(), options.map(function (option, i) {
    return React.createElement("option", {
      key: i,
      value: option.label
    }, option.label);
  }));
}), {
  info: readme
});
story.add('with custom icon', withState({
  value: ''
}, function (store) {
  var props = function props() {
    return {
      value: store.state.value,
      onChange: function onChange(e) {
        store.set({
          value: e.target.value
        });
        action('on-change')(e);
      },
      margin: text('margin', ''),
      padding: text('padding', ''),
      icon: React.createElement(IconShare, null),
      iconRotate: select('iconRotate', [0, 90, 180, 270], 0)
    };
  };

  return React.createElement(NativeDropdown, props(), options.map(function (option, i) {
    return React.createElement("option", {
      key: i,
      value: option.label
    }, option.label);
  }));
}), {
  info: readme
});
story.add('with different icon on mobile', withState({
  value: ''
}, function (store) {
  var props = function props() {
    return {
      value: store.state.value,
      onChange: function onChange(e) {
        store.set({
          value: e.target.value
        });
        action('on-change')(e);
      },
      margin: text('margin', ''),
      padding: text('padding', ''),
      iconMobile: React.createElement(IconShare, null),
      iconRotate: select('iconRotate', [0, 90, 180, 270], 90),
      iconMobileRotate: select('iconMobileRotate', [0, 90, 180, 270], 0)
    };
  };

  return React.createElement(NativeDropdown, props(), options.map(function (option, i) {
    return React.createElement("option", {
      key: i,
      value: option.label
    }, option.label);
  }));
}), {
  info: readme
});
//# sourceMappingURL=NativeDropdown.story.js.map