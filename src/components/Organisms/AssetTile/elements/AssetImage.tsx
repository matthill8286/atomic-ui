import React from 'react'
import { PictureObjectFit } from '@/components/Atoms/Picture'
import { SkeletonBlockItem } from '@/components/Atoms/Skeleton'
import { LazyLoadImage } from '@/components/Molecules/LazyLoadImage'
import { media } from '@/styles/media'
import { css, styled } from '@/styles/styled'
import { isAlternateTheme } from '@/utils/helper'
import { isPortrait } from '@/components/Organisms/AssetTile/AssetTile.styled'

export interface StyledPictureWrapperProps {
  hasBottomMargin?: boolean
  maxWidth?: string
  minWidth?: string
}

export interface AssetImageProps extends StyledPictureWrapperProps {
  height?: string
  lazyLoad?: boolean
  loading?: boolean
  onPictureClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  assetImage?: string | null
  title?: string | null
  width?: string
  withLQIP?: boolean
  rounded?: boolean
  withNativeLoading?: boolean
}

const StyledPictureWrapper = styled.div<StyledPictureWrapperProps>`
  ${({ hasBottomMargin, theme, minWidth, maxWidth }) => `
    text-align: center;
    flex: 1;
    height: ${({ orientation, isCompact, height }) => (!isPortrait(orientation) ? '100%' : height)};

    ${media.md} {
      ${
        !hasBottomMargin
          ? css`
              margin: 0;
            `
          : ''
      }
      text-align: unset;
    }
`}
`

export const AssetImage: React.FC<AssetImageProps> = ({
  children,
  hasBottomMargin = false,
  height,
  lazyLoad,
  loading = false,
  onPictureClick,
  assetImage,
  rounded,
  title,
  width = '100%',
  minWidth,
  maxWidth,
  withLQIP,
  withNativeLoading,
}) => {
  if (loading) {
    return (
      <StyledPictureWrapper
        hasBottomMargin={hasBottomMargin}
        minWidth={minWidth}
        maxWidth={maxWidth}
        onClick={onPictureClick}>
        <SkeletonBlockItem width={width} height={height} />
      </StyledPictureWrapper>
    )
  }
  return (
    <StyledPictureWrapper hasBottomMargin={hasBottomMargin} onClick={onPictureClick}>
      <LazyLoadImage
        data-test="asset-card-image"
        src={assetImage}
        alt={title}
        height={height}
        width={width}
        rounded={rounded}
        objectFit={
          isAlternateTheme() ? ('fill' as PictureObjectFit) : ('cover' as PictureObjectFit)
        }
        lazyLoad={lazyLoad}
        withLQIP={withLQIP}
        withNativeLoading={withNativeLoading}>
        {children}
      </LazyLoadImage>
    </StyledPictureWrapper>
  )
}
