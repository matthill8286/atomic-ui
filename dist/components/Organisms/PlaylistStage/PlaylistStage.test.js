function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Link } from "../../Atoms/Link";
import { mountWithTheme, renderWithTheme } from "../../../testRenderer";
import { PlaylistStage } from "./PlaylistStage";
import { backlink, props } from "./PlaylistStage.mocks";
import { StyledBacklinkWrapper } from "./PlaylistStage.styled";
describe('<PlaylistStage />', function () {
  test.skip('Renders without error', function () {
    var tree = renderWithTheme(React.createElement(PlaylistStage, props));
    expect(tree).toMatchSnapshot();
  });
  describe('Backlink', function () {
    test('should be hidden by default', function () {
      var wrapper = mountWithTheme(React.createElement(PlaylistStage, props));
      expect(wrapper.find(StyledBacklinkWrapper)).toHaveLength(0);
    });
    test('should be visible when backlink prop provided', function () {
      var wrapper = mountWithTheme(React.createElement(PlaylistStage, _extends({}, props, {
        backlink: backlink
      })));
      expect(wrapper.find(StyledBacklinkWrapper)).toHaveLength(1);
      var link = wrapper.find(StyledBacklinkWrapper).find(Link);
      expect(link === null || link === void 0 ? void 0 : link.prop('href')).toEqual(backlink.link);
      expect(link === null || link === void 0 ? void 0 : link.contains(backlink.name)).toEqual(true);
    });
  });
});
//# sourceMappingURL=PlaylistStage.test.js.map