import * as React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { CookieButtonGroupProps, CookieLayer } from './CookieLayer'

describe('Cookie Layer', () => {
  const mainContent = `Welcome to saiyan!!. This website stores cookies on your computer. These cookies are used to improve your website experience and provide more personalized services to you, both on this website and through other media. To find out more about the cookies we use, see our Privacy Policy.`
  const onClick = jest.fn()
  const position = 'relative'

  const buttonProps: Partial<CookieButtonGroupProps> = {
    primaryButtonProps: {
      buttonLabel: 'Accept',
      actionType: 'primary',
      onClick: jest.fn(),
    },
    secondaryButtonProps: {
      buttonLabel: 'Manage Preferences',
      actionType: 'outlined',
      onClick: jest.fn(),
    },
  }

  it('Should render cookie layer wrapper', () => {
    const tree = renderWithTheme(
      <CookieLayer position={position} mainContent={mainContent} {...buttonProps} />
    )
    expect(tree).toMatchSnapshot()
  })

  xit('Should be clickable', () => {
    const tree = mountWithTheme(
      <CookieLayer position={position} mainContent={mainContent} {...buttonProps} />
    )
    tree
      .find('button')
      .at(0)
      .simulate('click')
    expect(onClick.mock.calls.length).toEqual(1)
  })
})
