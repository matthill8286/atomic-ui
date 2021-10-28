import React from 'react';
import { renderWithTheme } from "../../../testRenderer";
import { VideoPlayerCore } from "./VideoPlayerCore";
describe('VideoPlayer', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(VideoPlayerCore, {
      url: "https://www.youtube.com/embed/-BdbiZcNBXg"
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=VideoPlayer.test.js.map