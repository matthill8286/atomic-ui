import React from 'react'
import { renderWithThemeAndRouter } from '@/testRenderer'
import { AppFooter } from './AppFooter'
import { navigationListMockItems } from '@/components/Organisms/AppHeader/AppHeader.story'

describe('Asset page footer', () => {
  it('renders with props', () => {
    const wrapper = renderWithThemeAndRouter(
      <AppFooter
        logoUrl="https://wac-cdn.atlassian.com/dam/jcr:e9ef90f9-c84a-4cba-af2f-9aa7d683ede3/Jira%20Integration.svg?cdnVersion=1324"
        text="Digital Agility powered by Filtered"
        links={[...(navigationListMockItems || [])]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
