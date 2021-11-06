import { action } from '@storybook/addon-actions'
import { boolean, number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Cell, Grid, Row } from '@/components/Helper/Grid'
import { Asset } from '@/types/asset'
import { loveFilmAsset, microsoftAsset, mockAsset } from './mockAssets'
import { LazyAssetCarousel } from './LazyAssetCarousel'
import {
  AssetSponsoring,
  AssetStrategy,
  newAssetStructuredMocks,
} from '@/components/Organisms/AssetTile'
import { CopyText, Heading } from '@/components/Atoms/Typography'
import { StyleguideBookmarkOutlined } from '@matthill8286/atomic-icon-library'
import { Icon } from '@/components/Atoms/Icon'

const mockAssets = {
  nexus: mockAsset,
  loveFilm: loveFilmAsset,
  microsoft: microsoftAsset,
}

const structuredAssets = [...newAssetStructuredMocks]
const setCompleted = [...newAssetStructuredMocks].map(asset => ({
  ...asset,
  locked: false,
}))

export const assetNames = ['nexus', 'loveFilm', 'microsoft']

const Placeholder: React.FC<{ tint?: boolean }> = ({ tint }) => {
  const styles = {
    padding: '1rem',
    background: tint ? '#444' : '#eee',
    minHeight: '375px',
  }

  return <div style={styles} />
}

Placeholder.displayName = 'Placeholder'

const customTitle = () => (
  <>
    <AssetSponsoring
      sponsoringDetails={{
        isSponsored: true,
        showUppercase: true,
        label: 'Recommendations',
        title: 'Notification Title',
        infoText: 'Some random content so we can showcase sponsored asset content',
      }}
      layout="carousel"
    />
    <Heading bold scale="level-2" tag="h2" color="primary">
      Playlists
    </Heading>
  </>
)

const knobs = () => ({
  loading: boolean('Loading', false),
  arrows: boolean('Arrows', true),
  withOverflow: boolean('Overflow', true),
  withPadding: boolean('Add Padding', true),
  hideLeftOverflow: boolean('Hide Left Overflow', false),
  smallSlides: number('Slides in Small Viewport', 1),
  mediumSlides: number('Slides in Medium Viewport', 2),
  largeSlides: number('Slides in Large Viewport', 3),
  showArrows: boolean('Arrows', true),
  playlistOrientation: select(
    'Playlist Orientation',
    ['portrait', 'landscape', undefined],
    'portrait'
  ),
  NoAssetsComponent: <CopyText>No Assets here</CopyText>,
  tileMargin: select('Tile Margin', ['xs', 'sm', 'md'], 'sm'),
  playlistView: select('Playlist Type', ['list', 'collection'], 'list'),
  title: boolean('With Title', true) ? customTitle() : undefined,
  tileWidth: number('TileWidth', 360),
  onAssetClick: action('asset'),
  onLockClick: action('lock'),
  onSlideChange: action('slide changed'),
  renderAddToBookmarkButton: () => (
    <Icon onClick={action('preBookmarkProps')}>
      <StyleguideBookmarkOutlined />
    </Icon>
  ),
  showNoAssets: boolean('With No Assets', false),
  showCompleted: boolean('Set assets completed', false),
})

const mockedAssetsWithNames = () => {
  const assets: Asset[] = []

  for (let i = 0; i < assetNames.length; i++) {
    assets.push(mockAssets[assetNames[i]])
  }

  return assets
}

const fixedWidth = () => boolean('Fixed Column Width', false)

storiesOf('Design System/Organisms/LazyAssetCarousel', module)
  .add('Default', () => {
    const assets: Asset[] = []

    for (let i = 0; i < assetNames.length; i++) {
      assets.push(mockAssets[assetNames[i]])
    }

    if (fixedWidth()) {
      return (
        <Grid fixedColumnWidth>
          <Row>
            <Cell columns={12}>
              <LazyAssetCarousel
                {...knobs()}
                context={'homepage'}
                strategyType={select(
                  'Playlist Strategy',
                  [AssetStrategy.structured, AssetStrategy.timebox, undefined],
                  undefined
                )}
                assets={[...assets, ...assets, ...assets, ...assets]}
              />
            </Cell>
          </Row>
        </Grid>
      )
    }

    return (
      <LazyAssetCarousel
        {...knobs()}
        brightArrows
        context={'homepage'}
        strategyType={select(
          'Playlist Strategy',
          [AssetStrategy.structured, AssetStrategy.timebox, undefined],
          undefined
        )}
        assets={[...assets, ...assets, ...assets, ...assets]}
      />
    )
  })
  .add('Loading', () => {
    const assets: Asset[] = []

    for (let i = 0; i < assetNames.length; i++) {
      assets.push(mockAssets[assetNames[i]])
    }

    return (
      <LazyAssetCarousel
        {...knobs()}
        loading
        context={'homepage'}
        assets={[...assets, ...assets, ...assets, ...assets]}
      />
    )
  })
  .add('Playlists with disabled indexes', () => {
    return (
      <Grid>
        <Row>
          <Cell columns={12}>
            <LazyAssetCarousel
              {...knobs()}
              tileWidth={380}
              context="structured-assets"
              sponsoringDetails={{
                isSponsored: true,
                showUppercase: true,
                label: 'Recommendations',
                title: 'Notification Title',
                infoText: 'Some random content so we can showcase sponsored asset content',
              }}
              assets={
                knobs().showCompleted ? setCompleted : knobs().showNoAssets ? [] : structuredAssets
              }
              strategyType={AssetStrategy.structured}
              largeSlides={knobs().playlistOrientation === 'landscape' ? 2 : 3}
              mediumSlides={2}
              smallSlides={1}
            />
          </Cell>
        </Row>
      </Grid>
    )
  })
