import { withState } from '@dump247/storybook-state';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Foldable } from "./Foldable";

var toggle = function toggle(store) {
  store.set({
    checkedValue: !store.state.checkedValue
  });
};

storiesOf('Design System/Atoms/Foldable', module).add('Default', withState({
  checkedValue: false
}, function (store) {
  return React.createElement(React.Fragment, null, React.createElement(Foldable, {
    isOpen: store.state.checkedValue
  }, "HIDDEN"), React.createElement("button", {
    onClick: function onClick() {
      return toggle(store);
    }
  }, "Toggle Content"));
}));
//# sourceMappingURL=Foldable.story.js.map