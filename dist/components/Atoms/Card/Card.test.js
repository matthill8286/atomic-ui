import * as React from 'react';
import { media } from "../../../styles";
import { renderWithTheme } from "../../../testRenderer";
import { Card } from "./CardV2";
import { handlePadding } from "./Card.styled";
describe('Card', function () {
  var cardContent = 'Card ';
  it('Should render a Card', function () {
    var tree = renderWithTheme(React.createElement(Card, {
      elevation: 0
    }, cardContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a Card with shape', function () {
    var tree = renderWithTheme(React.createElement(Card, {
      elevation: 0,
      shape: "sharp"
    }, cardContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a Card with hover', function () {
    var tree = renderWithTheme(React.createElement(Card, {
      elevation: 0,
      elevationHover: 3
    }, cardContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a Card with no border on right', function () {
    var tree = renderWithTheme(React.createElement(Card, {
      elevation: 0,
      noBorder: "right"
    }, cardContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a Card with custom shape', function () {
    var tree = renderWithTheme(React.createElement(Card, {
      elevation: 0,
      shape: {
        bottomLeft: 'sharp',
        bottomRight: 'sharp',
        topLeft: 'rounded-small',
        topRight: 'rounded-small'
      }
    }, cardContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a Card with padding, noBorder, shape, surface', function () {
    var tree = renderWithTheme(React.createElement(Card, {
      padding: {
        top: 'lg',
        bottom: 'lg',
        left: 'md',
        right: 'md'
      },
      elevation: 0,
      elevationHover: 0,
      noBorder: [],
      shape: {
        bottomLeft: 'sharp',
        bottomRight: 'sharp',
        topLeft: 'rounded-small',
        topRight: 'rounded-small'
      },
      surface: 'white'
    }, cardContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a Card with elevation', function () {
    var tree = renderWithTheme(React.createElement(Card, {
      elevation: 1
    }, cardContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a Card with surface', function () {
    var tree = renderWithTheme(React.createElement(Card, {
      elevation: 0,
      surface: "white"
    }, cardContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a Card with padding', function () {
    var tree = renderWithTheme(React.createElement(Card, {
      elevation: 0,
      padding: "xxs"
    }, cardContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a Card with custom padding', function () {
    var tree = renderWithTheme(React.createElement(Card, {
      elevation: 0,
      padding: {
        top: 'md',
        bottom: 'md',
        left: 'md',
        right: 'md'
      }
    }, cardContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a Card with badges', function () {
    var tree = renderWithTheme(React.createElement(Card, {
      elevation: 0,
      badges: [{
        id: 0,
        name: 'New'
      }, {
        id: 1,
        name: '100% Free'
      }],
      badgeActionType: "prominent"
    }, cardContent));
    expect(tree).toMatchSnapshot();
  });
  it('Should render a Card with badges and hover effect', function () {
    var tree = renderWithTheme(React.createElement(Card, {
      elevation: 0,
      elevationHover: 4,
      shape: "rounded-small",
      display: "flex",
      badges: [{
        id: 0,
        name: 'New'
      }, {
        id: 1,
        name: '100% Free'
      }],
      badgeActionType: "prominent"
    }, cardContent));
    expect(tree).toMatchSnapshot();
  });
});
var themeSpacingBase = {
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '40px',
  xxl: '48px',
  xxxl: '56px',
  xxxxl: '64px'
};
describe('handlePadding(...)', function () {
  it('should return the padding for all sides (sm)', function () {
    var result = handlePadding(themeSpacingBase, 'sm');
    expect(result).toBe('padding: 16px;');
  });
  it('should return the padding only for top (sm)', function () {
    var padding = {
      top: 'sm'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe('padding-top: 16px;');
  });
  it('should return the padding only for right (lg)', function () {
    var padding = {
      right: 'lg'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe('padding-right: 32px;');
  });
  it('should return the padding only for bottom (xxs)', function () {
    var padding = {
      bottom: 'xxs'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe('padding-bottom: 4px;');
  });
  it('should return the padding only for left (xl)', function () {
    var padding = {
      left: 'xl'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe('padding-left: 40px;');
  });
  it('should return the padding only for left and top (xs, xxl)', function () {
    var padding = {
      left: 'xs',
      top: 'xxl'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe('padding-top: 48px;padding-left: 8px;');
  });
  it('should return separate paddings for all sides (top: md, right: sm, bottom: xs, left: md)', function () {
    var padding = {
      left: 'md',
      right: 'sm',
      top: 'md',
      bottom: 'xs'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe('padding-top: 24px;padding-right: 16px;padding-bottom: 8px;padding-left: 24px;');
  });
  it('should return a padding media-query for all sides (mobile|sm)', function () {
    var padding = {
      mobile: 'sm'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe(media.mobile + ' {padding: 16px; };');
  });
  it('should return a padding media-query for all sides (tablet|md)', function () {
    var padding = {
      tablet: 'md'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe(media.tablet + ' {padding: 24px; };');
  });
  it('should return a padding media-query for all sides (desktop|lg)', function () {
    var padding = {
      desktop: 'lg'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe(media.desktop + ' {padding: 32px; };');
  });
  it('should return a padding media-query for all sides (mobile|xs & desktop|xl)', function () {
    var padding = {
      mobile: 'xs',
      desktop: 'xl'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe(media.mobile + ' {padding: 8px; };' + media.desktop + ' {padding: 40px; };');
  });
  it('should return a padding media-query for all sides (mobile|tablet|desktop)', function () {
    var padding = {
      mobile: 'xxs',
      tablet: 'xl',
      desktop: 'xxl'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe(media.mobile + ' {padding: 4px; };' + media.tablet + ' {padding: 40px; };' + media.desktop + ' {padding: 48px; };');
  });
  it('should return a padding media-query for all sides but override top', function () {
    var padding = {
      mobile: 'xxs',
      tablet: 'xl',
      desktop: 'xxl',
      top: 'sm'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe(media.mobile + ' {padding: 4px; padding-top: 16px;};' + media.tablet + ' {padding: 40px; padding-top: 16px;};' + media.desktop + ' {padding: 48px; padding-top: 16px;};');
  });
  it('should return a padding media-query for all sides but override left', function () {
    var padding = {
      mobile: 'xxs',
      tablet: 'xl',
      desktop: 'xxl',
      left: 'md'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe(media.mobile + ' {padding: 4px; padding-left: 24px;};' + media.tablet + ' {padding: 40px; padding-left: 24px;};' + media.desktop + ' {padding: 48px; padding-left: 24px;};');
  });
  it('should return a padding media-query for all sides but override right and bottom', function () {
    var padding = {
      mobile: 'xxs',
      tablet: 'xl',
      desktop: 'xxl',
      right: 'sm',
      bottom: 'md'
    };
    var result = handlePadding(themeSpacingBase, padding);
    expect(result).toBe(media.mobile + ' {padding: 4px; padding-right: 16px;padding-bottom: 24px;};' + media.tablet + ' {padding: 40px; padding-right: 16px;padding-bottom: 24px;};' + media.desktop + ' {padding: 48px; padding-right: 16px;padding-bottom: 24px;};');
  });
});
//# sourceMappingURL=Card.test.js.map