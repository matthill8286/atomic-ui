function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Illustration01, Illustration02, Illustration03 } from '@excelwithbusiness/webmobile-svg-library';
import { CallToActionPanel } from "./CallToActionPanel";
import { newAssetMocks } from "../AssetTile/elements/mockAsset";
var imageUrls = {
  normal: 'https://media.graphcms.com/resize=fit:crop,height:280,width:450/tbT0Znk2RJmb3d6RtCLm',
  small: 'https://media.graphcms.com/resize=fit:crop,height:150,width:300/tbT0Znk2RJmb3d6RtCLm',
  big: 'https://media.graphcms.com/resize=fit:crop,height:300,width:600/tbT0Znk2RJmb3d6RtCLm'
};
var CustomIcon = {
  Achievement: 'achievement',
  Analytics: 'analytics',
  Analyzing: 'analyzing'
};
var svgs = {
  achievement: React.createElement(Illustration03, {
    style: {
      display: 'flex'
    }
  }),
  analytics: React.createElement(Illustration01, {
    style: {
      display: 'flex'
    }
  }),
  analyzing: React.createElement(Illustration02, {
    style: {
      display: 'flex'
    }
  })
};

var defaultKnobs = function defaultKnobs() {
  var svgName = select('icon', CustomIcon, CustomIcon.Achievement);
  var showReadMore = boolean('Show Read More', true);
  var svg = svgs[svgName];
  return {
    svgName: svgName,
    svg: svg,
    showReadMore: showReadMore,
    showMore: {
      lineHeight: 18,
      numOfLines: 5,
      showMoreText: 'Show More',
      showLessText: 'Show Less',
      labelAlignment: 'flex-end'
    },
    element: {
      headline: text('Headline', 'What we offer health care professionals'),
      buttonLabel: text('Button label', 'Clicking')
    },
    richTextCopy: text('Copy text', 'The European Society for Paediatric Gastroenterology Hepatology and Nutrition (ESPGHAN) is a multi-professional organisation whose aim is to promote the health of children with special attention to the gastrointestinal tract, liver and nutritional status, through knowledge creation, the dissemination of science based information, the promotion of best practice in the delivery of care and the provision of high quality education for paediatric gastroenterology, hepatology and nutrition professionals in Europe and beyond.'),
    asset: newAssetMocks[0],
    alignment: select('Alignment', ['right', 'left'], 'left')
  };
};

var image = {
  alt: 'this is the alt text',
  url: imageUrls.normal,
  mobileSmall: {
    url: imageUrls.small
  },
  mobileBig: {
    url: imageUrls.big
  }
};
storiesOf('Design System/Organisms/CallToActionPanel', module).add('Default Image', function () {
  return React.createElement(CallToActionPanel, _extends({}, defaultKnobs(), {
    image: image
  }));
}).add('Default Icon', function () {
  return React.createElement(CallToActionPanel, defaultKnobs());
}).add('With Asset', function () {
  return React.createElement(CallToActionPanel, _extends({
    showFeatured: true,
    svg: undefined,
    image: undefined
  }, defaultKnobs()));
}).add('2 alternate rows', function () {
  return React.createElement(React.Fragment, null, React.createElement(CallToActionPanel, _extends({}, defaultKnobs(), {
    alignment: "right",
    image: image
  })), React.createElement(CallToActionPanel, _extends({}, defaultKnobs(), {
    alignment: "left",
    image: image
  })));
}).add('passing element', function () {
  return React.createElement(React.Fragment, null, React.createElement(CallToActionPanel, _extends({}, defaultKnobs(), {
    alignment: "right",
    image: image,
    richTextCopy: React.createElement("p", null, "testing ", React.createElement("b", null, "this"))
  })));
});
//# sourceMappingURL=CallToActionPanel.story.js.map