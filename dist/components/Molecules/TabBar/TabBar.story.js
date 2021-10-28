function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { withState } from '@dump247/storybook-state';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TabBar } from "./TabBar";
import Readme from "./TabBar.readme.md";
import { saiyanTheme } from "../../../styles";
import { ThemeProvider } from "../../../styles/ThemeProvider";

var changeChecked = function changeChecked(store, id) {
  store.set({
    selected: id
  });
};

var elevations = [0, 1, 2, 3, 4];

var blackExampleTheme = _objectSpread(_objectSpread({}, saiyanTheme), {}, {
  color: _objectSpread(_objectSpread({}, saiyanTheme.color), {}, {
    backgroundColor: 'black',
    surfaceColor: 'black',
    textColor: 'white'
  })
});

var stories = storiesOf('Design System/Molecules/TabBar', module);
stories.add('Default', withState({
  selected: undefined
}, function (store) {
  var tabs = [{
    id: 'tab1',
    label: 'Preferences'
  }, {
    id: 'tab2',
    label: 'Goals'
  }, {
    id: 'tab3',
    label: 'Photo'
  }, {
    id: 'tab4',
    label: 'Label 4'
  }];
  var knobs = {
    tabGroupName: 'default-tab-group',
    onChange: function onChange(id) {
      return changeChecked(store, id);
    },
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs: tabs
  };
  return React.createElement("div", {
    style: {
      padding: '20px'
    }
  }, React.createElement(TabBar, _extends({}, knobs, {
    surfaceColor: "white"
  })));
}), {
  info: Readme
});
stories.add('Tab selected', withState({
  selected: 'tab1'
}, function (store) {
  var tabs = [{
    id: 'tab1',
    label: 'Preferences'
  }, {
    id: 'tab2',
    label: 'Goals'
  }, {
    id: 'tab3',
    label: 'Photo'
  }, {
    id: 'tab4',
    label: 'Label 4'
  }];
  var knobs = {
    tabGroupName: 'default-tab-group',
    onChange: function onChange(id) {
      return changeChecked(store, id);
    },
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs: tabs
  };
  return React.createElement("div", {
    style: {
      padding: '20px'
    }
  }, React.createElement(TabBar, _extends({}, knobs, {
    surfaceColor: undefined
  })));
}), {
  info: Readme
});
stories.add('Tab disabled', withState({
  selected: 'tab1'
}, function (store) {
  var tabs = [{
    id: 'tab1',
    label: 'Selected & Disabled',
    isDisabled: true
  }, {
    id: 'tab2',
    label: 'Disabled',
    isDisabled: true
  }, {
    id: 'tab3',
    label: 'Available'
  }, {
    id: 'tab4',
    label: 'Label 4'
  }];
  var knobs = {
    tabGroupName: 'default-tab-group',
    onChange: function onChange(id) {
      return changeChecked(store, id);
    },
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs: tabs
  };
  return React.createElement("div", {
    style: {
      padding: '20px'
    }
  }, React.createElement(TabBar, knobs));
}), {
  info: Readme
});
stories.add('Overflowing', withState({
  selected: undefined
}, function (store) {
  var tabs = [{
    id: 'tab1',
    label: 'Preferences'
  }, {
    id: 'tab2',
    label: 'Goals'
  }, {
    id: 'tab3',
    label: 'Photo'
  }, {
    id: 'tab4',
    label: 'Label 4'
  }, {
    id: 'tab5',
    label: 'Label 5'
  }, {
    id: 'tab6',
    label: 'Label 6'
  }, {
    id: 'tab7',
    label: 'Label 7'
  }, {
    id: 'tab8',
    label: 'Label bla bla blaaaaa blaaaaaaaaa 8'
  }, {
    id: 'tab9',
    label: 'Label 9'
  }, {
    id: 'tab10',
    label: 'Label 10'
  }, {
    id: 'tab11',
    label: 'Label 11'
  }, {
    id: 'tab12',
    label: 'Label 12'
  }, {
    id: 'tab13',
    label: 'Label 13'
  }, {
    id: 'tab14',
    label: 'Label 14'
  }, {
    id: 'tab15',
    label: 'Label 15'
  }, {
    id: 'tab16',
    label: 'Label 16'
  }, {
    id: 'tab17',
    label: 'Label 17'
  }, {
    id: 'tab18',
    label: 'Label 18'
  }, {
    id: 'tab19',
    label: 'Label 19'
  }];
  var knobs = {
    tabGroupName: 'default-tab-group',
    onChange: function onChange(id) {
      return changeChecked(store, id);
    },
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs: tabs
  };
  return React.createElement("div", {
    style: {
      padding: '20px'
    }
  }, React.createElement(TabBar, knobs));
}), {
  info: Readme
});
stories.add('Overflowing and selected', withState({
  selected: 'tab13'
}, function (store) {
  var tabs = [{
    id: 'tab1',
    label: 'Preferences'
  }, {
    id: 'tab2',
    label: 'Goals'
  }, {
    id: 'tab3',
    label: 'Photo'
  }, {
    id: 'tab4',
    label: 'Label 4'
  }, {
    id: 'tab5',
    label: 'Label 5'
  }, {
    id: 'tab6',
    label: 'Label 6'
  }, {
    id: 'tab7',
    label: 'Label 7'
  }, {
    id: 'tab8',
    label: 'Label bla bla blaaaaa blaaaaaaaaa 8'
  }, {
    id: 'tab9',
    label: 'Label 9'
  }, {
    id: 'tab10',
    label: 'Label 10'
  }, {
    id: 'tab11',
    label: 'Label 11'
  }, {
    id: 'tab12',
    label: 'Label 12'
  }, {
    id: 'tab13',
    label: 'Label 13'
  }, {
    id: 'tab14',
    label: 'Label 14'
  }, {
    id: 'tab15',
    label: 'Label 15'
  }, {
    id: 'tab16',
    label: 'Label 16'
  }, {
    id: 'tab17',
    label: 'Label 17'
  }, {
    id: 'tab18',
    label: 'Label 18'
  }, {
    id: 'tab19',
    label: 'Label 19'
  }];
  var knobs = {
    tabGroupName: 'default-tab-group',
    onChange: function onChange(id) {
      return changeChecked(store, id);
    },
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs: tabs
  };
  return React.createElement("div", {
    style: {
      padding: '20px'
    }
  }, React.createElement(TabBar, knobs));
}), {
  info: Readme
});
stories.add('Stretched Height', withState({
  selected: undefined
}, function (store) {
  var tabs = [{
    id: 'tab1',
    label: 'Buttons'
  }, {
    id: 'tab2',
    label: 'are'
  }, {
    id: 'tab3',
    label: 'centered'
  }, {
    id: 'tab4',
    label: 'still!'
  }];
  var knobs = {
    tabGroupName: 'default-tab-group',
    onChange: function onChange(id) {
      return changeChecked(store, id);
    },
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs: tabs
  };
  return React.createElement("div", {
    style: {
      padding: '20px'
    }
  }, React.createElement(TabBar, _extends({
    style: {
      height: 300
    }
  }, knobs)));
}), {
  info: Readme
});
stories.add('With black Alternate theme', withState({
  selected: undefined
}, function (store) {
  var tabs = [{
    id: 'tab1',
    label: 'Preferences'
  }, {
    id: 'tab2',
    label: 'Goals'
  }, {
    id: 'tab3',
    label: 'Photo'
  }, {
    id: 'tab4',
    label: 'Label 4'
  }];
  var knobs = {
    tabGroupName: 'default-tab-group',
    onChange: function onChange(id) {
      return changeChecked(store, id);
    },
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs: tabs,
    enableSemanticTheme: true
  };
  return React.createElement(ThemeProvider, {
    theme: blackExampleTheme
  }, React.createElement("div", {
    style: {
      padding: '20px'
    }
  }, React.createElement(TabBar, knobs)));
}), {
  info: Readme
});
stories.add('Tab disabled with black Alternate theme', withState({
  selected: 'tab1'
}, function (store) {
  var tabs = [{
    id: 'tab1',
    label: 'Selected & Disabled',
    isDisabled: true
  }, {
    id: 'tab2',
    label: 'Disabled',
    isDisabled: true
  }, {
    id: 'tab3',
    label: 'Available'
  }, {
    id: 'tab4',
    label: 'Label 4'
  }];
  var knobs = {
    tabGroupName: 'default-tab-group',
    onChange: function onChange(id) {
      return changeChecked(store, id);
    },
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs: tabs,
    enableSemanticTheme: true
  };
  return React.createElement(ThemeProvider, {
    theme: blackExampleTheme
  }, React.createElement("div", {
    style: {
      padding: '20px'
    }
  }, React.createElement(TabBar, knobs)));
}), {
  info: Readme
});
stories.add('Overflowing with black Alternate theme', withState({
  selected: undefined
}, function (store) {
  var tabs = [{
    id: 'tab1',
    label: 'Preferences'
  }, {
    id: 'tab2',
    label: 'Goals'
  }, {
    id: 'tab3',
    label: 'Photo'
  }, {
    id: 'tab4',
    label: 'Label 4'
  }, {
    id: 'tab5',
    label: 'Label 5'
  }, {
    id: 'tab6',
    label: 'Label 6'
  }, {
    id: 'tab7',
    label: 'Label 7'
  }, {
    id: 'tab8',
    label: 'Label bla bla blaaaaa blaaaaaaaaa 8'
  }, {
    id: 'tab9',
    label: 'Label 9'
  }, {
    id: 'tab10',
    label: 'Label 10'
  }, {
    id: 'tab11',
    label: 'Label 11'
  }, {
    id: 'tab12',
    label: 'Label 12'
  }, {
    id: 'tab13',
    label: 'Label 13'
  }, {
    id: 'tab14',
    label: 'Label 14'
  }, {
    id: 'tab15',
    label: 'Label 15'
  }, {
    id: 'tab16',
    label: 'Label 16'
  }, {
    id: 'tab17',
    label: 'Label 17'
  }, {
    id: 'tab18',
    label: 'Label 18'
  }, {
    id: 'tab19',
    label: 'Label 19'
  }];
  var knobs = {
    tabGroupName: 'default-tab-group',
    onChange: function onChange(id) {
      return changeChecked(store, id);
    },
    selected: store.state.selected,
    elevation: select('Elevation', elevations, 2),
    noBorder: boolean('noBorder', true),
    tabs: tabs,
    enableSemanticTheme: true
  };
  return React.createElement(ThemeProvider, {
    theme: blackExampleTheme
  }, React.createElement("div", {
    style: {
      padding: '20px'
    }
  }, React.createElement(TabBar, knobs)));
}), {
  info: Readme
});
//# sourceMappingURL=TabBar.story.js.map