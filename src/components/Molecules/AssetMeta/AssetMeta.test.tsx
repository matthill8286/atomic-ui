import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { AssetMeta } from './AssetMeta'

describe('Asset page meta', () => {
  it('renders asset meta', () => {
    const wrapper = renderWithTheme(
      <AssetMeta
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
        competencyCopy="5 competencies featured in this learning asset:"
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
