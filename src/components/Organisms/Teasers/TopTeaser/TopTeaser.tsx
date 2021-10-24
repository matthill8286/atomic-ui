import React, { FC, ReactElement, useContext } from 'react'
import { HeroBanner } from '../../HeroBanner'
import { HeroBannerProps } from '../../HeroBanner/HeroBanner.interface'
import { Picture, PictureObjectFit } from '@/components/Atoms/Picture'
import { TileImages } from '@/components/Organisms/HeroBanner/HeroBanner.interface'
import { FeaturedHeadingProps, FeaturedImageProps, HeroContent } from './TopTeaser.interface'
import { ThemeContext } from '@/styles'
import {
  StyledFeatureImage,
  StyledHeroContentContainer,
  StyledHeroFeatureSection,
  StyledIconContainer,
  StyledHeroFeatureCopy,
  StyledHeroFeatureIntro,
} from './TopTeaser.styled'

const StyledFeaturedHeading: FC<FeaturedHeadingProps> = ({ children, primary, secondary }) => {
  const theme = useContext(ThemeContext)
  const { font, background } = theme.hero.intro
  const { font: copyFont, background: copyBackground } = theme.hero.copy
  return (
    <StyledHeroFeatureSection>
      {primary && (
        <StyledHeroFeatureIntro
          textAlign="left"
          color="white"
          tag="div"
          padding="0"
          fontFamily="default"
          margin="0"
          fontSize={{
            desktop: font.size,
            tablet: 'sm',
            mobile: 'xs',
          }}
          background={background}
          toUpperCase>
          {primary}
        </StyledHeroFeatureIntro>
      )}
      {secondary && (
        <StyledHeroFeatureCopy
          textAlign="left"
          color="white"
          weight="bold"
          fontFamily="default"
          margin="0"
          tag="div"
          padding="sm"
          fontSize={{
            desktop: copyFont.size,
            tablet: 'xxxl',
            mobile: 'xl',
          }}
          background={copyBackground}>
          {secondary}
        </StyledHeroFeatureCopy>
      )}
      {children}
    </StyledHeroFeatureSection>
  )
}

const FeaturedImage: React.FC<FeaturedImageProps> = ({ svg, images, objectFit }) => {
  return (
    <StyledFeatureImage>
      {images && (
        <Picture
          src={images.xl}
          srcLg={images.lg}
          srcMd={images.md}
          srcSm={images.sm}
          objectFit={'fill' as PictureObjectFit}
          height="100%"
          width="100%"
        />
      )}

      {svg && <StyledIconContainer>{svg}</StyledIconContainer>}
    </StyledFeatureImage>
  )
}

export interface FeaturedContentProps {
  svg?: JSX.Element | ReactElement | undefined
  content?: HeroContent
  images?: TileImages | undefined
}

export const FeaturedContent: React.FC<FeaturedContentProps> = ({ images, content, svg }) => {
  const renderIntro = content?.primary ? `Hi ${content.name || ''}, ${content.primary}` : null
  const renderWithNoPrimary = !content?.name ? content?.primary : renderIntro

  return (
    <>
      {(images || svg) && (
        <StyledHeroContentContainer>
          <FeaturedImage images={images} svg={svg} />
        </StyledHeroContentContainer>
      )}
      <StyledFeaturedHeading
        primary={renderWithNoPrimary as HeroContent['primary']}
        secondary={content?.secondary as HeroContent['secondary']}
      />
    </>
  )
}

export const TopTeaser: React.FC<HeroBannerProps & FeaturedContentProps> = ({
  badges,
  heroImages,
  content,
  svg,
  badgeActionType,
  color,
  images,
  height,
  link,
  onClick,
}) => {
  return (
    <HeroBanner
      link={link}
      color={color}
      height={height}
      badges={badges}
      badgeActionType={badgeActionType}
      heroImages={heroImages}
      onClick={onClick}>
      <FeaturedContent content={content} images={images} svg={svg} />
    </HeroBanner>
  )
}
