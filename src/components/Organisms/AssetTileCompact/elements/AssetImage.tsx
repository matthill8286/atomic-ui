import React from 'react'
import { Link } from '@/components/Atoms/Link'
import { NativeLazyLoadOptions, NativeLazyLoadType, Picture } from '@/components/Atoms/Picture'
import { SkeletonBlockItem } from '@/components/Atoms/Skeleton'
import { media } from '@/styles/media'
import { styled } from '@/styles/styled'

export interface AssetImageProps {
  width?: string
  height?: string
  assetImage?: string
  title?: string
  loading?: boolean
  onPictureClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  imageLink?: string
  lazyLoad?: NativeLazyLoadType
}

const StyledPictureWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-left: 12px;

  ${media.md} {
    text-align: unset;
  }
`

export const AssetImage: React.FC<AssetImageProps> = ({
  assetImage,
  children,
  width,
  height,
  title,
  onPictureClick,
  lazyLoad = NativeLazyLoadOptions.Eager,
  loading = false,
  imageLink,
  ...props
}) => {
  const AssetPicture: React.FC = () => (
    <Picture rounded src={assetImage} alt={title} width={width} height={height} loading={lazyLoad}>
      {children}
    </Picture>
  )

  return (
    <StyledPictureWrapper onClick={onPictureClick} {...props}>
      {assetImage && !loading ? (
        imageLink ? (
          <Link to={imageLink} inline={false} underline={false}>
            <AssetPicture />
          </Link>
        ) : (
          <AssetPicture />
        )
      ) : (
        <SkeletonBlockItem width={width} height={height} />
      )}
    </StyledPictureWrapper>
  )
}
