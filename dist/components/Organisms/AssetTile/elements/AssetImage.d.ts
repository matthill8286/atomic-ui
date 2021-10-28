import React from 'react';
export interface StyledPictureWrapperProps {
    hasBottomMargin?: boolean;
    maxWidth?: string;
    minWidth?: string;
}
export interface AssetImageProps extends StyledPictureWrapperProps {
    height?: string;
    lazyLoad?: boolean;
    loading?: boolean;
    onPictureClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    assetImage?: string | null;
    title?: string | null;
    width?: string;
    withLQIP?: boolean;
    rounded?: boolean;
    withNativeLoading?: boolean;
}
export declare const AssetImage: React.FC<AssetImageProps>;
//# sourceMappingURL=AssetImage.d.ts.map