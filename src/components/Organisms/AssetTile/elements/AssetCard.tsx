import React from 'react'
import { Card, CardNoBorder, CardOverflow } from '@/components/Atoms/Card'
import { Elevation, ThemeColors } from '@/types/theme'
import { StyledCardWrapper } from '../AssetTile.styled'
import { BadgeType } from '@/components/Atoms/Badge'

interface AssetCardProps {
  fullHeight?: boolean
  isDisabled?: boolean
  noBorder?: CardNoBorder
  badges?: (BadgeType | null)[]
  cardHeight?: string
  borderColor?: ThemeColors
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  elevationHover?: Elevation
  overflow?: CardOverflow
}

export const AssetCard: React.FC<AssetCardProps> = ({
  children,
  fullHeight,
  isDisabled = false,
  noBorder,
  onClick,
  badges,
  borderColor,
  cardHeight,
  overflow = 'hidden',
  elevationHover = 3,
}) => {
  return (
    <Card
      elevation={0}
      elevationHover={isDisabled ? 0 : elevationHover}
      shape="rounded-big"
      overflow={overflow}
      onClick={onClick}
      surface="white"
      padding={undefined}
      fullHeight={fullHeight}
      cardHeight={cardHeight}
      noBorder={noBorder ? 'none' : undefined}
      badges={badges}
      borderColor={borderColor}>
      <StyledCardWrapper isDisabled={isDisabled}>{children}</StyledCardWrapper>
    </Card>
  )
}
