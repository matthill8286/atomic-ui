function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { action } from '@storybook/addon-actions';
import { boolean, optionsKnob as options, radios, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Icon } from "../../../Atoms/Icon";
import { Cell, Grid, Row } from "../../../Helper/Grid";
import { IconBookmarkOutlined } from "../../../../svgs";
import { StorybookRouterWrapper } from "../../../../utils/StorybookWrapper";
import { Teaser } from "./Teaser";
import { getTransformedImageVersion } from "../../../../utils/useGraphCmsImages";
var mockTeaserData = {
  headline: 'High standards require sensible processes',
  contentText: 'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.',
  image: getTransformedImageVersion('9mSN32ckQzORsQnMC7Zc'),
  altText: 'Teaser Picture1',
  mainLink: {
    to: '#',
    label: 'To the Moon!!'
  }
};
var mockTeaserData2 = {
  headline: 'Filtered Text!',
  contentText: 'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.',
  image: getTransformedImageVersion('SdO6Eo51RZucKUK83Um7'),
  altText: 'Teaser Picture2',
  mainLink: {
    to: '#',
    label: 'Can we filter??'
  }
};
var mockTeaserData3 = {
  headline: 'The last nights of Summer',
  contentText: 'Well, the answer is obvious: “He hasn’t died yet.” Fortunately, for us, Munger has kept on ticking.',
  mainLink: {
    to: '#',
    label: 'Lets get out of here!'
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
var orientations = {
  auto: 'auto',
  portrait: 'portrait'
};
var sizes = {
  auto: 'auto',
  small: 'small',
  large: 'large'
};
var colors = {
  none: undefined,
  primary: 'primary',
  secondary: 'secondary',
  grey1: 'grey1',
  grey2: 'grey2',
  grey3: 'grey3',
  grey4: 'grey4',
  grey5: 'grey5',
  black: 'black',
  white: 'white',
  success: 'success',
  alert: 'alert',
  error: 'error',
  info: 'info',
  selected: 'selected'
};
var actionTypes = {
  prominent: 'prominent',
  secondary: 'secondary'
};
var badges = [{
  id: 0,
  name: 'Sponsored',
  actionType: 'prominent'
}, {
  id: 1,
  name: 'Some other label'
}, {
  id: 2,
  name: 'A third label'
}];
storiesOf('Design System/Organisms/Teasers/Teaser', module).add('Default', function () {
  var knobs = function knobs() {
    var _mockTeaserData$conte, _mockTeaserData$mainL, _mockTeaserData$mainL2;

    return {
      headline: text('Headline', mockTeaserData.headline),
      withImagePadding: boolean('with image padding', false),
      contentText: text('Content Text', ((_mockTeaserData$conte = mockTeaserData.contentText) === null || _mockTeaserData$conte === void 0 ? void 0 : _mockTeaserData$conte.toString()) || ''),
      image: text('Image', mockTeaserData.image || ''),
      mainLink: {
        to: text('Link To', ((_mockTeaserData$mainL = mockTeaserData.mainLink) === null || _mockTeaserData$mainL === void 0 ? void 0 : _mockTeaserData$mainL.to) || ''),
        label: text('Link Label', ((_mockTeaserData$mainL2 = mockTeaserData.mainLink) === null || _mockTeaserData$mainL2 === void 0 ? void 0 : _mockTeaserData$mainL2.label) || '')
      },
      orientation: radios('Orientation', orientations, orientations[0]),
      badgeActionType: radios('Type', actionTypes, actionTypes[1]),
      size: radios('Size', sizes, sizes[0]),
      loading: boolean('loading', false)
    };
  };

  var withIcon = boolean('with icon', false);
  return React.createElement(StorybookRouterWrapper, null, React.createElement(Teaser, _extends({}, knobs(), {
    badges: badges,
    icon: withIcon ? React.createElement(Icon, null, React.createElement(IconBookmarkOutlined, null)) : undefined,
    onClick: action('click')
  })));
}).add('teasers in a grid', function () {
  var _mockTeaserData3$main;

  return React.createElement(StorybookRouterWrapper, null, React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, null, React.createElement(Teaser, {
    headline: mockTeaserData.headline,
    contentText: mockTeaserData.contentText,
    image: mockTeaserData.image,
    mainLink: mockTeaserData.mainLink,
    orientation: "portrait"
  })), React.createElement(Cell, null, React.createElement(Teaser, {
    headline: mockTeaserData2.headline,
    contentText: mockTeaserData2.contentText,
    image: mockTeaserData2.image,
    mainLink: mockTeaserData2.mainLink,
    orientation: "portrait"
  })), React.createElement(Cell, null, React.createElement(Teaser, {
    headline: mockTeaserData3.headline,
    contentText: mockTeaserData3.contentText,
    mainLink: {
      to: ((_mockTeaserData3$main = mockTeaserData3.mainLink) === null || _mockTeaserData3$main === void 0 ? void 0 : _mockTeaserData3$main.to) || ''
    },
    orientation: "portrait"
  })))));
}).add('teasers without image', function () {
  var _mockTeaserData$mainL3, _mockTeaserData$mainL4, _mockTeaserData$mainL5, _mockTeaserData$mainL6, _mockTeaserData$mainL7, _mockTeaserData$mainL8;

  var loading = boolean('Loading', false);
  var o = radios('Link Variants', {
    Link: 'withLink',
    'Link and LinkText': 'withLinkAndText',
    'without Link': 'withoutLink'
  }, 'withLink');
  var color = select('Color', colors, colors[0]);
  var decorationColor = select('Decoration Color', colors, colors[0]);
  return React.createElement(StorybookRouterWrapper, null, React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, null, React.createElement(Teaser, {
    headline: mockTeaserData.headline,
    contentText: mockTeaserData.contentText,
    mainLink: o.includes('withLink') ? {
      to: ((_mockTeaserData$mainL3 = mockTeaserData.mainLink) === null || _mockTeaserData$mainL3 === void 0 ? void 0 : _mockTeaserData$mainL3.to) || '',
      label: o === 'withLinkAndText' ? (_mockTeaserData$mainL4 = mockTeaserData.mainLink) === null || _mockTeaserData$mainL4 === void 0 ? void 0 : _mockTeaserData$mainL4.label : undefined
    } : undefined,
    orientation: "portrait",
    color: color,
    decorationColor: decorationColor,
    loading: loading
  })), React.createElement(Cell, null, React.createElement(Teaser, {
    headline: mockTeaserData.headline,
    contentText: mockTeaserData.contentText,
    loading: loading,
    mainLink: o.includes('withLink') ? {
      to: ((_mockTeaserData$mainL5 = mockTeaserData.mainLink) === null || _mockTeaserData$mainL5 === void 0 ? void 0 : _mockTeaserData$mainL5.to) || '',
      label: o === 'withLinkAndText' ? (_mockTeaserData$mainL6 = mockTeaserData.mainLink) === null || _mockTeaserData$mainL6 === void 0 ? void 0 : _mockTeaserData$mainL6.label : undefined
    } : undefined,
    orientation: "portrait",
    color: color,
    decorationColor: decorationColor,
    icon: React.createElement(Icon, null, React.createElement(IconBookmarkOutlined, null))
  })), React.createElement(Cell, null, React.createElement(Teaser, {
    headline: mockTeaserData3.headline,
    contentText: mockTeaserData3.contentText,
    loading: loading,
    mainLink: o.includes('withLink') ? {
      to: ((_mockTeaserData$mainL7 = mockTeaserData.mainLink) === null || _mockTeaserData$mainL7 === void 0 ? void 0 : _mockTeaserData$mainL7.to) || '',
      label: o === 'withLinkAndText' ? (_mockTeaserData$mainL8 = mockTeaserData.mainLink) === null || _mockTeaserData$mainL8 === void 0 ? void 0 : _mockTeaserData$mainL8.label : undefined
    } : undefined,
    color: color,
    decorationColor: decorationColor,
    orientation: "portrait"
  })))));
}).add('teasers foldable', function () {
  var optionsObj = {
    display: 'radio'
  };
  var o = options('Foldable', {
    Always: 'always',
    'Mobile only': 'mobile',
    Never: 'never'
  }, 'always', optionsObj);
  return React.createElement(StorybookRouterWrapper, null, React.createElement(Teaser, {
    headline: mockTeaserData.headline,
    contentText: mockTeaserData.contentText,
    mainLink: mockTeaserData.mainLink,
    orientation: "portrait",
    foldable: o
  }), React.createElement("div", {
    style: {
      height: 20
    }
  }), React.createElement(Teaser, {
    headline: 'Without main link',
    contentText: mockTeaserData.contentText,
    orientation: "portrait",
    foldable: o
  }));
}).add('teasers with link list', function () {
  return React.createElement(StorybookRouterWrapper, null, React.createElement(Teaser, {
    headline: mockTeaserData4.headline,
    mainLink: mockTeaserData4.mainLink,
    linkList: mockTeaserData4.linkList,
    orientation: "portrait",
    foldable: 'always'
  }));
}).add('teasers with children', function () {
  return React.createElement(StorybookRouterWrapper, null, React.createElement(Teaser, {
    headline: mockTeaserData4.headline,
    mainLink: mockTeaserData4.mainLink,
    linkList: mockTeaserData4.linkList,
    orientation: "portrait",
    foldable: 'always'
  }, React.createElement("p", null, " this is a children paragraph ")));
});
//# sourceMappingURL=Teaser.story.js.map