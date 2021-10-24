import { storiesOf } from '@storybook/react'
import React from 'react'
import { AppFooter } from './AppFooter'
import { navigationListMockItems } from '@/components/Organisms/AppHeader/AppHeader.story'

storiesOf('Design System/Organisms/AppFooter', module).add('Default', () => {
  return (
    <AppFooter
      logoUrl="https://wac-cdn.atlassian.com/dam/jcr:e9ef90f9-c84a-4cba-af2f-9aa7d683ede3/Jira%20Integration.svg?cdnVersion=1324"
      instagramLink={'instagram.com'}
      twitterLink={'twitter.co.uk'}
      facebookLink={'facebook.com'}
      youtubeLink={'youtube.co.uk'}
      text="Digital Agility powered by Filtered"
      links={[...(navigationListMockItems || [])]}
    />
  )
})
