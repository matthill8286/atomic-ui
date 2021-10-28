import React from 'react';
import { renderWithThemeAndRouter } from "../../../testRenderer";
import { Breadcrumb } from "./Breadcrumb";
var paths = [{
  name: 'Dashboard',
  link: ''
}, {
  name: 'Learning Asset',
  link: ''
}, {
  name: 'Learning Asset: Watch about Genomes',
  link: ''
}];
describe('Heading', function () {
  it('renders correctly', function () {
    var tree = renderWithThemeAndRouter(React.createElement(Breadcrumb, {
      paths: paths
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=Breadcrumb.test.js.map