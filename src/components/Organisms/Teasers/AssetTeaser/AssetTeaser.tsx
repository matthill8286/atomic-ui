import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Surface } from '@/components/Atoms/Card'
import { NativeLazyLoadOptions, Picture } from '@/components/Atoms/Picture'
import { Tag } from '@/components/Atoms/Tag'
import { CopyText, Heading, HeadingFeatured } from '@/components/Atoms/Typography'
import { media, ALTERNATE, styled, ThemeConsumer } from '@/styles'
import { spacing } from '@/styles/sc-vars-global'
import { Theme } from '@/types/theme'
import {
  TopTeaserBackgroundProps,
  TopTeaserInfoProps,
  TopTeaserMainHeadingProps,
  TopTeaserProps,
  TopTeaserTagsProps,
} from './AssetTeaser.interface'
import {
  StyledBackgroundImage,
  StyledCard,
  StyledBadgeWrapper,
  StyledFlexBottomContainer,
  StyledInfoContainer,
  StyledInfoContainerContent,
  StyledInfoTextContainer,
  StyledLink,
  StyledMainContainer,
  StyledPictureContainer,
  StyledAssetContainer,
  StyledRect,
  StyledTongue,
  StyledTopTeaserTagWrapper,
  StyledUpsetRect,
  StyledWrapper,
} from './AssetTeaser.styled'
import { Badge } from '@/components/Atoms/Badge'

const StyledFFSaturn = styled.div`
  display: none;
  ${({ theme }) =>
    theme.name === ALTERNATE &&
    `
  ${media.md} {
    display: block;
  }

  > svg {
    position: absolute;
    left: -1px;
    top: 0;
    z-index: 1;
    height: 100%;
    width: auto;

    ${media.ie11} {
      width: 100px;
      top: -7px;
    }
  }`}
`

const Info: React.FC<TopTeaserInfoProps> = ({ contentText, tags, limitLines }) => {
  return (
    <StyledInfoTextContainer>
      <CopyText
        fontSize="sm"
        lineHeight="sm"
        limitLines={limitLines ? limitLines : tags && tags.length > 0 ? 3 : 5}
        tag="span">
        {contentText}
      </CopyText>
    </StyledInfoTextContainer>
  )
}

const Tags: React.FC<TopTeaserTagsProps> = ({ tags }) => {
  if (tags && tags.length > 0) {
    return (
      <StyledFlexBottomContainer>
        <StyledTopTeaserTagWrapper limitLines={2}>
          {tags.map((t, index) => {
            return t && t.trim().length > 0 ? (
              <Tag key={'Tag_' + t + index} text={t} marginBottom marginRight />
            ) : (
              undefined
            )
          })}
        </StyledTopTeaserTagWrapper>
      </StyledFlexBottomContainer>
    )
  } else {
    return null
  }
}

const Background: React.FC<TopTeaserBackgroundProps> = ({
  backgroundVariant,
  image,
  imageDesktop,
  lazyloadBackgroundImage,
  hasAsset,
  theme,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  const hasQueryParams = image?.indexOf('?') !== -1
  const imageUrl = imageDesktop ? imageDesktop : image

  const lazyLoadImage = imageUrl ? `${imageUrl}${hasQueryParams ? '&' : '?'}q=1` : undefined

  if (theme === ALTERNATE) {
    return (
      <StyledRect
        ref={ref}
        image={imageUrl}
        inView={inView}
        lazyLoadImage={lazyLoadImage}
        hasAsset={hasAsset}
        lazyloadBackgroundImage={lazyloadBackgroundImage}
      />
    )
  } else {
    switch (backgroundVariant) {
      case 'tongue':
        return (
          <StyledTongue ref={ref} height={140}>
            <StyledBackgroundImage
              image={imageUrl}
              inView={inView}
              lazyLoadImage={lazyLoadImage}
              hasAsset={hasAsset}
              lazyloadBackgroundImage={lazyloadBackgroundImage}
            />
          </StyledTongue>
        )
      case 'upsetRect':
        return <StyledUpsetRect ref={ref} image={imageUrl} hasAsset={hasAsset} />
      case 'rect':
        return (
          <StyledRect
            ref={ref}
            image={imageUrl}
            inView={inView}
            lazyLoadImage={lazyLoadImage}
            hasAsset={hasAsset}
            lazyloadBackgroundImage={lazyloadBackgroundImage}
          />
        )
    }
  }
}

const MainHeading: React.FC<TopTeaserMainHeadingProps> = ({ headline, themeName, limitLines }) => (
  <HeadingFeatured fixedMdSize={themeName === ALTERNATE} limitLines={limitLines}>
    {headline}
  </HeadingFeatured>
)

export const AssetTeaser: React.FC<TopTeaserProps> = ({
  smallHeadline,
  background = 'grey',
  headline,
  contentText,
  assetImage,
  backgroundImage,
  backgroundImageDesktop,
  lazyload,
  lazyloadBackgroundImage,
  tags,
  limitLines,
  backgroundVariant = 'upsetRect',
  elevation = 0,
  elevationHover,
  link,
  fixedImageHeight = false,
  onClick,
  clickableWithoutLink = true,
  badges,
  ...rest
}) => {
  const isClickable = (!!onClick && clickableWithoutLink) || !!link?.href
  return (
    <ThemeConsumer>
      {(theme?: Theme) => {
        return (
          <StyledLink to={link?.to} href={link?.href} onClick={onClick} underline={false}>
            <StyledWrapper>
              <StyledCard
                elevation={elevation}
                elevationHover={elevationHover}
                display="flex"
                fullHeight
                noBorder={'none'}
                surface={background as Surface}
                badges={[]}
                {...rest}>
                <StyledMainContainer isClickable={isClickable}>
                  <StyledInfoContainer
                    backgroundVariant={backgroundVariant}
                    hasTags={!!tags && tags.length > 0}
                    hasAsset={!!assetImage}>
                    {badges && badges.length > 0 && (
                      <StyledBadgeWrapper>
                        <Badge actionType="secondary" badges={badges} />
                      </StyledBadgeWrapper>
                    )}
                    <StyledInfoContainerContent hasBadges={Boolean(badges && badges.length > 0)}>
                      {smallHeadline && (
                        <Heading
                          tag="p"
                          scale="level-5"
                          weight="semibold"
                          lineHeight="sm"
                          limitLines={1}
                          limitWidth={theme?.name === ALTERNATE ? '300px' : '350px'}
                          margin={`0 0 ${spacing.base.xs} 0`}
                          uppercase>
                          {smallHeadline}
                        </Heading>
                      )}
                      <MainHeading headline={headline} themeName={theme?.name} limitLines={2} />
                      <Info contentText={contentText} tags={tags} limitLines={limitLines} />
                      <Tags tags={tags} />
                    </StyledInfoContainerContent>
                  </StyledInfoContainer>
                  <StyledAssetContainer fixedImageHeight={fixedImageHeight}>
                    <Background
                      image={backgroundImage}
                      imageDesktop={backgroundImageDesktop}
                      lazyloadBackgroundImage={lazyloadBackgroundImage}
                      backgroundVariant={backgroundVariant}
                      hasAsset={!!assetImage}
                      theme={theme?.name}
                    />
                    {assetImage && (
                      <StyledPictureContainer>
                        <Picture
                          src={assetImage}
                          height="100%"
                          loading={
                            lazyload ? NativeLazyLoadOptions.Lazy : NativeLazyLoadOptions.Eager
                          }
                        />
                      </StyledPictureContainer>
                    )}
                  </StyledAssetContainer>
                </StyledMainContainer>
              </StyledCard>
            </StyledWrapper>
          </StyledLink>
        )
      }}
    </ThemeConsumer>
  )
}
