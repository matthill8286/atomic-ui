import { withState } from '@dump247/storybook-state'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { SearchableDropdown } from './SearchableDropdown'
import readme from './SearchableDropdown.readme.md'

const options = [
  { id: '1', label: 'BMW', category: 'cars' },
  { id: '2', label: 'Audi', category: 'cars' },
  { id: '3', label: 'Mercedes', category: 'cars' },
  { id: '4', label: 'Porsche', category: 'cars' },
  { id: '5', label: 'Very long text item that is long rly rly long long long', category: 'others' },
  { id: '6', label: 'banana', category: 'fruits' },
  { id: '7', label: 'apple', category: 'fruits' },
  { id: '8', label: 'avocado', category: 'fruits' },
  { id: '9', label: 'pomegranate', category: 'fruits' },
  { id: '10', label: 'strawberry', category: 'fruits' },
  { id: '11', label: 'orange', category: 'fruits' },
  { id: '12', label: 'kiwi', category: 'fruits' },
  { id: '13', label: 'carrot', category: 'fruits' },
  { id: '14', label: 'mango', category: 'fruits' },
  { id: '15', label: 'pineapple', category: 'fruits' },
]

const story = storiesOf('Design System/Molecules/Dropdown/SearchableDropdown', module)

story.add(
  'Inital',
  withState({ index: -1, inputValue: '' }, store => {
    const onSelectChange = (item, index) => {
      store.set({ index, inputValue: item.label })
    }

    const onInputChange = event => {
      store.set({
        inputValue: event.target.value,
      })
    }

    const knobs = () => ({
      label: text('label', 'type a label'),
    })

    return (
      <SearchableDropdown
        {...knobs()}
        index={store.state.index}
        inputValue={store.state.inputValue}
        options={options}
        onSelectChange={onSelectChange}
        onInputChange={onInputChange}
      />
    )
  }),
  { info: readme }
)
