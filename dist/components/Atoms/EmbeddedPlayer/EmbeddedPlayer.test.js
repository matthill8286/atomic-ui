import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { EmbeddedPlayer } from "./EmbeddedPlayer";
describe('EmbeddedPlayer', function () {
  it('shows a youtube video', function () {
    var tree = renderWithTheme(React.createElement(EmbeddedPlayer, {
      embedUrl: "https://www.youtube.com/embed/TeQ_TTyLGMs"
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=EmbeddedPlayer.test.js.map