function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { MultiViewModal } from "./MultiViewModal";
import { MultiViewModalProvider, useMultiViewModalAction } from "./MultiViewModal.store";
import { MultiViewModalView } from "./MultiViewModalView";
import { Button } from "../../Atoms/Button";
import { Spacer } from "../../Atoms/Spacer";
import { Cell, FlexBox, Grid, Row } from "../../Helper";
import { CookieLayer } from "../CookieLayer";
import { HeadingFeatured, Typo } from "../../Atoms/Typography";
import { Link } from "../../Atoms/Link";
import { Card } from "../../Atoms/Card";
import { Accordion } from "../../Molecules/Accordion";
export default {
  title: 'Design System/Organisms/Multi View Modal',
  component: MultiViewModal,
  args: {
    targetId: 'modal-portal'
  },
  decorators: [function (Story) {
    return React.createElement(MultiViewModalProvider, {
      homeViewId: "view-1"
    }, React.createElement(StoryContainer, null, React.createElement(Story, null)));
  }]
};
var mockCookieLayerLabels = {
  headline: 'Welcome to Filtered!!',
  infoText: "This website stores cookies on your computer. These cookies are used to improve your website experience and provide more personalized services to you, both on this website and through other media. To find out more about the cookies we use, see our Privacy Policy.",
  button: 'Accept',
  preferences: 'Manage Preferences'
};

var StoryContainer = function StoryContainer(_ref) {
  var children = _ref.children;

  var _useMultiViewModalAct = useMultiViewModalAction(),
      setActive = _useMultiViewModalAct.setActive,
      setView = _useMultiViewModalAct.setView;

  return React.createElement(React.Fragment, null, React.createElement("div", {
    id: "modal-portal"
  }), React.createElement(FlexBox, null, React.createElement(Button, {
    onClick: function onClick() {
      setView('view-1');
      setActive(true);
    }
  }, "Open Modal: view 1"), React.createElement(Spacer, {
    size: "sm",
    direction: "vertical"
  }), React.createElement(Button, {
    actionType: "secondary",
    onClick: function onClick() {
      setView('view-2');
      setActive(true);
    }
  }, "Open Modal: view 2")), children);
};

var Template = function Template(args) {
  var _useMultiViewModalAct2 = useMultiViewModalAction(),
      setView = _useMultiViewModalAct2.setView,
      close = _useMultiViewModalAct2.close;

  return React.createElement(MultiViewModal, _extends({}, args, {
    hideCloseButton: true,
    canClose: false,
    showBackButton: false
  }), React.createElement(MultiViewModalView, {
    id: "view-1"
  }, React.createElement(CookieLayer, {
    position: "relative",
    mainContent: mockCookieLayerLabels.headline,
    buttonAlignment: "center",
    primaryButtonProps: {
      buttonLabel: 'Manage Preferences',
      actionType: 'primary',
      onClick: function onClick() {
        return setView('view-2');
      }
    },
    secondaryButtonProps: {
      buttonLabel: 'Accept',
      actionType: 'outlined',
      onClick: close
    }
  })), React.createElement(MultiViewModalView, {
    id: "view-2"
  }, React.createElement(Grid, null, React.createElement(Row, {
    noMargin: true
  }, React.createElement(Cell, {
    columns: 12
  }, React.createElement(HeadingFeatured, null, "Your Preferences would be here/........"))), React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(HeadingFeatured, null, "Functional"), React.createElement(Card, {
    elevation: 0,
    padding: "md",
    shape: "rounded-small",
    margin: {
      top: 'xs',
      bottom: 'xs'
    }
  }, React.createElement(Typo, {
    tag: "span",
    fontSize: {
      desktop: 'sm',
      mobile: 'xs'
    }
  }, "We use cookies (and other similar technologies) to collect data to improve your experience on our site. By using our website, you\u2019re agreeing to the collection of data as described in our", ' ', React.createElement(Link, {
    inline: true,
    underline: false,
    href: "#",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "cookie statement"), "."), React.createElement(Accordion, {
    entries: [{
      details: 'expanded from sm',
      title: 'expanded from sm'
    }]
  })))))));
};

export var Default = Template.bind({});
//# sourceMappingURL=MultiViewModal.story.js.map