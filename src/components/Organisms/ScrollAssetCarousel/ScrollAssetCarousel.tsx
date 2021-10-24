import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ScrollSnapSlider } from '@/components/Molecules/ScrollSnapSlider'
import { Asset } from '@/types'
import { breakpoints } from '@/styles'
import {
  AssetSponsoring,
  AssetTile,
  AssetTileLayout,
  AssetTileProps,
} from '@/components/Organisms/AssetTile'
import { ScrollAssetCarouselProps } from './ScrollAssetCarousel.interface'
import { CarouselWrapper, TileFragment, TileWrapper } from './ScrollAssetCarousel.styled'
import { useWindowDimensions } from '@/components/Helper'
import { BadgeType } from '@/components/Atoms/Badge'

export const AssetCarousel: React.FC<ScrollAssetCarouselProps> = ({
  loading = true,
  lazyLoad = true,
  promoted,
  promotedIndex = 0,
  assets = [],
  disabledAssetIndexes = [],
  context = 'home-scroll-carousel',
  tileMargin = 'md',
  withOverflow = true,
  withGrid = false,
  showArrows = true,
  showBookmark = true,
  NoAssetsComponent,
  showSkills = true,
  showProvider,
  sponsoringDetails,
  showLock = false,
  playlistOrientation = 'portrait',
  playlistView = 'list',
  playlistLayout = AssetTileLayout.gridItem,
  strategyType,
  videoFallbackImage,
  fixedArrowPosition = true,
  zeroArrowPosition = false,
  renderAddToBookmarkButton,
  title,
  tileWidth = 250,
  slidesPerPageSettings,
  hideDummies = false,
  dataTest,
  withLQIP,
  withNativeLoading,
  withScrollbar = true,
  onAssetClick = () => {
    return null
  },
  onLockClick = () => {
    return null
  },
  onSlideChange = () => {
    return null
  },
  onInView,
  arrowPrevClass,
  arrowNextClass,
}): JSX.Element | null => {
  const [scrolled, scrolledSet] = useState<boolean>(false)
  const { breakpoint } = useWindowDimensions()
  const [prevSlideIndex, setPrevSlideIndex] = useState(0)

  const assetsPerSlideWithHook =
    breakpoint >= breakpoints.lg
      ? slidesPerPageSettings.desktop
      : breakpoint >= breakpoints.md
      ? slidesPerPageSettings.tablet
      : slidesPerPageSettings.mobileBig

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '50px 0px',
  })

  useEffect(() => {
    if (inView && onInView !== undefined && !loading && assets.length > 0) {
      onInView({ context })
    }
  }, [inView, loading, onInView, context, assets])

  if (!assets || assets.length < 1) {
    return !loading ? NoAssetsComponent : null
  }

  const handleSlideChange = (assetsPerSlide: number) => (nextSlideIndex: number) => {
    scrolledSet(false)
    const direction = nextSlideIndex > prevSlideIndex ? 'Next' : 'Previous'
    const slideIndex = nextSlideIndex / assetsPerSlide
    setPrevSlideIndex(nextSlideIndex)
    const assetsInSlide = assets.slice(
      slideIndex * assetsPerSlide,
      slideIndex * assetsPerSlide + assetsPerSlide
    )
    onSlideChange?.({
      assets: assetsInSlide,
      direction,
      assetAmount: assetsPerSlide,
      pageNumber: slideIndex,
      context,
    })
  }

  const handleAssetClick = (assetsPerSlide: number) => (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    asset: Asset | Partial<Asset>,
    index: number,
    pageNumber: number
  ) => {
    if (scrolled) {
      event.preventDefault()
    }

    if (!asset.locked && onAssetClick) {
      onAssetClick({ asset, index, assetsPerSlide, pageNumber, context })
    }
  }

  const handleLockClick = (assetsPerSlide: number) => (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    asset: Asset | Partial<Asset>,
    index: number,
    pageNumber: number
  ) => {
    if (onLockClick) {
      onLockClick({ asset, index, assetsPerSlide, pageNumber, context })
    }
  }

  const tileSettings: Omit<AssetTileProps, 'asset'> = {
    loading: loading,
    fontSize: 'sm',
    sponsoringDetails: undefined,
    withEllipsis: true,
  }

  const carouselOrientation = playlistLayout === AssetTileLayout.gridItem ? 'portrait' : 'landscape'
  const isGridLayout = playlistLayout === AssetTileLayout.gridItem

  const renderAsset = (assetsPerSlide: number) => (
    asset: Asset | Partial<Asset>,
    index: number
  ): JSX.Element => {
    const slideIndex = Math.floor(index / assetsPerSlide)
    const isDummyTile = !withOverflow && !asset.description

    const assetTileAsset: Asset | Partial<Asset> = {
      ...asset,
    }

    // no wrapper in case of sponsored asset
    const Wrapper = sponsoringDetails?.isSponsored ? TileFragment : TileWrapper
    const assetsWithSponsor = assetTileAsset?.sponsored
    const loading = tileSettings.loading || isDummyTile
    const disabled = disabledAssetIndexes.findIndex(x => x === index) !== -1

    return (
      <Wrapper
        hideDummy={isDummyTile && hideDummies && !scrolled}
        aria-rowindex={index}
        key={`AssetTile-${index}`}
        withLabels={assetsWithSponsor}>
        <AssetTile
          {...tileSettings}
          showProvider={showProvider}
          showSkills={showSkills}
          badges={
            (playlistView === 'collection' &&
              asset?.__typename &&
              ([{ name: asset?.__typename, actionType: 'prominent' }] as BadgeType[])) ||
            []
          }
          videoFallbackImage={videoFallbackImage}
          isCollection={playlistView === 'collection'}
          orientation={carouselOrientation}
          sponsoringDetails={undefined} // todo: allow sponsored assets to curate custom content
          showBookmark={showBookmark}
          showLock={showLock}
          isDisabled={disabled}
          assetView={playlistView}
          assetIndex={index}
          fontSize="sm"
          strategyType={strategyType}
          renderAddToBookmarkButton={renderAddToBookmarkButton}
          onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
            handleAssetClick(assetsPerSlide)(e, asset, index, slideIndex)
          }
          onLockClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
            handleLockClick(assetsPerSlide)(e, asset, index, slideIndex)
          }
          loading={loading}
          layout={playlistLayout}
          asset={assetTileAsset}
          lazyLoad={lazyLoad}
          inView={inView}
        />
      </Wrapper>
    )
  }

  const renderAssets = () => {
    if (!promoted)
      return [...assets.map(renderAsset(assetsPerSlideWithHook)), <div key="right-spacer" />]
    const promotedElement: (boolean | JSX.Element | null)[] = promoted ? [promoted] : []
    return [
      ...assets.slice(0, promotedIndex).map(renderAsset(assetsPerSlideWithHook)),
      ...promotedElement,
      ...assets.slice(promotedIndex).map(renderAsset(assetsPerSlideWithHook)),
      <div key="right-spacer" />,
    ]
  }

  return (
    <CarouselWrapper
      tileMargin={tileMargin}
      isGridLayout={isGridLayout}
      tileWidth={tileWidth}
      setFixedWidth={slidesPerPageSettings?.desktop >= 4 || assets.length < 4}
      ref={ref}
      key={`Carousel-${assets.length}`}
      {...(typeof dataTest !== 'undefined' && { 'data-test': dataTest })}>
      {sponsoringDetails ? (
        <AssetSponsoring layout="carousel" sponsoringDetails={sponsoringDetails} />
      ) : null}
      <ScrollSnapSlider
        slideWidth={tileWidth}
        isGridLayout={isGridLayout}
        withGrid={withGrid}
        showScrollbar={withScrollbar && assets.length > 3}
        onScrollStart={() => {
          if (!scrolled) scrolledSet(true)
        }}
        onScrollEnd={handleSlideChange(assetsPerSlideWithHook)}
        showArrows={showArrows && assets.length > 3}
        arrowDataTest="scroll-snap-slider-arrow"
        arrowPrevClass={arrowPrevClass}
        arrowNextClass={arrowNextClass}
        fixedArrowPosition={fixedArrowPosition}
        zeroArrowPosition={zeroArrowPosition}
        slidesPerPageSettings={slidesPerPageSettings}
        title={title}>
        {renderAssets()}
      </ScrollSnapSlider>
    </CarouselWrapper>
  )
}
