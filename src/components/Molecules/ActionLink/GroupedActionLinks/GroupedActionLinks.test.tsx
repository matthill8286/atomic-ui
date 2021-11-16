import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { GroupedActionLinks, GroupedActionLinksProps } from './'
import { ActionLink } from '..'
import { actionLinks } from './GroupedActionLinks.mocks'

describe('<GroupedActionLinks /> component', () => {
  const props: GroupedActionLinksProps = { links: actionLinks }
  const defaultGroupedActionLinks = <GroupedActionLinks {...props} />

  test('should render with 2 <ActionLink /> children', () => {
    const groupedActionLinks = renderWithTheme(defaultGroupedActionLinks)
    const wrapper = mountWithTheme(defaultGroupedActionLinks)
    expect(wrapper).toHaveLength(1)
    expect(wrapper.find(ActionLink)).toHaveLength(2)
    expect(groupedActionLinks).toMatchSnapshot()
  })
})
