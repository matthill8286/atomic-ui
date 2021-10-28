import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { SkeletonBlockItem } from "./SkeletonBlockItem";
import { SkeletonInlineItem } from "./SkeletonInlineItem";
describe('Skeleton', function () {
  describe('SkeletonBlockItem', function () {
    it('should render', function () {
      var wrapper = renderWithTheme(React.createElement(SkeletonBlockItem, {
        height: "200px"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should render with height', function () {
      var wrapper = renderWithTheme(React.createElement(SkeletonBlockItem, {
        height: "200px",
        width: "100%"
      }));
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('SkeletonInlineItem', function () {
    it('should render', function () {
      var wrapper = renderWithTheme(React.createElement(SkeletonInlineItem, {
        text: "Lorem Ipsum"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should render with font-size', function () {
      var wrapper = renderWithTheme(React.createElement(SkeletonInlineItem, {
        text: "Lorem Ipsum",
        fontSize: "xxl"
      }));
      expect(wrapper).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Skeleton.test.js.map