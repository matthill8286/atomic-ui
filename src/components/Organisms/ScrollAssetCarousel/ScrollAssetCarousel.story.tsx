import { action } from '@storybook/addon-actions'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { CopyText, Heading } from '@/components/Atoms/Typography'
import { Cell, Grid, Row } from '@/components/Helper/Grid'
import { Asset } from '@/types'
import { AssetCarousel } from './ScrollAssetCarousel'
import {
  mockPlaylistCollections,
  newAssetMocks,
} from '@/components/Organisms/AssetTile/elements/mockAsset'
import { AssetSponsoring, AssetStrategy, AssetTileLayout } from '@/components/Organisms/AssetTile'

const mockAssets = {
  asset1: newAssetMocks[0],
  asset2: newAssetMocks[1],
  asset3: newAssetMocks[2],
}

export const assetNames = ['asset1', 'asset2', 'asset3']

const mockedAssetsWithNames = () => {
  const assets: Asset[] = []

  for (let i = 0; i < assetNames.length; i++) {
    assets.push(mockAssets[assetNames[i]])
  }

  return assets
}

const usableAssets = [...mockedAssetsWithNames(), ...mockedAssetsWithNames()]
const showSponsoring = boolean('Show Sponsoring', false)

const knobs = () => ({
  loading: boolean('Loading', false),
  slidesPerPageSettings: {
    desktop: number('Desktop', 3),
    tablet: number('tablet', 2),
    mobileBig: number('Large mobile', 2),
    mobileSmall: number('Small mobile', 2),
  },
  showArrows: boolean('Arrows', true),
  playlistOrientation: select(
    'Playlist Orientation',
    ['portrait', 'landscape', undefined],
    'portrait'
  ),
  NoAssetsComponent: <p>No Assets here</p>,
  tileMargin: select('Tile Margin', ['xs', 'sm', 'md'], 'sm'),
  playlistView: select('Playlist Type', ['list', 'collection'], 'list'),
  title: boolean('With Title', false) ? customTitle() : undefined,
  tileWidth: number('TileWidth', 360),
  sponsoringDetails: {
    showUppercase: true,
    isSponsored: showSponsoring,
    label: text('Label', 'Sponsored Content'),
    title: text('Title', 'Sponsored Content Title'),
    infoText: text('Info Text', 'Some more information about this sponsored content'),
  },
  onAssetClick: () => action('asset'),
  onLockClick: action('lock'),
  onSlideChange: action('slide changed'),
  renderAddToBookmarkButton: () => <div>Bookmark</div>,
  showNoAssets: boolean('With No Assets', false),
})

const fixedWidth = () => boolean('With Grid', false)

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

storiesOf('Design System/Organisms/AssetCarousel', module)
  .add('Default', () => {
    if (fixedWidth()) {
      return (
        <AssetCarousel
          {...knobs()}
          showBadges
          title={customTitle()}
          context={'dashboard'}
          assets={!knobs().showNoAssets ? usableAssets : []}
          sponsoringDetails={undefined}
          fixedArrowPosition={false}
          onAssetClick={action('asset')}
          onLockClick={action('lock')}
          onSlideChange={action('slide changed')}
          withGrid
        />
      )
    }

    return (
      <AssetCarousel
        {...knobs()}
        showBadges
        title={customTitle()}
        context={'homepage'}
        assets={!knobs().showNoAssets ? usableAssets : []}
        sponsoringDetails={undefined}
        fixedArrowPosition={false}
        onAssetClick={action('asset')}
        onLockClick={action('lock')}
        onSlideChange={action('slide changed')}
      />
    )
  })
  .add('Playlist collection', () => {
    return (
      <AssetCarousel
        {...knobs()}
        showBookmark={false}
        fixedArrowPosition={false}
        context={'webmobile-cms-landing-pages'}
        playlistView="collection"
        title={
          <Heading bold scale={'level-2'}>
            Your Collection
          </Heading>
        }
        slidesPerPageSettings={{
          desktop: 4,
          mobileBig: 1,
          mobileSmall: 1,
          tablet: 2,
        }}
        sponsoringDetails={{
          isSponsored: true,
          showUppercase: true,
          label: 'Your Playlists',
          title: 'Saved Playlists',
          infoText: 'Some random content so we can showcase sponsored asset content',
        }}
        assets={[...mockPlaylistCollections]}
        onAssetClick={action('asset')}
        onLockClick={action('lock')}
        onSlideChange={action('slide changed')}
      />
    )
  })
  .add('Playlists with disabled indexes', () => {
    return (
      <Grid>
        <Row>
          <Cell columns={12}>
            <AssetCarousel
              NoAssetsComponent={<>No Assets Found</>}
              loading={false}
              slidesPerPageSettings={{ desktop: 3, tablet: 2, mobileBig: 1, mobileSmall: 1 }}
              tileWidth={380}
              strategyType={AssetStrategy.structured}
              context="search"
              title={
                <Heading bold scale={'level-2'}>
                  Structured Strategy
                </Heading>
              }
              sponsoringDetails={{
                isSponsored: true,
                showUppercase: true,
                label: 'Recommendations',
                title: 'Notification Title',
                infoText: 'Some random content so we can showcase sponsored asset content',
              }}
              disabledAssetIndexes={[1, 2, 3, 4]}
              assets={usableAssets}
              onAssetClick={action('asset')}
              onLockClick={action('lock')}
              onSlideChange={action('slide changed')}
              fixedArrowPosition={false}
            />
          </Cell>
        </Row>
      </Grid>
    )
  })
  .add('Playlists fixed width asset on desktop', () => {
    return (
      <Grid>
        <Row>
          <Cell columns={12}>
            <AssetCarousel
              {...knobs()}
              NoAssetsComponent={<>No Assets Found</>}
              loading={false}
              context="dashboard"
              title={
                <Heading bold scale={'level-2'}>
                  Fixed Width
                </Heading>
              }
              sponsoringDetails={{
                isSponsored: true,
                showUppercase: true,
                label: 'Recommendations',
                title: 'Notification Title',
                infoText: 'Some random content so we can showcase sponsored asset content',
              }}
              slidesPerPageSettings={{
                desktop: 4,
                mobileBig: 1,
                mobileSmall: 1,
                tablet: 2,
              }}
              assets={[mockAssets.asset1, mockAssets.asset2, mockAssets.asset3]}
              onAssetClick={action('asset')}
              onLockClick={action('lock')}
              onSlideChange={action('slide changed')}
              fixedArrowPosition={false}
            />
          </Cell>
        </Row>
      </Grid>
    )
  })
  .add('Playlists view landscape', () => {
    return (
      <Grid>
        <Row>
          <Cell columns={12}>
            <AssetCarousel
              {...knobs()}
              NoAssetsComponent={<>No Assets Found</>}
              loading={false}
              context="dashboard"
              title={
                <Heading bold scale={'level-2'}>
                  Your Bookmarks
                </Heading>
              }
              playlistView="list"
              playlistLayout={AssetTileLayout.listItem}
              sponsoringDetails={{
                isSponsored: true,
                showUppercase: true,
                label: 'Recommendations',
                title: 'Notification Title',
                infoText: 'Some random content so we can showcase sponsored asset content',
              }}
              slidesPerPageSettings={{
                desktop: 2,
                mobileBig: 1,
                mobileSmall: 1,
                tablet: 2,
              }}
              withScrollbar
              assets={[
                mockAssets.asset1,
                mockAssets.asset2,
                mockAssets.asset3,
                mockAssets.asset1,
                mockAssets.asset2,
                mockAssets.asset3,
              ]}
              onAssetClick={action('asset')}
              onLockClick={action('lock')}
              onSlideChange={action('slide changed')}
              fixedArrowPosition={false}
            />
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <CopyText display="flex" fontSize="lg">
              Due to the amount of information on this version of asset tile, the best viewing mode
              is 2 assets per slide
            </CopyText>
          </Cell>
        </Row>
      </Grid>
    )
  })
