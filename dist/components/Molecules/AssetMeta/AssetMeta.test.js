import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { AssetMeta } from "./AssetMeta";
describe('Asset page meta', function () {
  it('renders asset meta', function () {
    var wrapper = renderWithTheme(React.createElement(AssetMeta, {
      bookmarked: false,
      buttonTextLaunch: "Launch",
      buttonTextComplete: "Mark complete",
      shareHandler: function shareHandler() {
        return jest.fn();
      },
      bookmarkHandler: function bookmarkHandler() {
        return jest.fn();
      },
      savePlaylistHandler: function savePlaylistHandler() {
        return jest.fn();
      },
      list: [{
        label: 'Provider',
        value: 'Youtube'
      }, {
        label: 'Primary competency',
        value: 'Digital Marketing'
      }, {
        label: 'Type',
        value: 'Article'
      }, {
        label: 'Length',
        value: '16 minutes'
      }],
      competencyCopy: "5 competencies featured in this learning asset:",
      tags: [{
        text: 'CREATIVITY',
        href: '#'
      }, {
        text: 'STORYTELLIGN',
        href: '#'
      }, {
        text: 'DESIGN',
        href: '#'
      }, {
        text: 'WRITING',
        href: '#'
      }, {
        text: 'BRAINSTORMING',
        href: '#'
      }]
    }));
    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=AssetMeta.test.js.map