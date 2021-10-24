import React from 'react'
import { AssetTileCompactProps } from './AssetTileCompact.interface'
import { StyledContentList, StyledAssetTileCompactWrapper } from './AssetTileCompact.styled'
import { AssetImage } from '@/components/Organisms/AssetTileCompact/elements'

export const AssetTileCompact: React.FC<AssetTileCompactProps> = ({
  children,
  assetImage,
  imageWidth = 132,
  imageHeight = 74,
  imageMaxWidth,
  imageMinWidth,
  lazyLoadImage,
  loading = false,
  showImage = true,
  onClick,
  title,
  embedUrl,
  unsupportedMedia,
  imageLink,
  isVideo,
  ...props
}) => {
  return (
    <StyledAssetTileCompactWrapper data-test="compact-wrapper" {...props}>
      {showImage && (
        <AssetImage
          loading={!!loading}
          onPictureClick={onClick}
          title={title}
          width="172px"
          height="74px"
          assetImage={assetImage}
        />
      )}
      <StyledContentList onClick={onClick}>{children}</StyledContentList>
    </StyledAssetTileCompactWrapper>
  )
}
