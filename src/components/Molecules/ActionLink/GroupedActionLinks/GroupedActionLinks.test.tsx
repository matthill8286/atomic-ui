import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { ActionLink } from '../ActionLink'
import { GroupedActionLinks, GroupedActionLinksProps } from './GroupedActionLinks'
import { actionLinks } from './GroupedActionLinks.mocks'

describe('<GroupedActionLinks /> component', () => {
  const props: GroupedActionLinksProps = {
    links: actionLinks,
    fontSize: 'sm',
    padding: '0 sm',
    color: 'grey4',
    flexed: false,
  }

  const defaultGroupedActionLinks = <GroupedActionLinks {...props} />

  test('should render with 2 <ActionLink /> children', () => {
    const groupedActionLinks = renderWithTheme(defaultGroupedActionLinks)
    const wrapper = mountWithTheme(defaultGroupedActionLinks)
    expect(wrapper).toHaveLength(1)
    expect(wrapper.find(ActionLink)).toHaveLength(2)
    expect(groupedActionLinks).toMatchSnapshot()
  })
})
