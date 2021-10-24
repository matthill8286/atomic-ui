import * as React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { LoadingIndicator } from './LoadingIndicator'

describe('LoadingIndicator', () => {
  it('renders filtered theme', () => {
    const tree = renderWithTheme(<LoadingIndicator isVisible={false} />)
    expect(tree).toMatchSnapshot()
  })
})
