import React from 'react'
import { InputEvents } from '@/components/Atoms/Input'
import { CopyText } from '@/components/Atoms/Typography'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { SearchButton } from './SearchButton'
import { SearchState, SearchStyle } from './SearchButton.interface'

describe('SearchButton', () => {
  it('should render', () => {
    const wrapper = renderWithTheme(<SearchButton />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render with different states', () => {
    const states: SearchState[] = ['idle', 'valid', 'error']
    states.forEach(state => {
      const wrapper = renderWithTheme(<SearchButton state={state} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
  it('should render with helper component', () => {
    const wrapper = renderWithTheme(<SearchButton helper={<CopyText>help text</CopyText>} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render with errorMessage', () => {
    const wrapper = renderWithTheme(<SearchButton state="error" errorMessage="error message" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render with dense searchStyle', () => {
    const searchStyles: SearchStyle[] = ['default', 'dense', 'large']
    searchStyles.forEach(style => {
      const wrapper = renderWithTheme(<SearchButton inputStyle={style} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  it('should fireSearchEvents', () => {
    const events: InputEvents = {
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn(),
      onClick: jest.fn(),
      onFocus: jest.fn(),
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onKeyDown: jest.fn(),
      onKeyUp: jest.fn(),
      onClickIcon: jest.fn(),
    }
    const wrapper = mountWithTheme(<SearchButton {...events} />)
    const input = wrapper.find('input')

    input.simulate('mouseEnter')
    expect(events.onMouseEnter).toBeCalledTimes(1)

    input.simulate('mouseLeave')
    expect(events.onMouseLeave).toBeCalledTimes(1)

    input.simulate('click')
    expect(events.onClick).toBeCalledTimes(1)

    input.simulate('focus')
    expect(events.onFocus).toBeCalledTimes(1)

    input.simulate('blur')
    expect(events.onBlur).toBeCalledTimes(1)

    input.simulate('change', { target: { value: 'hallo!' } })
    expect(events.onChange).toBeCalledTimes(1)

    input.simulate('keyDown')
    expect(events.onKeyDown).toBeCalledTimes(1)

    input.simulate('keyUp')
    expect(events.onKeyUp).toBeCalledTimes(1)
  })
})
