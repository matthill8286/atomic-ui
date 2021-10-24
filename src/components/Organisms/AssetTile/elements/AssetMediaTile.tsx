import React from 'react'
import { SkeletonBlockItem } from '@/components/Atoms/Skeleton'
import { StyledMediaContainer, StyledLinearGradient } from '../AssetTile.styled'
import { MediaProps } from '@/components/Organisms/AssetTile'

export const AssetMediaTile: React.FC<MediaProps> = ({
  AssetMediaWrapper,
  children,
  orientation,
  height,
  width,
  minWidth,
  minHeight,
  isCompact,
  loading = false,
  unsupportedMedia,
  isDisabled,
  onMediaClick,
  assetImage,
  videoFallbackImage,
  mediaType,
  title,
  ...props
}) => {
  const inputProps = mediaType === 'Video' ? { src: videoFallbackImage } : { src: assetImage }
  return (
    <StyledMediaContainer
      imageHeight={height}
      width={width}
      isDisabled={isDisabled}
      isCompact={isCompact}
      onClick={onMediaClick}
      orientation={orientation}>
      {loading || !assetImage ? (
        <SkeletonBlockItem height="100%" width="100%" />
      ) : (
        <AssetMediaWrapper src={assetImage} rounded height={height} width={width} title={title}>
          {!isCompact && <StyledLinearGradient />}
          {children}
        </AssetMediaWrapper>
      )}
    </StyledMediaContainer>
  )
}
