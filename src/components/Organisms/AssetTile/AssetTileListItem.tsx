import React from 'react'
import { AssetTileVariantProps } from '@/components/Organisms/AssetTile/helpers/layout'
import { AssetTileGridItem } from '@/components/Organisms/AssetTile/AssetTileGridItem'

export const AssetTileListItem: React.FC<AssetTileVariantProps> = ({
  orientation = 'landscape',
  ...props
}) => {
  return <AssetTileGridItem orientation={orientation} {...props} />
}
