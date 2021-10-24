import React, { useState } from 'react'
import { useWindowDimensions } from '@/components/Helper/useWindowDimensions'
import { SimpleCarousel } from '@/components/Molecules/SimpleCarousel'
import { breakpoints } from '@/styles'
import { Asset } from '@/types/asset'
import { AssetTile, AssetTileLayout } from '../AssetTile'
import { AssetCarouselProps, CarouselConfigProps } from './LazyAssetCarousel.interface'
import { ClippingWrapper, StyledTileWrapper, StyledHeading } from './LazyAssetCarousel.styled'
import { useBadges } from './useBadges'

export const LazyAssetCarousel: React.FC<AssetCarouselProps> = ({
  loading = true,
  lazyLoad = true,
  assets = [],
  context = 'homepage-asset-carousel',
  withOverflow = true,
  withPadding = true,
  hideLeftOverflow = false,
  arrows = true,
  brightArrows = true,
  dots = true,
  title,
  smallSlides = 1,
  mediumSlides = 2,
  largeSlides = 4,
  smallConfig = {},
  mediumConfig = {},
  largeConfig = {},
  showBookmark = true,
  showSkills = true,
  showProvider,
  showLock = false,
  fixedWidth,
  tileWidth,
  playlistOrientation = 'portrait',
  playlistView = 'list',
  playlistLayout = AssetTileLayout.gridItem,
  strategyType = undefined,
  videoFallbackImage,
  renderAddToBookmarkButton,
  onAssetClick = () => {
    return null
  },
  onLockClick = () => {
    return null
  },
  onSlideChange = () => {
    return null
  },
  customSlickSettings,
}) => {
  const { breakpoint } = useWindowDimensions()
  const [prevSlideIndex, setPrevSlideIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  if (!assets) {
    return null
  }

  const assetsPerSlideWithHook =
    breakpoint >= breakpoints.lg
      ? largeSlides
      : breakpoint >= breakpoints.md
      ? mediumSlides
      : smallSlides

  const currentConfig =
    breakpoint >= breakpoints.lg
      ? largeConfig
      : breakpoint >= breakpoints.md
      ? mediumConfig
      : smallConfig

  const getLeftOverflow = (config: CarouselConfigProps): boolean =>
    config.hideLeftOverflow ?? hideLeftOverflow

  const withArrows = (config: CarouselConfigProps): boolean => config.arrows ?? arrows
  const withDots = (config: CarouselConfigProps): boolean => config.dots ?? dots

  const handleSlideChange = (assetsPerSlide: number) => (nextSlideIndex: number) => (
    assets: Asset[]
  ) => {
    setIsDragging(false)
    const direction = nextSlideIndex > prevSlideIndex ? 'Next' : 'Previous'
    const slideIndex = nextSlideIndex / assetsPerSlide + 1
    const totalNumberOfPages = assets.length / assetsPerSlide

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
      numberOfPages: totalNumberOfPages,
    })
  }

  const handleAssetClick = (assetsPerSlide: number) => (
    e: React.MouseEvent<HTMLElement>,
    asset: Asset,
    index: number,
    pageNumber: number
  ) => {
    if (isDragging) {
      e.preventDefault()
    } else {
      onAssetClick({ asset, index, assetsPerSlide, pageNumber, context })
    }
  }

  const handleLockClick = (assetsPerSlide: number) => (
    e: React.MouseEvent<HTMLElement>,
    asset: Asset,
    index: number,
    pageNumber: number
  ) => {
    if (isDragging) {
      e.preventDefault()
    } else {
      onLockClick?.({ asset, index, assetsPerSlide, pageNumber, context })
    }
  }

  const slickSettings = (config: CarouselConfigProps) => ({
    infinite: false,
    speed: 250,
    initialSlide: 0,
    dots: withDots(config),
    arrows: withArrows(config),
    beforeChange: (oldSlide: number, newSlide: number) => {
      if (oldSlide !== newSlide) {
        setIsDragging(true)
      }
    },
    ...customSlickSettings,
  })

  const carouselSettings = (config: CarouselConfigProps) => ({
    hasOverflow: config.withOverflow ?? withOverflow,
    hasPadding: config.withPadding ?? withPadding,
    fixedWidth: fixedWidth,
    brightArrows: brightArrows,
  })

  const tileSettings = {
    showBadges: true,
    loading: loading,
    isCompact: false,
    fontSize: 'xs',
    withEllipsis: true,
  }

  const renderAsset = (assetsPerSlide: number) => (asset: Asset, index: number) => {
    const slideIndex = Math.floor(index / assetsPerSlide)
    const isDummyTile = !withOverflow && !asset.description
    const badges = useBadges({ asset, playlistView })

    const loading = tileSettings.loading || isDummyTile

    return (
      <StyledTileWrapper key={index} withLabels>
        <AssetTile
          {...tileSettings}
          showProvider={showProvider}
          showSkills={showSkills}
          assetIndex={slideIndex}
          isDisabled={asset?.locked}
          videoFallbackImage={videoFallbackImage}
          isCollection={playlistView === 'collection'}
          orientation={playlistOrientation}
          badges={badges}
          sponsoringDetails={undefined} // TODO: allow sponsored assets to curate custom content
          showBookmark={showBookmark}
          showLock={showLock}
          assetView={playlistView}
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
          asset={asset}
          lazyLoad={lazyLoad}
        />
      </StyledTileWrapper>
    )
  }

  return (
    <ClippingWrapper hideLeft={getLeftOverflow(currentConfig)}>
      {title ? <StyledHeading>{title}</StyledHeading> : null}
      <SimpleCarousel
        tileWidth={tileWidth}
        fixedWidth={fixedWidth}
        sliderSettings={{
          ...slickSettings(currentConfig),
          afterChange: (current: number) =>
            handleSlideChange(assetsPerSlideWithHook)(current)(assets),
          slidesToShow: assetsPerSlideWithHook,
          slidesToScroll: assetsPerSlideWithHook,
        }}
        items={assets}
        renderSlide={renderAsset(assetsPerSlideWithHook)}
        {...carouselSettings(currentConfig)}
      />
    </ClippingWrapper>
  )
}

LazyAssetCarousel.displayName = 'LazyAssetCarousel'
