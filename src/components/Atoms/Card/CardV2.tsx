import * as React from 'react'
import { Badge } from '../Badge'
import { CardProps, FeaturedAssetProps, FeaturedAssetRowProps } from './Card.interface'
import {
  StyledBadgeLineWrapper,
  StyledCard,
  StyledCardWrapper,
  StyledDivider,
  StyledFeaturedAssetsContainer,
  StyledFeaturedAssetSpacing,
  StyledFeaturedAssetsPicture,
} from './Card.styled'

const FeaturedAsset: React.FC<FeaturedAssetProps> = ({ image }) => {
  return (
    <StyledFeaturedAssetSpacing>
      <Card
        center
        elevation={1}
        display="flex"
        shape="rounded-small"
        padding="xs"
        noBorder={['bottom', 'top', 'right', 'left']}>
        <StyledFeaturedAssetsPicture src={image} height="32px" objectFit="contain" width="auto" />
      </Card>
    </StyledFeaturedAssetSpacing>
  )
}

const FeaturedAssetRow: React.FC<FeaturedAssetRowProps> = ({
  floatingAssetRow,
  featuredAssetImages,
}) => {
  if (featuredAssetImages && featuredAssetImages.length > 0) {
    const featuredAssets = featuredAssetImages.map((fa, index) => (
      <FeaturedAsset key={'FeaturedAsset_' + fa.image + index} {...fa} />
    ))
    return <StyledFeaturedAssetsContainer>{featuredAssets}</StyledFeaturedAssetsContainer>
  } else {
    return null
  }
}

export const Card: React.FC<CardProps> = ({
  ariaLabel,
  ariaLabelledby,
  children,
  center = false,
  contentWidth,
  elevation = 0,
  elevationHover,
  fullHeight = false,
  noBorder = [],
  borderColor,
  borderWidth = 1,
  showDivider = false,
  floatingAssetRow = false,
  dividerWidth,
  padding,
  margin,
  shape,
  surface = 'white',
  textColor = 'black',
  overflow,
  display = 'block',
  flexDirection,
  badges = [],
  badgeActionType = 'prominent',
  onClick,
  className,
  featuredAssetImages,
  ...otherProps
}) => {
  const a11yProps = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    tabIndex: 0,
  }

  const card = (
    <StyledCard
      borderColor={borderColor}
      borderWidth={borderWidth}
      center={center}
      display={display}
      elevation={elevation}
      elevationHover={elevationHover}
      contentWidth={contentWidth}
      flexDirection={flexDirection}
      margin={margin}
      noBorder={noBorder}
      overflow={overflow}
      padding={padding}
      shape={shape}
      showDivider={showDivider}
      surface={surface}
      textColor={textColor}
      {...(onClick ? { ...a11yProps } : {})}>
      {children}
    </StyledCard>
  )

  return (
    <StyledCardWrapper
      className={className}
      elevationHover={elevationHover}
      fullHeight={fullHeight}
      onClick={onClick}
      {...(onClick ? { ...a11yProps } : {})}
      {...otherProps}>
      {badges && badges.length > 0 ? (
        <>
          <StyledBadgeLineWrapper>
            <Badge badges={badges} isBadgeLine actionType={badgeActionType} />
          </StyledBadgeLineWrapper>
          {card}
        </>
      ) : (
        card
      )}
      {showDivider && <StyledDivider dividerWidth={dividerWidth} />}
      <FeaturedAssetRow
        floatingAssetRow={floatingAssetRow}
        featuredAssetImages={featuredAssetImages}
      />
    </StyledCardWrapper>
  )
}
