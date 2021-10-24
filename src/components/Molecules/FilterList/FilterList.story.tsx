import { Store, withState } from '@dump247/storybook-state'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Filters } from './FilterList'
import { Knobs, FilterType } from './FilterList.interface'
import { props } from './FilterList.mocks'

interface InitialState {
  items: FilterType[]
}

const initialState: InitialState = {
  items: [...props.items],
}

const knobs = (store: Store<InitialState>): Knobs => {
  return {
    onChange: (isChecked: boolean, id: string | undefined) => {
      const newItems: FilterType[] = store.state.items.map(
        (item: FilterType): FilterType => {
          if (item.id === id) {
            return { ...item, selected: !item.selected }
          }

          return item
        }
      )
      store.set({ items: newItems })
    },
  }
}

storiesOf('Design System/Molecules/FilterList', module)
  .add(
    'Default',
    withState({ ...initialState }, (store: Store<InitialState>) => {
      return <Filters {...props} items={store.state.items} {...knobs(store)} />
    })
  )
  .add(
    'Disabled',
    withState({ ...initialState }, (store: Store<InitialState>) => {
      return <Filters {...props} filterDisabled items={store.state.items} {...knobs(store)} />
    })
  )
  .add(
    'Loading',
    withState({ ...initialState }, (store: Store<InitialState>) => {
      return <Filters {...props} items={store.state.items} {...knobs(store)} loading />
    })
  )
