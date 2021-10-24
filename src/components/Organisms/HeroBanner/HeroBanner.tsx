import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Card } from '@/components/Atoms/Card'
import { Picture } from '@/components/Atoms/Picture'
import { media, styled } from '@/styles'
import { HeightMap } from '@/types'
import { HeroBannerProps } from './HeroBanner.interface'

const StyledHeroImageWrapper = styled.div<{ height?: HeightMap; isLinking?: boolean }>`
  cursor: ${({ isLinking }) => (isLinking ? 'pointer' : 'default')};
  width: 100%;
  display: flex;
  height: ${({ height }) => height && height.mobile && `${height.mobile}px`};

  ${media.md} {
    height: ${({ height }) => height && height.tablet && `${height.tablet}px`};
  }

  ${media.lg} {
    height: ${({ height }) => height && height.desktop && `${height.desktop}px`};
  }
`

export const HeroBanner: React.FC<HeroBannerProps> = ({
  badges,
  link,
  badgeActionType,
  height,
  color,
  heroImages,
  elevation = 0,
  elevationHover = 4,
  children,
  onClick,
}) => {
  const history = useHistory()

  const onTileClick = (event: React.MouseEvent) => {
    if (typeof onClick === 'function') {
      onClick(event)
    }

    // navigate to link
    if (link?.to) return history.push(link.to)
    if (link?.href) return (window.location.href = link.href)
  }

  const ref = useRef(null)
  const addElevationHover = link?.to || link?.href ? elevationHover : 0

  return (
    <StyledHeroImageWrapper
      ref={ref}
      onClick={onTileClick}
      height={height}
      isLinking={!!link?.to || !!link?.href}>
      <Card
        elevation={elevation}
        elevationHover={addElevationHover}
        shape="rounded-small"
        surface={color}
        display="flex"
        noBorder={'none'}
        fullHeight
        contentWidth="100%"
        badges={badges}
        badgeActionType={badgeActionType}>
        {heroImages && (
          <Picture
            src={heroImages.xl}
            srcLg={heroImages.lg}
            srcMd={heroImages.md}
            srcSm={heroImages.sm}
            objectFit="cover"
            height="100%"
            width="100%"
          />
        )}
        {children}
      </Card>
    </StyledHeroImageWrapper>
  )
}
