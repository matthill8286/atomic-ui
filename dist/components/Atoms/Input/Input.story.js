function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { withState } from '@dump247/storybook-state';
import { radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { IconBookmark, IconClose } from '@excelwithbusiness/webmobile-svg-library';
import { CopyText } from "../Typography";
import { Input } from "./Input";
import Readme from "./Input.readme.md";
import { InputArea } from "./InputArea";
import { InputPassword } from "./InputPassword";
var styleTypes = {
  default: 'default',
  large: 'large',
  dense: 'dense'
};
var inputStates = {
  idle: 'idle',
  valid: 'valid',
  error: 'error',
  disabled: 'disabled'
};
var inputTypes = {
  text: 'text',
  number: 'number',
  password: 'password',
  date: 'date'
};

var inputTextKnobs = function inputTextKnobs() {
  return {
    label: text('label', 'insert a label'),
    margin: text('margin', ''),
    padding: text('padding', ''),
    placeholder: text('placeHolder', 'write a placeholder'),
    state: radios('state', inputStates, 'idle'),
    inputStyle: radios('Style', styleTypes, 'default'),
    inputType: radios('inputType', inputTypes, 'text')
  };
};

var stories = storiesOf('Design System/Molecules/Form Fields/Input', module);
var options = {
  info: Readme
};
stories.add('type text', withState({
  value: undefined
}, function (store) {
  var onChange = function onChange(_ref) {
    var value = _ref.target.value;
    store.set({
      value: value
    });
  };

  return React.createElement(Input, _extends({
    inputType: "text",
    onChange: onChange,
    value: store.state.value
  }, inputTextKnobs()));
}), options);
stories.add('with default value', withState({
  value: 'halloooooooooo'
}, function (store) {
  return React.createElement(Input, _extends({
    inputType: "text",
    value: store.state.value
  }, inputTextKnobs()));
}), options);
stories.add('with autofocus', withState({
  value: ''
}, function (store) {
  var onChange = function onChange(_ref2) {
    var value = _ref2.target.value;
    store.set({
      value: value
    });
  };

  return React.createElement(Input, {
    label: "Label",
    placeholder: "Placeholder",
    helper: React.createElement(CopyText, null, "help text"),
    onChange: onChange,
    autofocus: true,
    value: store.state.value
  });
}), options);
stories.add('with help text', withState({
  value: ''
}, function (store) {
  return React.createElement(Input, _extends({}, inputTextKnobs(), {
    helpText: "help text",
    value: store.state.value
  }));
}), options);
stories.add('with custom helper', withState({
  value: ''
}, function (store) {
  return React.createElement(Input, _extends({}, inputTextKnobs(), {
    label: "Label",
    placeholder: "Placeholder",
    value: store.state.value,
    helper: React.createElement("div", null, React.createElement(CopyText, null, "I'm the helper prop... I can be any component you like..."), React.createElement(CopyText, null, "Additional content"))
  }));
}), options);
stories.add('with error message', withState({
  value: "that's bad"
}, function (store) {
  return React.createElement(Input, {
    state: "error",
    label: "Oh my label!",
    value: store.state.value,
    errorMessage: "i'm sorry!"
  });
}), options);
stories.add('with error message and help text', withState({
  value: "that's bad"
}, function (store) {
  return React.createElement(Input, {
    state: "error",
    label: "Oh my label!",
    value: store.state.value,
    helpText: "Help text",
    errorMessage: "i'm sorry!"
  });
}), options);
stories.add('with custom icon', withState({
  value: ''
}, function (store) {
  return React.createElement(Input, {
    inputIcon: React.createElement(IconBookmark, null),
    inputIconSize: {
      height: 16,
      width: 16
    },
    label: "Insert something",
    value: store.state.value
  });
}), options);

var inputPasswordKnobs = function inputPasswordKnobs() {
  return {
    state: radios('state', inputStates, 'idle'),
    inputStyle: radios('Style', styleTypes, 'default')
  };
};

stories.add('type password', withState({
  value: ''
}, function (store) {
  var handleChange = function handleChange(_ref3) {
    var value = _ref3.target.value;
    store.set({
      value: value
    });
  };

  return React.createElement(InputPassword, _extends({}, inputPasswordKnobs(), {
    onChange: handleChange,
    label: "Insert password",
    placeholder: "Insert your super secret password",
    value: store.state.value
  }));
}), options);

var inputDateKnobs = function inputDateKnobs() {
  return {
    state: radios('state', inputStates, 'idle'),
    inputStyle: radios('Style', styleTypes, 'default')
  };
};

stories.add('input mask date', withState({
  value: ''
}, function (store) {
  return React.createElement(Input, _extends({}, inputDateKnobs(), {
    value: store.state.value,
    onChange: function onChange(_ref4) {
      var value = _ref4.target.value;
      return store.set({
        value: value
      });
    },
    inputMaskProps: {
      mask: '99.99.9999'
    },
    inputType: "text",
    label: "Insert date"
  }));
}), options);
stories.add('input mask phone', withState({
  value: ''
}, function (store) {
  return React.createElement(Input, _extends({}, inputDateKnobs(), {
    value: store.state.value,
    onChange: function onChange(_ref5) {
      var value = _ref5.target.value;
      return store.set({
        value: value
      });
    },
    inputMaskProps: {
      mask: "+4\\4 7567 777 888"
    },
    inputType: "text",
    label: "Insert date"
  }));
}), options);

var inputCustomMask = function inputCustomMask() {
  return {
    mask: text('mask', "\xA3 999")
  };
};

stories.add('input mask custom', withState({
  value: '444'
}, function (store) {
  return React.createElement(Input, _extends({}, inputDateKnobs(), {
    value: store.state.value,
    onChange: function onChange(_ref6) {
      var value = _ref6.target.value;
      return store.set({
        value: value
      });
    },
    inputMaskProps: inputCustomMask(),
    inputType: "text",
    label: "Insert date"
  }));
}), options);
stories.add('input area', withState({
  value: ''
}, function (store) {
  return React.createElement(InputArea, _extends({}, inputDateKnobs(), {
    value: store.state.value,
    onChange: function onChange(_ref7) {
      var value = _ref7.target.value;
      return store.set({
        value: value
      });
    },
    rows: 4,
    inputType: "text",
    label: "Insert multiline",
    placeholder: "Placeholder"
  }));
}), options);
stories.add('Accessibility', withState({
  value: undefined
}, function (store) {
  var onChange = function onChange(_ref8) {
    var value = _ref8.target.value;
    store.set({
      value: value
    });
  };

  return React.createElement(Input, _extends({}, inputTextKnobs(), {
    iconLabel: "Enable self-destruct!",
    inputIcon: React.createElement(IconClose, null),
    inputIconSize: {
      height: 20,
      width: 20
    },
    inputProps: {
      id: 'test-field',
      required: true
    },
    inputType: "text",
    label: "Accessible Text Input",
    onChange: onChange,
    onClickIcon: function onClickIcon() {
      return alert('Boom!');
    },
    placeholder: "Try tabbing to use icon...",
    value: store.state.value
  }));
}), options);
stories.add('Accessibility: Error', withState({
  value: undefined
}, function (store) {
  var onChange = function onChange(_ref9) {
    var value = _ref9.target.value;
    store.set({
      value: value
    });
  };

  return React.createElement(Input, _extends({}, inputTextKnobs(), {
    errorMessage: "You enetered the wrong information",
    inputProps: {
      id: 'test-field',
      required: true
    },
    inputType: "text",
    label: "Accessible Text Input With Error",
    onChange: onChange,
    placeholder: "Enter some text...",
    state: "error",
    value: store.state.value
  }));
}), options);
//# sourceMappingURL=Input.story.js.map