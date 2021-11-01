import { boolean, select } from '@storybook/addon-knobs'
import * as React from 'react'
import { Cell, Grid, Offset, Row } from '@/components/Helper/Grid'
import { TwelveColumn } from '@/components/Helper/Grid/Grid.interface'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import { AssetTileLayout } from '../AssetTile.interface'

import {
  assetNames,
  assetOptions,
  baseProps,
  gridSelection,
  mockAssets,
} from '@/components/Organisms/AssetTile/elements/mocks'
import { Asset } from '@/types'
import { action } from '@storybook/addon-actions'
import { AssetTile } from '@/components/Organisms/AssetTile'
import { StyledIconButton } from '@/components/Organisms/AssetTile/stories/AssetTileGridItemStory'
import { Icon } from '@/components/Atoms/Icon'
import { StyleguideBookmarkOutlined } from '@matthill8286/jsx-icon-library'

export const SingleAssetStory = () => {
  const itemCount = select('Items per Row', gridSelection, 3) as TwelveColumn

  const selectedAssetType = select('Asset', assetOptions, 'auto')
  const auto = selectedAssetType === 'auto'

  const props = {
    ...baseProps,
    loading: boolean('Loading state', false),
    isDisabled: boolean('Disabled', false),
    videoFallbackImage: 'public/images/teasers/02.jpg',
  }

  const showLock = boolean('Locked state', false)
  const showFeatured = boolean('Featured Asset', false)
  const sponsored = boolean('Sponsored asset', false)

  const assets: Asset[] = []

  for (let i = 0; i < itemCount; i++) {
    assets.push(mockAssets[(auto && assetNames[i]) || selectedAssetType])
  }

  const showAssets = showLock ? { ...assets[0], locked: true } : { ...assets[0] }

  return (
    <StorybookWrapper>
      <Grid>
        <Row>
          <Offset columns={3} />
          <Cell columns={6}>
            <AssetTile
              {...props}
              asset={showAssets}
              showLock={showLock}
              showBookmark={!showLock}
              showFeatured={showFeatured}
              noBorder={[]}
              onLockClick={action('Lock clicked')}
              onClick={action('Tile clicked')}
              renderAddToBookmarkButton={() => (
                <StyledIconButton round isFlat>
                  <Icon color="grey5" height="md">
                    <StyleguideBookmarkOutlined />
                  </Icon>
                </StyledIconButton>
              )}
              layout={AssetTileLayout.gridItem}
              assetSponsoring={{
                isSponsored: sponsored,
                showUppercase: false,
                label: 'Asset Sponsor',
                title: 'Sponsored',
                infoText: 'Some random content so we can showcase sponsored asset content',
              }}
            />
          </Cell>
        </Row>
      </Grid>
    </StorybookWrapper>
  )
}
