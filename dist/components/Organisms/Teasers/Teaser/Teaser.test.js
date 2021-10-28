import React from 'react';
import { mountWithThemeAndRouter, renderWithThemeAndRouter } from "../../../../testRenderer";
import { Teaser } from "./Teaser";
describe('Teaser', function () {
  var mockTeaserData = {
    headline: 'High standards require sensible processes',
    contentText: 'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.',
    image: 'public/images/teasers/project_teaser_600x450.jpg',
    altText: 'Teaser Picture1',
    mainLink: {
      to: '#',
      label: 'To the Moon!!'
    }
  };
  var mockTeaserData2 = {
    headline: 'Filtered Text!',
    contentText: 'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.',
    image: 'public/images/teasers/project_teaser_600x450.jpg',
    altText: 'Teaser Picture2',
    mainLink: {
      to: '#',
      label: 'Can we filter??'
    }
  };
  var mockTeaserData4 = {
    headline: 'Simon & Art Garfunkel',
    mainLink: {
      to: '#',
      label: 'All wishes come true'
    },
    linkList: [{
      to: '#',
      label: 'Sound of Silence'
    }, {
      to: '#',
      label: 'Homeward Bound'
    }, {
      to: '#',
      label: 'Crazy nights at Alamo'
    }]
  };
  describe('renders correctly', function () {
    it('as default teaser with badges', function () {
      var tree = renderWithThemeAndRouter(React.createElement(Teaser, {
        headline: mockTeaserData.headline,
        contentText: mockTeaserData.contentText,
        image: mockTeaserData.image,
        altText: mockTeaserData.altText,
        mainLink: mockTeaserData.mainLink,
        orientation: 'auto',
        badges: [{
          id: 0,
          name: 'Featured'
        }, {
          id: 1,
          name: 'Live!!!!'
        }]
      }));
      expect(tree).toMatchSnapshot();
    });
    it('as teaser with nothing but headline', function () {
      var tree = renderWithThemeAndRouter(React.createElement(Teaser, {
        headline: mockTeaserData.headline
      }));
      expect(tree).toMatchSnapshot();
    });
    it('as teaser in portrait mode', function () {
      var tree = renderWithThemeAndRouter(React.createElement(Teaser, {
        headline: mockTeaserData2.headline,
        contentText: mockTeaserData2.contentText,
        image: mockTeaserData2.image,
        altText: mockTeaserData2.altText,
        mainLink: mockTeaserData2.mainLink,
        orientation: "portrait"
      }));
      expect(tree).toMatchSnapshot();
    });
    it('as teaser without image', function () {
      var _mockTeaserData$mainL;

      var tree = renderWithThemeAndRouter(React.createElement(Teaser, {
        headline: mockTeaserData.headline,
        contentText: mockTeaserData.contentText,
        mainLink: {
          to: ((_mockTeaserData$mainL = mockTeaserData.mainLink) === null || _mockTeaserData$mainL === void 0 ? void 0 : _mockTeaserData$mainL.to) || ''
        },
        orientation: "portrait"
      }));
      expect(tree).toMatchSnapshot();
    });
    it('as foldable teaser ', function () {
      var tree = renderWithThemeAndRouter(React.createElement(Teaser, {
        headline: mockTeaserData.headline,
        contentText: mockTeaserData.contentText,
        mainLink: mockTeaserData.mainLink,
        orientation: "portrait",
        foldable: 'always'
      }));
      expect(tree).toMatchSnapshot();
    });
    it('as teaser with link list', function () {
      var tree = renderWithThemeAndRouter(React.createElement(Teaser, {
        headline: mockTeaserData4.headline,
        mainLink: mockTeaserData4.mainLink,
        linkList: mockTeaserData4.linkList,
        orientation: "portrait",
        foldable: 'mobile'
      }));
      expect(tree).toMatchSnapshot();
    });
    it('with custom headline tag', function () {
      var tree = renderWithThemeAndRouter(React.createElement(Teaser, {
        headline: mockTeaserData.headline,
        headlineTag: 'span'
      }));
      expect(tree).toMatchSnapshot();
    });
  });
  describe('event handling', function () {
    it('triggers click handler', function () {
      var clickHandler = jest.fn();
      var tree = mountWithThemeAndRouter(React.createElement(Teaser, {
        headline: mockTeaserData4.headline,
        mainLink: mockTeaserData4.mainLink,
        linkList: mockTeaserData4.linkList,
        orientation: "portrait",
        foldable: 'mobile',
        onClick: clickHandler
      }));
      tree.simulate('click');
      expect(clickHandler).toHaveBeenCalled();
    });
  });
});
//# sourceMappingURL=Teaser.test.js.map