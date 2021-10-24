import { FC } from 'react'
import {
  AssetTileLayout,
  AssetTileProps,
} from '@/components/Organisms/AssetTile/AssetTile.interface'

import { AssetTileGridItem } from '@/components/Organisms/AssetTile/AssetTileGridItem'
import { AssetTileListItem } from '@/components/Organisms/AssetTile/AssetTileListItem'
import { AssetTileCompactTile } from '@/components/Organisms/AssetTile/AssetTileCompactTile'

export type AssetTileVariantProps = AssetTileProps

type AssetTileVariant = FC<AssetTileVariantProps>

const layouts: Record<AssetTileLayout, AssetTileVariant> = {
  [AssetTileLayout.auto]: AssetTileGridItem,
  [AssetTileLayout.listItem]: AssetTileListItem,
  [AssetTileLayout.gridItem]: AssetTileGridItem,
  [AssetTileLayout.compact]: AssetTileCompactTile,
}

export const useLayoutComponent = (layout: AssetTileLayout): AssetTileVariant => {
  const layoutComponent = layouts[layout]
  if (!layoutComponent) {
    throw new Error(`No component for layout '${JSON.stringify(layout)}'`)
  }
  return layoutComponent
}
