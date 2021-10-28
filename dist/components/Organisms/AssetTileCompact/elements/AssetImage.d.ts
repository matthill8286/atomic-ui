import React from 'react';
import { NativeLazyLoadType } from '@/components/Atoms/Picture';
export interface AssetImageProps {
    width?: string;
    height?: string;
    assetImage?: string;
    title?: string;
    loading?: boolean;
    onPictureClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    imageLink?: string;
    lazyLoad?: NativeLazyLoadType;
}
export declare const AssetImage: React.FC<AssetImageProps>;
//# sourceMappingURL=AssetImage.d.ts.map