import React from 'react'
import { IconButton } from '@/components/Atoms/Button/IconButton'
import { SkeletonBlockItem, SkeletonInlineItem } from '@/components/Atoms/Skeleton'
import { FlexBox, Icon, Spacer } from '@/index'
import { mountWithTheme, renderWithTheme } from '@/testRenderer'
import { AssetTileCompact } from './AssetTileCompact'
import { AssetTileCompactElement } from './AssetTileCompactElement'
import { StyleguideAddToTrash } from '@matthill8286/atomic-icon-library'
import { newAssetMocks } from '@/components/Organisms/AssetTile/elements/mockAsset'

const assetLineItemElementProps = {
  title: newAssetMocks[0]?.title,
  provider: newAssetMocks[0]?.provider?.name,
  description: 'Testing the description',
}

describe('AssetTileCompact', () => {
  it('renders correct snapshot with asset data', () => {
    const mockClick = jest.fn()
    const wrapper = renderWithTheme(
      <AssetTileCompact assetImage={newAssetMocks[0].image} loading={false}>
        <AssetTileCompactElement
          onClick={mockClick}
          {...assetLineItemElementProps}
          loading={false}
        />
      </AssetTileCompact>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correct snapshot with button children', () => {
    const mockClick = jest.fn()
    const wrapper = renderWithTheme(
      <AssetTileCompact loading={false} assetImage={newAssetMocks[0].image}>
        <AssetTileCompactElement
          onClick={mockClick}
          {...assetLineItemElementProps}
          loading={false}
          showInteractions={false}
        />
        <FlexBox flexDirection="row">
          <IconButton>
            <Icon width={20} height={20}>
              <StyleguideAddToTrash />
            </Icon>
          </IconButton>
          <Spacer direction="vertical" size="md" />
        </FlexBox>
      </AssetTileCompact>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correct snapshot in loading state', () => {
    const mockClick = jest.fn()
    const wrapper = renderWithTheme(
      <AssetTileCompact loading assetImage={newAssetMocks[0].image}>
        <AssetTileCompactElement onClick={mockClick} {...assetLineItemElementProps} loading />
      </AssetTileCompact>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders Skeleton-Elements in loading state', () => {
    const mockClick = jest.fn()
    const wrapper = mountWithTheme(
      <AssetTileCompact loading>
        <AssetTileCompactElement onClick={mockClick} {...assetLineItemElementProps} loading />
      </AssetTileCompact>
    )

    expect(wrapper.find(SkeletonBlockItem).length).toBe(1)
  })
})

describe('AssetTileCompactElement', () => {
  it('should be clickable', () => {
    const mockClick = jest.fn()
    const wrapper = mountWithTheme(
      <AssetTileCompact onClick={mockClick}>
        <AssetTileCompactElement {...assetLineItemElementProps} loading />
      </AssetTileCompact>
    )

    wrapper.find(AssetTileCompactElement).simulate('click')
    expect(mockClick.mock.calls.length).toEqual(1)
  })
})
