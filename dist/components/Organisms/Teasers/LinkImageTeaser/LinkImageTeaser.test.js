function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LinkImageTeaser } from "./LinkImageTeaser";
import { ThemeProvider } from 'styled-components';
import { alternateTheme } from "../../../..";
import { MemoryRouter } from 'react-router-dom';
var linkProps = {
  images: {
    lg: 'lgimage',
    md: 'mdImage',
    sm: 'smImage',
    xl: 'xlImage'
  },
  link: {
    to: '/link'
  }
};
describe('LinkImageTeaser', function () {
  var onClickFunction = jest.fn();
  test('should call click handler on a click event', function () {
    var _render = render(React.createElement(ThemeProvider, {
      theme: alternateTheme
    }, React.createElement(MemoryRouter, null, React.createElement(LinkImageTeaser, _extends({}, linkProps, {
      onClick: onClickFunction
    }))))),
        container = _render.container,
        getByTestId = _render.getByTestId;

    var teaserWrapper = getByTestId('link-wrapped-teaser');
    fireEvent.click(teaserWrapper);
    expect(onClickFunction).toBeCalled();
  });
  test('should contain an anchor wrapping Teaser', function () {
    var _render2 = render(React.createElement(ThemeProvider, {
      theme: alternateTheme
    }, React.createElement(MemoryRouter, null, React.createElement(LinkImageTeaser, _extends({}, _objectSpread(_objectSpread({}, linkProps), {}, {
      link: {
        href: 'http://absolute.com'
      }
    }), {
      onClick: onClickFunction
    }))))),
        container = _render2.container,
        getByTestId = _render2.getByTestId;

    var teaserWrapper = getByTestId('anchor-wrapped-teaser');
    fireEvent.click(teaserWrapper);
    expect(teaserWrapper).toBeDefined();
  });
});
//# sourceMappingURL=LinkImageTeaser.test.js.map