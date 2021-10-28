import React from 'react';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { TabBar } from "./TabBar";
import { TabItem } from "./TabItem";
export var tabs = [{
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
describe('TabBar', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(TabBar, {
      tabGroupName: "first",
      tabs: tabs
    }));
    expect(tree).toMatchSnapshot();
  });
  it('render 4 tabs', function () {
    var component = mountWithTheme(React.createElement(TabBar, {
      tabGroupName: "first",
      tabs: tabs
    }));
    var selected = component.find(TabItem);
    expect(selected).toHaveLength(4);
  });
  it('render with a selected tab', function () {
    var tree = renderWithTheme(React.createElement(TabBar, {
      tabGroupName: "first",
      tabs: tabs,
      selected: "tab1"
    }));
    expect(tree).toMatchSnapshot();
  });
  it('triggers onChange event', function () {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    var onChange = jest.fn();
    var comp = mountWithTheme(React.createElement(TabBar, {
      tabGroupName: "first",
      tabs: tabs,
      onChange: onChange
    }));
    var first = comp.find(TabItem).first();
    first.simulate('click');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('should not trigger onChange event when user clicks a disabled Tag', function () {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    var twoTabs = [{
      id: 'tab1',
      label: 'Preferences',
      isDisabled: true
    }, {
      id: 'tab2',
      label: 'Goals'
    }];
    var onChange = jest.fn();
    var comp = mountWithTheme(React.createElement(TabBar, {
      tabGroupName: "first",
      tabs: twoTabs,
      onChange: onChange
    }));
    var first = comp.find(TabItem).first();
    first.simulate('click');
    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
describe('TabItem', function () {
  it('renders basic', function () {
    var comp = renderWithTheme(React.createElement(TabItem, {
      id: "1",
      label: "Preferences",
      tabGroupName: "first",
      onClick: jest.fn()
    }));
    expect(comp).toMatchSnapshot();
  });
  it('render the label', function () {
    var comp = mountWithTheme(React.createElement(TabItem, {
      id: "1",
      label: "Preferences",
      tabGroupName: "first",
      onClick: jest.fn()
    }));
    expect(comp.text()).toEqual('Preferences');
  });
  it('render with a selected tab', function () {
    var comp = renderWithTheme(React.createElement(TabItem, {
      id: "1",
      label: "Preferences",
      tabGroupName: "first",
      onClick: jest.fn(),
      isSelected: true
    }));
    expect(comp).toMatchSnapshot();
  });
  it('render with a disabled tab', function () {
    var onClick = jest.fn();
    var comp = mountWithTheme(React.createElement(TabItem, {
      id: "1",
      label: "Preferences",
      tabGroupName: "first",
      onClick: onClick,
      isDisabled: true
    }));
    expect(comp).toMatchSnapshot();
    comp.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it('triggers onClick event', function () {
    var onClick = jest.fn();
    var comp = mountWithTheme(React.createElement(TabItem, {
      id: "1",
      label: "Preferences",
      tabGroupName: "first",
      onClick: onClick
    }));
    comp.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=TabBar.test.js.map