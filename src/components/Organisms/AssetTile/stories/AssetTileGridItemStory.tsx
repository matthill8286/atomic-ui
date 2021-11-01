import { boolean, optionsKnob as options, select } from '@storybook/addon-knobs'
import * as React from 'react'
import { Grid, Row } from '@/components/Helper/Grid'
import { TwelveColumn } from '@/components/Helper/Grid/Grid.interface'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { AssetTileLayout } from '../AssetTile.interface'
import { Reduced } from '../AssetTilePresetProps'
import {
  assetNames,
  assetOptions,
  baseProps,
  featureOptions,
  gridSelection,
  mockAssets,
  presetProps,
} from '@/components/Organisms/AssetTile/elements/mocks'
import { Asset } from '@/types'
import { AssetTileExpanderRow } from '@/components/Organisms/AssetTile/stories/AssetExpanderRow'
import { action } from '@storybook/addon-actions'
import { css, styled } from '@/styles'
import { IconButton } from '@/components/Atoms/Button'
import { Icon } from '@/components/Atoms/Icon'
import { StyleguideBookmarkOutlined } from '@matthill8286/jsx-icon-library'
import { AssetTileVariantProps } from '../helpers/layout'

export const StyledIconButton = styled(IconButton)(
  ({ theme }) => css`
    border: none;
    display: flex;
    padding: 0;
    min-width: auto;
    justify-content: center;
  `
)

export const AssetTileGridItemStory = () => {
  const itemCount = select('Items per Row', gridSelection, 3) as TwelveColumn

  const selectedAssetType = select('Asset', assetOptions, 'auto')
  const auto = selectedAssetType === 'auto'

  const props: Pick<
    AssetTileVariantProps,
    'loading' | 'isDisabled' | 'orientation' | 'renderAddToBookmarkButton'
  > = {
    ...baseProps,
    loading: boolean('Loading state', false),
    isDisabled: boolean('Disabled', false),
    orientation: select('Orientation', ['portrait', 'landscape', undefined], 'portrait'),
    renderAddToBookmarkButton: () => (
      <StyledIconButton round isFlat onClick={action('Bookmark clicked')}>
        <Icon color="grey5" height="md">
          <StyleguideBookmarkOutlined />
        </Icon>
      </StyledIconButton>
    ),
  }

  const preset = select('Presets', presetProps, 'None')
  const selectedFeatures = options('Features', featureOptions, Object.values(featureOptions), {
    display: 'check',
  })

  const features =
    preset !== 'None'
      ? Reduced
      : Object.values(featureOptions).reduce((a, v) => {
          a[v] = selectedFeatures.includes(v)
          return a
        }, {})

  const assets: Asset[] = []

  for (let i = 0; i < itemCount; i++) {
    assets.push(mockAssets[(auto && assetNames[i]) || selectedAssetType])
  }

  return (
    <StorybookWrapper>
      <Grid>
        <Row>
          <AssetTileExpanderRow
            {...props}
            assets={assets}
            onLockClick={action('Lock clicked')}
            onClick={action('Tile clicked')}
            layout={AssetTileLayout.gridItem}
            {...features}
          />
        </Row>
      </Grid>
    </StorybookWrapper>
  )
}
