import { storiesOf } from '@storybook/react'
import { Switch } from './Switch'
import { withState } from '@dump247/storybook-state'
import * as React from 'react'
import Readme from './Switch.readme.md'
import { boolean, text } from '@storybook/addon-knobs'

const stories = storiesOf('Design System/Atoms/Switch', module)
const knobs = () => {
  return {
    ariaLabel: text('Label', 'Join MediaMarkt Club!!!'),
    disabled: boolean('Disabled', false),
  }
}

stories.add(
  'Default',
  withState({ checked: false }, (store) => (
    <Switch
      checked={store.state.checked}
      id="switch-atom"
      onClick={() => store.set({ checked: !store.state.checked })}
      {...knobs()}
    />
  )),
  { info: Readme }
)
