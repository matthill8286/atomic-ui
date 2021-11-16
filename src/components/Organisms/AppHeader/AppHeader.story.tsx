import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { AppHeaderComponent } from '@/components/Organisms/AppHeader'
import { QuickAction } from '@/components/Molecules/ActionLink'

export const navigationListMockItems: QuickAction[] = [
  {
    actionLabel: 'Profile',
    to: '/',
  },
  {
    actionLabel: 'Comments',
    to: '/',
  },
  {
    actionLabel: 'Goals',
    to: '/',
  },
  {
    actionLabel: 'Progress',
    to: '/',
  },
]

const headerContent = {
  id: '474jrr5jfd55ndh444',
  links: [...navigationListMockItems],
  searchBarEnabled: true,
  searchBarLabel: 'Search',
}

storiesOf('Design System/Organisms/AppHeader', module).add('Default', () => {
  return (
    <AppHeaderComponent
      headerContent={headerContent}
      logo={{
        url:
          'https://wac-cdn.atlassian.com/dam/jcr:e9ef90f9-c84a-4cba-af2f-9aa7d683ede3/Jira%20Integration.svg?cdnVersion=1324',
        alt: 'testing action',
      }}
      onLogoClick={action('click')}
    />
  )
})
