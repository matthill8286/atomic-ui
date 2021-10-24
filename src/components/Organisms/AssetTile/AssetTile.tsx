import React from 'react'
import {
  AssetTileLayout,
  AssetTileProps,
  TileSettings,
} from '@/components/Organisms/AssetTile/AssetTile.interface'
import { useLayoutComponent } from '@/components/Organisms/AssetTile/helpers/layout'
import { Reduced } from '@/components/Organisms/AssetTile/AssetTilePresetProps'

const DEFAULT_LINE_LIMIT = 2

export const AssetTile: React.FC<AssetTileProps> = ({
  badges,
  badgeActionType,
  noBorder,
  borderColor,
  fullHeight,
  isCompact = false,
  isMobileView = false,
  expanded,
  fontSize,
  inView,
  strategyType,
  assetIndex,
  assetView = 'list',
  assetSponsoring,
  children,
  color,
  elevation = 0,
  elevationHover = 0,
  headlineLimitLines = DEFAULT_LINE_LIMIT,
  limitContentLines = DEFAULT_LINE_LIMIT,
  mainLink,
  competencyLabel,
  showBadges = true,
  showBookmark = true,
  showLock = false,
  showSkills = true,
  showAssetMeta = true,
  showFeatured = false,
  showOptions = false,
  showProvider = true,
  showInteractions,
  showMoreText,
  showLessText,
  showLikes,
  showMoreNumOfLines,
  showImage,
  showMoreAlignment,
  fadeOutColor,
  sponsoringDetails,
  lazyloadLowQuality = false,
  renderAddToBookmarkButton,
  loading = false,
  isOpenAsset = false,
  layout = AssetTileLayout.auto,
  orientation = 'portrait',
  asset,
  lazyLoad,
  onClick,
  onLockClick,
  onCompleteClick,
  roundImages,
  withLQIP,
  withEllipsis,
  withNativeLoading,
  videoFallbackImage,
}) => {
  const LayoutComponent = useLayoutComponent(layout)

  if (!asset && !loading) {
    return null
  }

  const baseTileSettings: TileSettings = {
    loading: loading,
    fontSize: 'xs' || fontSize,
    sponsoringDetails: undefined,
    withEllipsis: true,
    headlineLimitLines: 2,
    showAssetMeta: true,
    showBookmark,
    showLock: showLock || false,
    showSkills: true,
  }

  const isCollection = assetView === 'collection'
  const tileSettings: { [p: string]: boolean } | TileSettings = isCollection
    ? { ...Reduced }
    : { ...baseTileSettings }

  return (
    <LayoutComponent
      elevationHover={elevationHover}
      expanded={expanded}
      fullHeight={fullHeight}
      asset={asset}
      color={color}
      badges={badges}
      mainLink={mainLink}
      competencyLabel={competencyLabel}
      inView={inView}
      assetView={assetView}
      strategyType={strategyType}
      isCompact={isCompact}
      isCollection={isCollection}
      isMobileView={isMobileView}
      lazyLoad={lazyLoad}
      loading={loading}
      noBorder={noBorder}
      roundImages={roundImages}
      assetSponsoring={assetSponsoring}
      borderColor={borderColor}
      limitContentLines={limitContentLines}
      onClick={onClick}
      onCompleteClick={onCompleteClick}
      onLockClick={onLockClick}
      videoFallbackImage={videoFallbackImage}
      showInteractions={showInteractions}
      showFeatured={showFeatured}
      showProvider={showProvider}
      isOpenAsset={isOpenAsset}
      showImage={showImage}
      showLikes={showLikes}
      showMoreText={showMoreText}
      showLessText={showLessText}
      showMoreAlignment={showMoreAlignment}
      showMoreNumOfLines={showMoreNumOfLines}
      fadeOutColor={fadeOutColor}
      renderAddToBookmarkButton={renderAddToBookmarkButton}
      showOptions={showOptions}
      orientation={orientation}
      sponsoringDetails={sponsoringDetails}
      withLQIP={withLQIP}
      withNativeLoading={withNativeLoading}
      {...tileSettings}>
      {children}
    </LayoutComponent>
  )
}
