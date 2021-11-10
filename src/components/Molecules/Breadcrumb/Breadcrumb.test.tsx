import React from 'react'
import { renderWithThemeAndRouter } from '@/testRenderer'
import { Breadcrumb } from './Breadcrumb'

const paths = [
  {
    name: 'Dashboard',
    link: '',
  },
  {
    name: 'Learning Product',
    link: '',
  },
  {
    name: 'Learning Product: Watch about Genomes',
    link: '',
  },
]

describe('Heading', () => {
  it('renders correctly', () => {
    const tree = renderWithThemeAndRouter(<Breadcrumb paths={paths} />)
    expect(tree).toMatchSnapshot()
  })
})
