import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { CookieLayer } from './CookieLayer'

const mockCookieLayerLabels = {
  mainContent: `Welcome to saiyan!!. This website stores cookies on your computer. These cookies are used to improve your website experience and provide more personalized services to you, both on this website and through other media. To find out more about the cookies we use, see our Privacy Policy.`,
}

storiesOf('Design System/Organisms/Cookie Layer', module).add('Default', () => (
  <CookieLayer
    position="fixed"
    mainContent={mockCookieLayerLabels.mainContent}
    primaryButtonProps={{
      buttonLabel: 'Call to action',
      actionType: 'primary',
      onClick: action('Agreed'),
    }}
    secondaryButtonProps={{
      buttonLabel: 'Close',
      actionType: 'outlined',
      onClick: action('Manage'),
    }}
  />
))
