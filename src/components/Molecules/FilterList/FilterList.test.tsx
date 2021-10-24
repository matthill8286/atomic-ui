import * as React from 'react'
import { mountWithTheme } from '@/testRenderer'
import { props as servicesProps } from './FilterList.mocks'
import { FilterEntry, Filters, StyledSkeleton } from '@/components/Molecules/FilterList/FilterList'
import { FiltersProps, FilterType } from '@/components/Molecules/FilterList/FilterList.interface'

const addMockMethods = (props: FiltersProps): FiltersProps => {
  return {
    ...props,
    onChange: jest.fn(),
    onIconModalOpen: jest.fn(),
  }
}

describe('<Filters />', () => {
  let props: FiltersProps

  beforeEach(() => {
    props = addMockMethods(servicesProps)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  test('Renders without crashing', () => {
    const wrapper = mountWithTheme(<Filters {...props} />)
    expect(wrapper).toHaveLength(1)
  })

  test('Renders a Skeleton if loading', () => {
    const wrapper = mountWithTheme(<Filters {...props} loading />)

    expect(wrapper.find(StyledSkeleton)).toHaveLength(1)
    expect(wrapper.find(FilterEntry)).toHaveLength(0)
    expect(wrapper.isEmptyRender()).toBe(false)
  })

  test('Renders null if no items', () => {
    const wrapper = mountWithTheme(<Filters {...props} items={[]} />)
    expect(wrapper.isEmptyRender()).toBe(true)
  })

  test('Renders the correct number of items', () => {
    const wrapper = mountWithTheme(<Filters {...props} />)

    expect(wrapper.find('StyledSkeleton')).toHaveLength(0)
    expect(wrapper.isEmptyRender()).toBe(false)
    expect(wrapper.find('FilterEntry')).toHaveLength(props.items.length)
  })

  describe('<StyledSkeleton />', () => {
    test('Renders without crashing', () => {
      const wrapper = mountWithTheme(<StyledSkeleton />)
      expect(wrapper).toHaveLength(1)
    })
  })

  describe('<FilterEntry />', () => {
    let entryProps: FilterType

    beforeEach(() => {
      entryProps = {
        ...props.items[1],
      }
    })

    test('Renders without crashing', () => {
      const wrapper = mountWithTheme(<FilterEntry {...props} item={entryProps} />)
      expect(wrapper).toHaveLength(1)
    })

    test('Adds a data-test attribute', () => {
      const wrapper = mountWithTheme(<FilterEntry {...props} item={entryProps} />)
      expect(wrapper.find('[data-test="ewb-filters-entry"]')).toHaveLength(2)
    })
  })
})
