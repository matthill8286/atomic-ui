import { newAssetMocks, newStaticAssetMocks } from './mockAsset'
import { AssetTileLayout } from '@/components/Organisms/AssetTile/AssetTile.interface'

export const layout: AssetTileLayout[] = [
  AssetTileLayout.gridItem,
  AssetTileLayout.listItem,
  AssetTileLayout.compact,
  AssetTileLayout.auto,
]

export const mockAssets = {
  asset1: newAssetMocks[0],
  asset2: newAssetMocks[1],
  asset3: newAssetMocks[2],
  asset4: newAssetMocks[4], // screenshotOverride empty test, uses image as fallback
}

export const staticMockAssets = {
  asset1: newStaticAssetMocks[0],
  asset2: newStaticAssetMocks[1],
  asset3: newStaticAssetMocks[2],
  asset4: newStaticAssetMocks[3],
}

export const gridSelection = {
  '1 Item': 1,
  '2 Items': 2,
  '3 Items': 3,
}

export const assetNames = ['asset1', 'asset2', 'asset3']

export const assetOptions = {
  '(Automatic)': 'asset1',
  asset1: 'asset1',
  asset2: 'asset2',
  asset3: 'asset3',
}

export const featureOptions = {
  showSkills: 'showSkills',
  showBookmark: 'showBookmark',
  showLock: 'showLock',
  showProvider: 'showProvider',
  showAssetMeta: 'showAssetMeta',
  showFeatured: 'showFeatured',
}

export const baseProps = {}

export const presetProps = ['None', 'Reduced']
