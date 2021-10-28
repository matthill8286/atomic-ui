function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { withState } from '@dump247/storybook-state';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from "../../Atoms/Button";
import { Card } from "../../Atoms/Card";
import { CopyText, Heading } from "../../Atoms/Typography";
import { Modal } from "./Modal";
import Readme from "./Modal.readme.md";
export var sizes = ['lg', 'md', 'sm'];
export var positions = ['top', 'center', 'bottom', 'confirm'];
export var types = ['space-between', 'right', 'center'];
export var paddingSizes = ['md', 'lg'];
export var animations = ['fadeIn', 'newspaper', 'slideFromRight', 'shake', 'falling', 'slideFromBottom', 'superScaled'];

var Image = function Image() {
  return React.createElement("img", {
    alt: "story-image",
    src: "https://webkit.org/demos/srcset/image-src.png"
  });
};

var Text = function Text() {
  return React.createElement(CopyText, {
    fontSize: "md"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.");
};

var modalKnobs = function modalKnobs() {
  return {
    size: select('Size', sizes, sizes[0]),
    position: select('Position', positions, positions[0]),
    title: text('Title', 'Modal'),
    buttonAlignment: select('Button type', types, types[0]),
    showButtonSeparator: boolean('With Button Seperator', true),
    paddingSize: select('Padding', paddingSizes, paddingSizes[0]),
    withScrollableContent: boolean('Scrollable content', false),
    isWhite: boolean('White background', false),
    hideCloseButton: boolean('Hide close', false),
    animation: select('Animation', animations, animations[0])
  };
};

var modalKnobsWithTitle = function modalKnobsWithTitle() {
  return _objectSpread(_objectSpread({}, modalKnobs()), {}, {
    title: text('Title', 'Modal')
  });
};

storiesOf('Design System/Molecules/Modals/Modal', module).add('Default', withState({
  isModalOpen: true
}, function (store) {
  var setModal = function setModal(toggle) {
    store.set({
      isModalOpen: toggle
    });
  };

  return React.createElement(React.Fragment, null, React.createElement(Button, {
    actionType: "primary",
    onClick: function onClick() {
      return setModal(true);
    }
  }, "Open Modal"), store.state.isModalOpen && React.createElement(Modal, _extends({}, modalKnobsWithTitle(), {
    onClose: function onClose() {
      return setModal(false);
    }
  }), React.createElement(Image, null)));
}), {
  info: Readme
}).add('With very long content', withState({
  isModalOpen: true
}, function (store) {
  var setModal = function setModal(toggle) {
    store.set({
      isModalOpen: toggle
    });
  };

  return React.createElement(React.Fragment, null, React.createElement(Button, {
    actionType: "primary",
    onClick: function onClick() {
      return setModal(true);
    }
  }, "Open Modal"), store.state.isModalOpen && React.createElement(Modal, _extends({}, modalKnobsWithTitle(), {
    onClose: function onClose() {
      return setModal(false);
    }
  }), React.createElement(Image, null), React.createElement(Text, null), React.createElement(Image, null), React.createElement(Text, null)));
}), {
  info: Readme
}).add('With two buttons.', function () {
  return React.createElement(Modal, _extends({}, modalKnobsWithTitle(), {
    primaryButtonProps: {
      buttonLabel: 'Call to action',
      actionType: 'primary',
      onClick: action('onClick call to action')
    },
    secondaryButtonProps: {
      buttonLabel: 'Close',
      actionType: 'outlined',
      onClick: action('onClick close')
    },
    onClose: action('onClick close cross')
  }), React.createElement("img", {
    src: "https://webkit.org/demos/srcset/image-src.png"
  }));
}, {
  info: Readme
}).add('With single call to action', function () {
  return React.createElement(Modal, _extends({}, modalKnobsWithTitle(), {
    primaryButtonProps: {
      buttonLabel: 'Call to action',
      actionType: 'primary',
      onClick: action('onClick call to action')
    },
    onClose: action('onClick')
  }), React.createElement(Image, null));
}, {
  info: Readme
}).add('href button link', function () {
  return React.createElement(Modal, _extends({}, modalKnobsWithTitle(), {
    primaryButtonProps: {
      buttonLabel: 'href btn',
      href: 'test.html'
    },
    onClose: action('onClick')
  }), React.createElement(Image, null));
}, {
  info: Readme
}).add('with component title', function () {
  return React.createElement(Modal, _extends({}, modalKnobs(), {
    title: React.createElement(React.Fragment, null, React.createElement(Card, {
      elevation: 0,
      padding: "md",
      shape: "rounded-small",
      margin: {
        top: 'xs',
        bottom: 'sm'
      }
    }, React.createElement(CopyText, null, "This is a component, which is rendered before the heading and the content of the modal and is not influenced by the isDisabled-prop.")), React.createElement(Heading, {
      scale: "level-4"
    }, "Modal title")),
    onClose: action('onClick')
  }), React.createElement(Image, null));
}, {
  info: Readme
});
//# sourceMappingURL=Modal.story.js.map