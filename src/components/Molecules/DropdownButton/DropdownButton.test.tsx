import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { IconUser } from '@matthill8286/jsx-icon-library'
import { Picture } from '@/components/Atoms/Picture'
import { DropdownButton } from './DropdownButton'
import { Dropdown } from '../Dropdown'

const onClick = jest.fn()

describe('DropdownButton', () => {
  it('renders', () => {
    const wrapper = renderWithTheme(
      <DropdownButton width={35} height={35} isOpen={false} onClick={onClick} />
    )
    expect(wrapper).toMatchSnapshot()
  })
  it('should be clickable', () => {
    const wrapper = mountWithTheme(
      <DropdownButton width={35} height={35} isOpen={false} onClick={onClick} />
    )
    wrapper.simulate('click')
    const options = <Dropdown options={[{ label: 'one' }, { label: 'two' }]} />
    expect(options).toBeDefined()
  })
  it('renders isOpen prop as false', () => {
    const wrapper = mountWithTheme(
      <DropdownButton width={35} height={35} isOpen={false} onClick={onClick} />
    )
    expect(wrapper.find(DropdownButton).prop('isOpen')).toEqual(false)
  })
  it('render profile icon', () => {
    const wrapper = mountWithTheme(
      <DropdownButton
        width={35}
        height={35}
        isOpen={false}
        primaryIcon={<IconUser height={35} width={35} />}
        onClick={onClick}
      />
    )
    expect(wrapper.find(IconUser)).toHaveLength(1)
  })
  it('render profile picture', () => {
    const wrapper = mountWithTheme(
      <DropdownButton
        width={35}
        height={35}
        isOpen={false}
        pictureSrc="https://media.graphcms.com/xlJatgRxRASTguH6kE3A"
        onClick={onClick}
      />
    )
    expect(wrapper.find(Picture)).toHaveLength(1)
  })
})
