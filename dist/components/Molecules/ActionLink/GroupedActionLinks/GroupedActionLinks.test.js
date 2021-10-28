import React from 'react';
import { mountWithTheme, renderWithTheme } from "../../../../testRenderer";
import { ActionLink } from "../ActionLink";
import { GroupedActionLinks } from "./GroupedActionLinks";
import { actionLinks } from "./GroupedActionLinks.mocks";
describe('<GroupedActionLinks /> component', function () {
  var props = {
    links: actionLinks,
    fontSize: 'sm',
    padding: '0 sm',
    color: 'grey4',
    flexed: false
  };
  var defaultGroupedActionLinks = React.createElement(GroupedActionLinks, props);
  test('should render with 2 <ActionLink /> children', function () {
    var groupedActionLinks = renderWithTheme(defaultGroupedActionLinks);
    var wrapper = mountWithTheme(defaultGroupedActionLinks);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(ActionLink)).toHaveLength(2);
    expect(groupedActionLinks).toMatchSnapshot();
  });
});
//# sourceMappingURL=GroupedActionLinks.test.js.map