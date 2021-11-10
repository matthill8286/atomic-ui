import React from 'react'
import { BadgeActionType, BadgeType } from '@/components/Atoms/Badge/Badge.interface'
import { Elevation, HeightMap } from '@/types'

export type ProductTileLink = {
  href?: string
  to?: string
}

export type HeroImageBannerType = 'sm' | 'md' | 'lg'

export interface HeroBannerProps {
  link: ProductTileLink
  height?: HeightMap
  badges?: BadgeType[]
  color?: 'primary' | 'black' | 'white' | 'selected' | 'grey' | undefined
  badgeActionType?: BadgeActionType
  heroImages?: TileImages | undefined
  elevation?: Elevation
  elevationHover?: Elevation
  onClick?: (event: React.MouseEvent) => void
  lazyloadLowQuality?: boolean
  children?: React.ReactElement
}

export interface TileImages {
  xl?: string
  lg?: string
  md?: string
  sm?: string
}
