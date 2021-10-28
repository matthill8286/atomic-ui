import React from 'react';
import { Link } from "../../Atoms/Link";
import { renderWithTheme } from "../../../testRenderer";
import { TopBar } from "./TopBar";
var entries = ['Versandkostenfrei', '0% Finanzierung', 'Abholung im Markt', React.createElement(Link, {
  href: "www.google.de",
  inline: true,
  color: "white",
  decorationColor: "white",
  key: "link"
}, "Test")];
describe('TopBar', function () {
  it('renders correctly', function () {
    var tree = renderWithTheme(React.createElement(TopBar, {
      entries: entries
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=TopBar.test.js.map