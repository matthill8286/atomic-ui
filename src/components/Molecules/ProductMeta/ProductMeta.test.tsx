import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { ProductMeta } from './ProductMeta'

describe('Product page meta', () => {
  it('renders product meta', () => {
    const wrapper = renderWithTheme(
      <ProductMeta
        bookmarked={false}
        buttonTextLaunch="Launch"
        buttonTextComplete="Mark complete"
        shareHandler={() => jest.fn()}
        bookmarkHandler={() => jest.fn()}
        savePlaylistHandler={() => jest.fn()}
        list={[
          { label: 'Provider', value: 'Youtube' },
          { label: 'Primary competency', value: 'Digital Marketing' },
          { label: 'Type', value: 'Article' },
          { label: 'Length', value: '16 minutes' },
        ]}
        competencyCopy="5 competencies featured in this learning product:"
        tags={[
          { text: 'CREATIVITY', href: '#' },
          { text: 'STORYTELLIGN', href: '#' },
          { text: 'DESIGN', href: '#' },
          { text: 'WRITING', href: '#' },
          { text: 'BRAINSTORMING', href: '#' },
        ]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
