import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { StyledList } from './Dropdown.styled'
import { DropdownOption } from './DropdownOption'
import { SearchableDropdown } from './SearchableDropdown'

describe('SearchableDropdown', () => {
  const props = {
    index: -1,
    inputValue: undefined,
    label: 'oh my label',
    onSelectChange: jest.fn(),
    onInputChange: jest.fn(),
  }
  it('renders', () => {
    const wrapper = renderWithTheme(
      <SearchableDropdown {...props} options={[{ label: 'one' }, { label: 'two' }]} />
    )
    expect(wrapper).toMatchSnapshot()
  })
  it('toggles the dropdown on click', () => {
    const wrapper = mountWithTheme(
      <SearchableDropdown {...props} options={[{ label: 'one' }, { label: 'two' }]} />
    )
    const button = wrapper.find('div').first()
    button.simulate('click')
    expect(wrapper.find(StyledList).findWhere(item => item.props().active))
  })
  it('accepts an optional label prop', () => {
    const wrapper = mountWithTheme(
      <SearchableDropdown
        {...props}
        label="Label text"
        options={[{ label: 'one' }, { label: 'two' }]}
      />
    )
    const label = wrapper.find('label')
    expect(label.length).toEqual(1)
    expect(label.text()).toEqual('Label text')
  })
  it('should select the option with given index prop', () => {
    const wrapper = mountWithTheme(
      <SearchableDropdown {...props} index={1} options={[{ label: 'one' }, { label: 'two' }]} />
    )
    expect(
      wrapper.find(DropdownOption).findWhere(item => {
        const props = item.props()
        return props.active && props.children === 'two'
      })
    )
  })
})
