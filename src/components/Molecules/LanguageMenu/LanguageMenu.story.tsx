import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { LanguageMenu } from './LanguageMenu'
import { languageMockItems } from './LanguageMenu.mock'
import Readme from './LanguageMenu.readme.md'

storiesOf('Design System/Molecules/LanguageMenu', module).add(
  'Default',
  () => (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <LanguageMenu
        languages={languageMockItems}
        extendedLanguageHandler={action('item clicked')}
        setupCurrentIndex={0}
      />
    </div>
  ),
  {
    info: Readme,
  }
)
