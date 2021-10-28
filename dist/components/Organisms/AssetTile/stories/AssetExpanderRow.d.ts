import * as React from 'react';
import { AssetTileProps } from '../AssetTile.interface';
import { Asset } from '@/types';
interface AssetTileExpanderRowProps extends Omit<AssetTileProps, 'asset'> {
    assets: Asset[];
}
export declare class AssetTileExpanderRow extends React.Component<AssetTileExpanderRowProps, {
    expanded: boolean;
}> {
    state: {
        expanded: boolean;
    };
    setExpanded(expanded: boolean): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=AssetExpanderRow.d.ts.map