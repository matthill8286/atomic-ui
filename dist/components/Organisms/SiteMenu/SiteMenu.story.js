function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { action } from '@storybook/addon-actions';
import { number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from "../../Atoms/Button";
import { Heading } from "../../Atoms/Typography";
import { SiteMenu } from "./SiteMenu";
import { SiteMenuItems } from "./SiteMenu.mock";
var containerCSS = {
  height: '80vh',
  backgroundColor: 'silver',
  marginBottom: 30
};
var itemIds = SiteMenuItems.map(function (i) {
  return i.itemId;
});
storiesOf('Design System/Organisms/SiteMenu', module).add('Default', function () {
  return React.createElement(React.Fragment, null, React.createElement(SiteMenu, {
    menuItems: SiteMenuItems,
    surfaceColor: "white",
    scrollOffset: number('Scroll Offset', 140),
    onTracking: action('tracking'),
    activeItemId: select('Active Item', ['None'].concat(_toConsumableArray(itemIds)), 'None')
  }), SiteMenuItems.map(function (item, index) {
    return React.createElement("div", {
      id: item.itemId,
      style: containerCSS,
      key: item.title + index
    }, React.createElement(Heading, {
      scale: "level-1",
      margin: "sm xs"
    }, item.title));
  }));
}).add('Active Item', function () {
  return React.createElement(React.Fragment, null, React.createElement(SiteMenu, {
    menuItems: SiteMenuItems,
    scrollOffset: 140,
    surfaceColor: "white",
    onTracking: action('tracking'),
    activeItemId: "ratings"
  }), SiteMenuItems.map(function (item, index) {
    return React.createElement("div", {
      id: item.itemId,
      style: containerCSS,
      key: item.title + index
    }, React.createElement(Heading, {
      scale: "level-1",
      margin: "sm xs"
    }, item.title));
  }));
}).add('With Child Element', function () {
  return React.createElement(React.Fragment, null, React.createElement(SiteMenu, {
    menuItems: SiteMenuItems,
    scrollOffset: 140,
    surfaceColor: "white",
    onTracking: action('tracking'),
    activeItemId: "ratings"
  }, React.createElement(Button, {
    style: {
      alignSelf: 'center',
      whiteSpace: 'nowrap'
    },
    size: "sm"
  }, "I do things")), SiteMenuItems.map(function (item, index) {
    return React.createElement("div", {
      id: item.itemId,
      style: containerCSS,
      key: item.title + index
    }, React.createElement(Heading, {
      scale: "level-1",
      margin: "sm xs"
    }, item.title));
  }));
});
//# sourceMappingURL=SiteMenu.story.js.map