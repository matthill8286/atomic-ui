import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { FeatureList, ListWrapper } from './FeatureList'
import { text } from '@storybook/addon-knobs'
import { TabItem } from '@/components/Molecules/TabBar'

describe('Meta Feature list', () => {
  let inputProps
  beforeEach(() => {
    inputProps = [
      { label: 'Provider', value: 'Youtube' },
      { label: 'Primary competency', value: 'Digital Marketing' },
      { label: 'Type', value: 'Article' },
      { label: 'Length', value: '16 minutes' },
    ]
  })

  it('renders feature list', () => {
    const wrapper = renderWithTheme(<FeatureList list={inputProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders feature list with 3 children', () => {
    const component = mountWithTheme(<FeatureList list={inputProps.slice(0, 3)} />)
    const find = component.find(ListWrapper)
    expect(find.length).toBe(3)
  })

  it('removes the entry with no valid label', () => {
    const listWithMissingLabel = [
      { label: '', value: 'Youtube' },
      { label: 'Type', value: 'Article' },
      { label: 'Primary competency', value: 'Digital Marketing' },
      { label: 'Type', value: 'Article' },
    ]

    const component = mountWithTheme(<FeatureList list={listWithMissingLabel} />)
    const child = component.childAt(0)
    const childProps = child.props().list

    expect(childProps).toStrictEqual(listWithMissingLabel)
    expect(childProps.length).toBe(4)

    const find = component.find(ListWrapper)
    expect(find.length).toBe(3)
  })
})
