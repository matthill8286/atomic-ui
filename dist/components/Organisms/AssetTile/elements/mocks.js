import { newAssetMocks, newStaticAssetMocks } from "./mockAsset";
import { AssetTileLayout } from "../AssetTile.interface";
export var layout = [AssetTileLayout.gridItem, AssetTileLayout.listItem, AssetTileLayout.compact, AssetTileLayout.auto];
export var mockAssets = {
  asset1: newAssetMocks[0],
  asset2: newAssetMocks[1],
  asset3: newAssetMocks[2],
  asset4: newAssetMocks[4]
};
export var staticMockAssets = {
  asset1: newStaticAssetMocks[0],
  asset2: newStaticAssetMocks[1],
  asset3: newStaticAssetMocks[2],
  asset4: newStaticAssetMocks[3]
};
export var gridSelection = {
  '1 Item': 1,
  '2 Items': 2,
  '3 Items': 3
};
export var assetNames = ['asset1', 'asset2', 'asset3'];
export var assetOptions = {
  '(Automatic)': 'asset1',
  asset1: 'asset1',
  asset2: 'asset2',
  asset3: 'asset3'
};
export var featureOptions = {
  showSkills: 'showSkills',
  showBookmark: 'showBookmark',
  showLock: 'showLock',
  showProvider: 'showProvider',
  showAssetMeta: 'showAssetMeta',
  showFeatured: 'showFeatured'
};
export var baseProps = {};
export var presetProps = ['None', 'Reduced'];
//# sourceMappingURL=mocks.js.map