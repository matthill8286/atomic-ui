import { action } from '@storybook/addon-actions'
import { boolean, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Dropdown } from './Dropdown'
import { DropdownProps } from './Dropdown.interface'
import readme from './Dropdown.readme.md'
import { StyleguideArrow } from '@matthill8286/jsx-icon-library'

const options = [
  { id: '0', label: 'BMW' },
  { id: '1', label: 'Audi' },
  { id: '2', label: 'Mercedes' },
  { id: '3', label: 'Porsche' },
  { id: '4', label: 'Very long text item that is long rly rly long long long' },
]

const commonKnobs = {
  onChange: action('on-change'),
  options,
}

const story = storiesOf('Design System/Molecules/Dropdown/Dropdown', module)

story.add(
  'Initial',
  () => {
    const knobs: DropdownProps = {
      ...commonKnobs,
      label: text('label', 'type a label'),
      withBackground: boolean('With Background Color', true),
    }

    return <Dropdown {...knobs} placeholder={'Placeholder'} />
  },
  { info: readme }
)

story.add(
  'Selected',
  () => {
    const knobs: DropdownProps = {
      ...commonKnobs,
      label: text('Label', 'type a label'),
      initialIndex: number('initialIndex', 0),
    }

    return <Dropdown {...knobs} />
  },
  { info: readme }
)

story.add(
  'Native list',
  () => {
    const knobs: DropdownProps = {
      ...commonKnobs,
      label: text('Label', 'type a label'),
      initialIndex: number('initialIndex', 0),
      listType: 'native',
      noBorder: boolean('No Border', false),
    }

    return <Dropdown {...knobs} />
  },
  { info: readme }
)
