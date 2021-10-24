import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { navigationMockItems } from './navigation.mock'
import { NavigationMenu } from './NavigationMenu'
import Readme from './NavigationMenu.readme.md'

storiesOf('Design System/Molecules/NavigationMenu', module)
  .add(
    'Default',
    () => (
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <NavigationMenu
          button={{
            actionLabel: 'Log Out',
            href: '/test',
            onClick: action('logout clicked'),
          }}
          iconAsMainUi
          initialLink={undefined}
          navActionList={navigationMockItems}
          extendedNavigationHandler={action('item clicked')}
        />
      </div>
    ),
    {
      info: Readme,
    }
  )
  .add(
    'With text as initial link',
    () => (
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <NavigationMenu
          button={{
            actionLabel: 'Log Out',
            href: '/test',
            onClick: action('logout clicked'),
          }}
          iconAsMainUi={false}
          initialLink="Events"
          navActionList={navigationMockItems}
          extendedNavigationHandler={action('item clicked')}
        />
      </div>
    ),
    {
      info: Readme,
    }
  )
