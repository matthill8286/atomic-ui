import React from 'react'
import { IconArticle } from '@excelwithbusiness/webmobile-svg-library'
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
