import { withState } from '@dump247/storybook-state'
import { radios, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { styled } from '@/styles'
import { IconClose, IconSearch } from '@matthill8286/atomic-icon-library'
import { SearchButton } from './SearchButton'
import { SearchButtonProps, SearchState, SearchType } from './SearchButton.interface'
import Readme from './SearchButton.readme.md'

const inputStates: { [key in SearchState]: SearchState } = {
  idle: 'idle',
  valid: 'valid',
  error: 'error',
}

const searchTypes: { [key: string]: SearchType } = {
  search: 'search',
  text: 'text',
}

const searchKnobs = (): SearchButtonProps => ({
  margin: text('margin', ''),
  padding: text('padding', ''),
  placeholder: text('placeHolder', 'Search'),
  state: radios('state', inputStates, 'idle'),
  searchType: radios('searchType', searchTypes, 'search'),
})

const stories = storiesOf('Design System/Molecules/Search/SearchButton', module)

const options = { info: Readme }

const StyledSearchWrapper = styled.div`
  width: 90%;
`
const SearchWrapper: React.FC = ({ children }): JSX.Element => (
  <StyledSearchWrapper>{children}</StyledSearchWrapper>
)

stories.add(
  'Default',
  withState({ value: undefined }, store => {
    const onChange = ({ target: { value } }) => {
      store.set({ value })
    }
    return (
      <SearchWrapper>
        <SearchButton
          searchIcon={<IconSearch />}
          onChange={onChange}
          value={store.state.value}
          {...searchKnobs()}
        />
      </SearchWrapper>
    )
  }),
  options
)

stories.add(
  'with default value',
  withState({ value: 'Search this!!' }, store => (
    <SearchWrapper>
      <SearchButton value={store.state.value} {...searchKnobs()} searchIcon={<IconSearch />} />
    </SearchWrapper>
  )),
  options
)

stories.add(
  'with autofocus',
  withState({ value: '' }, store => {
    const onChange = ({ target: { value } }) => {
      store.set({ value })
    }
    return (
      <SearchWrapper>
        <SearchButton
          placeholder="Placeholder"
          searchIcon={<IconSearch />}
          onChange={onChange}
          autofocus
          value={store.state.value}
        />
      </SearchWrapper>
    )
  }),
  options
)

stories.add(
  'with custom icon',
  withState({ value: '' }, store => {
    return <SearchButton searchIcon={<IconClose />} value={store.state.value} />
  }),
  options
)

stories.add(
  'Accessibility',
  withState({ value: undefined }, store => {
    const onChange = ({ target: { value } }) => {
      store.set({ value })
    }
    return (
      <SearchButton
        {...searchKnobs()}
        iconLabel="Enable self-destruct!"
        searchIcon={<IconClose />}
        searchProps={{ id: 'test-field', required: true }}
        searchType="text"
        onChange={onChange}
        onClickIcon={() => alert('Boom!')}
        placeholder="Try tabbing to use icon..."
        value={store.state.value}
      />
    )
  }),
  options
)

stories.add(
  'Accessibility: Error',
  withState({ value: undefined }, store => {
    const onChange = ({ target: { value } }) => {
      store.set({ value })
    }
    return (
      <SearchButton
        {...searchKnobs()}
        errorMessage="You enetered the wrong information"
        inputProps={{ id: 'test-field', required: true }}
        searchType="text"
        onChange={onChange}
        placeholder="Enter some text..."
        state="error"
        value={store.state.value}
      />
    )
  }),
  options
)
