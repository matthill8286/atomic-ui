import React from 'react'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { newAssetStructuredMocks } from '@/components/Organisms/AssetTile/elements/mockAsset'
import { StyleguideCalendar, IconLiveLabel } from '@excelwithbusiness/webmobile-svg-library'
import { Tag } from '@/components/Atoms/Tag'
import { AssetSchedule } from './AssetSchedule'

describe('AssetSchedule', () => {
  it.skip('renders correct snapshot with asset data', () => {
    const props = {
      timebox: {
        start: newAssetStructuredMocks[0]?.timebox?.start,
        end: newAssetStructuredMocks[0]?.timebox?.end,
      },
      color: 'white',
    }
    const wrapper = renderWithTheme(<AssetSchedule {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Displays the Calendar icon', () => {
    const props = {
      timebox: {
        start: '2022-07-04T10:10:30Z',
        end: '2023-10-04T10:10:30Z',
      },
      color: 'white',
    }
    const wrapper = mountWithTheme(<AssetSchedule {...props} />)
    expect(wrapper.find(StyleguideCalendar)).toHaveLength(1)
  })

  it('Displays the Calendar icon when asset has no end time', () => {
    const props = {
      timebox: {
        start: '2022-07-04T10:10:30Z',
        end: null,
      },
      color: 'white',
    }
    const wrapper = mountWithTheme(<AssetSchedule {...props} />)
    expect(wrapper.find(StyleguideCalendar)).toHaveLength(1)
  })

  it('Displays the Tag component', () => {
    const props = {
      timebox: {
        start: '2022-07-04T10:10:30Z',
        end: '2023-10-04T10:10:30Z',
      },
      color: 'white',
    }
    const wrapper = mountWithTheme(<AssetSchedule {...props} />)
    expect(wrapper.find(Tag)).toHaveLength(1)
  })

  it('Displays the Live icon', () => {
    const props = {
      timebox: {
        start: '2021-07-04T10:10:30Z',
        end: '2023-10-04T10:10:30Z',
      },
      color: 'white',
    }
    const wrapper = mountWithTheme(<AssetSchedule {...props} />)
    expect(wrapper.find(IconLiveLabel)).toHaveLength(1)
  })

  it('Displays the Live icon when asset has no end time', () => {
    const props = {
      timebox: {
        start: '2021-07-04T10:10:30Z',
        end: null,
      },
      color: 'white',
    }
    const wrapper = mountWithTheme(<AssetSchedule {...props} />)
    expect(wrapper.find(IconLiveLabel)).toHaveLength(1)
  })
})
