import React from 'react';
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { FeatureList, ListWrapper } from "./FeatureList";
describe('Meta Feature list', function () {
  var inputProps;
  beforeEach(function () {
    inputProps = [{
      label: 'Provider',
      value: 'Youtube'
    }, {
      label: 'Primary competency',
      value: 'Digital Marketing'
    }, {
      label: 'Type',
      value: 'Article'
    }, {
      label: 'Length',
      value: '16 minutes'
    }];
  });
  it('renders feature list', function () {
    var wrapper = renderWithTheme(React.createElement(FeatureList, {
      list: inputProps
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('renders feature list with 3 children', function () {
    var component = mountWithTheme(React.createElement(FeatureList, {
      list: inputProps.slice(0, 3)
    }));
    var find = component.find(ListWrapper);
    expect(find.length).toBe(3);
  });
  it('removes the entry with no valid label', function () {
    var listWithMissingLabel = [{
      label: '',
      value: 'Youtube'
    }, {
      label: 'Type',
      value: 'Article'
    }, {
      label: 'Primary competency',
      value: 'Digital Marketing'
    }, {
      label: 'Type',
      value: 'Article'
    }];
    var component = mountWithTheme(React.createElement(FeatureList, {
      list: listWithMissingLabel
    }));
    var child = component.childAt(0);
    var childProps = child.props().list;
    expect(childProps).toStrictEqual(listWithMissingLabel);
    expect(childProps.length).toBe(4);
    var find = component.find(ListWrapper);
    expect(find.length).toBe(3);
  });
});
//# sourceMappingURL=FeatureList.test.js.map