var _layouts;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { AssetTileLayout } from "../AssetTile.interface";
import { AssetTileGridItem } from "../AssetTileGridItem";
import { AssetTileListItem } from "../AssetTileListItem";
import { AssetTileCompactTile } from "../AssetTileCompactTile";
var layouts = (_layouts = {}, _defineProperty(_layouts, AssetTileLayout.auto, AssetTileGridItem), _defineProperty(_layouts, AssetTileLayout.listItem, AssetTileListItem), _defineProperty(_layouts, AssetTileLayout.gridItem, AssetTileGridItem), _defineProperty(_layouts, AssetTileLayout.compact, AssetTileCompactTile), _layouts);
export var useLayoutComponent = function useLayoutComponent(layout) {
  var layoutComponent = layouts[layout];

  if (!layoutComponent) {
    throw new Error("No component for layout '".concat(JSON.stringify(layout), "'"));
  }

  return layoutComponent;
};
//# sourceMappingURL=layout.js.map