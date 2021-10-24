import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { VideoPlayerCore } from '@/components/Atoms/VideoPlayer/VideoPlayerCore'

describe('VideoPlayer', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <VideoPlayerCore url="https://www.youtube.com/embed/-BdbiZcNBXg" />
    )
    expect(tree).toMatchSnapshot()
  })
})
