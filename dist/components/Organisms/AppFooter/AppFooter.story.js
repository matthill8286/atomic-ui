function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { storiesOf } from '@storybook/react';
import React from 'react';
import { AppFooter } from "./AppFooter";
import { navigationListMockItems } from "../AppHeader/AppHeader.story";
storiesOf('Design System/Organisms/AppFooter', module).add('Default', function () {
  return React.createElement(AppFooter, {
    logoUrl: "https://wac-cdn.atlassian.com/dam/jcr:e9ef90f9-c84a-4cba-af2f-9aa7d683ede3/Jira%20Integration.svg?cdnVersion=1324",
    instagramLink: 'instagram.com',
    twitterLink: 'twitter.co.uk',
    facebookLink: 'facebook.com',
    youtubeLink: 'youtube.co.uk',
    text: "Digital Agility powered by Filtered",
    links: _toConsumableArray(navigationListMockItems || [])
  });
});
//# sourceMappingURL=AppFooter.story.js.map