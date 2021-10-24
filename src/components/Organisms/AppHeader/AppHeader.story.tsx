import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { LanguageMenuOption } from '@/components/Molecules/LanguageMenu'
import { SearchDropdown } from '@/components/Molecules/SearchDropdown'
import { AppHeaderComponent } from '@/components/Organisms/AppHeader'
import { QuickAction } from '@/components/Molecules/ActionLink'

export const navigationListMockItems: QuickAction[] = [
  {
    actionLabel: 'Profile',
    to: '/',
    links: [],
  },
  {
    actionLabel: 'Comments',
    to: '/',
    links: [],
  },
  {
    actionLabel: 'Goals',
    to: '/',
    links: [
      {
        actionLabel: 'Profile',
        to: '/',
        links: [],
      },
      {
        actionLabel: 'Comments',
        to: '/',
        links: [],
      },
      {
        actionLabel: 'Goals',
        to: '/',
        links: [],
      },
    ],
  },
  {
    actionLabel: 'Progress',
    to: '/',
    links: [],
  },
]

const defaultLanguages: LanguageMenuOption[] = [
  {
    id: 0,
    label: 'Dutch',
  },
  {
    id: 1,
    label: 'English',
  },
  {
    id: 2,
    label: 'French',
  },
]

const headerContent = {
  id: '',
  links: [...navigationListMockItems],
  searchBarEnabled: true,
  searchBarLabel: 'Search',
  filter: {
    enabled: true,
    placeholder: 'Filter',
  },
}

storiesOf('Design System/Organisms/AppHeader', module).add('Default', () => {
  return (
    <AppHeaderComponent
      logoRef={{ url: '', alt: '' }}
      button={{ href: '', actionLabel: 'Log Out' }}
      languages={defaultLanguages}
      renderSearchBar={
        <SearchDropdown
          index={0}
          inputValue={''}
          options={[]}
          onSelectChange={() => null}
          onInputChange={() => null}
        />
      }
      headerContent={headerContent}
      logoUrl="https://wac-cdn.atlassian.com/dam/jcr:e9ef90f9-c84a-4cba-af2f-9aa7d683ede3/Jira%20Integration.svg?cdnVersion=1324"
      onLogoClick={action('click')}
    />
  )
})
