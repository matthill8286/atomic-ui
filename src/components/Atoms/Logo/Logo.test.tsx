import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Logo } from './Logo'
describe('Logo', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Logo />)
    expect(tree).toMatchSnapshot()
  })
  it('can render white', () => {
    const tree = renderWithTheme(<Logo white />)
    expect(tree).toMatchSnapshot()
  })
})
