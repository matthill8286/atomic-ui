import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { IconArticle, IconBookmark, IconClose } from '@matthill8286/atomic-icon-library'
import { InputIcon, InputIconProps } from './InputIcon'

const CustomIcon = {
  Visible: 'visible',
  Hidden: 'hidden',
  Arrow: 'arrow',
}

const icons = {
  visible: <IconBookmark />,
  hidden: <IconClose />,
  arrow: <IconArticle />,
  default: null,
}

const stories = storiesOf('Design System/Atoms/InputIcon', module)

stories.add('Default', () => {
  const knobs = (): InputIconProps => {
    const iconName = select('icon', CustomIcon, CustomIcon.Hidden)
    const icon = icons[iconName]
    const iconState = select('iconState', ['default', 'valid', 'error'], 'default')

    return {
      icon,
      iconState,
      onClick: action('onclick'),
    }
  }

  return <InputIcon {...knobs()} />
})
