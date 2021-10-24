import React from 'react'
import { Link } from '@/components/Atoms/Link'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { ActionLink } from './ActionLink'
import { ActionLinkProps } from './ActionLink.interface'

describe('<ActionLink /> component', () => {
  const props: ActionLinkProps = {
    children: 'Click me',
  }

  const defaultActionLink = <ActionLink {...props} />

  test('should render a <Link /> component', () => {
    const actionLink = renderWithTheme(defaultActionLink)
    const wrapper = mountWithTheme(defaultActionLink)
    expect(wrapper.find(Link)).toHaveLength(1)
    expect(actionLink).toMatchSnapshot()
  })

  test('should trigger onClick', () => {
    const onClick = jest.fn()
    const wrapper = mountWithTheme(<ActionLink {...props} onClick={onClick} />)

    wrapper.find(Link).simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
