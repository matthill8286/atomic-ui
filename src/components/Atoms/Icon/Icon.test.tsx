import React from 'react'
import { IconArticle } from '@matthill8286/atomic-icon-library'
import { renderWithTheme } from '@/testRenderer'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Icon>
        <IconArticle />
      </Icon>
    )
    expect(tree).toMatchSnapshot()
  })
})
