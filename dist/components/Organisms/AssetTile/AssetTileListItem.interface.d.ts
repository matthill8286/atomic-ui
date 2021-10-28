import { ReactNode, MouseEvent } from 'react';
import { FontSizeMap } from '@/components/Atoms/Typography/Typo/Typo.interface';
import { Asset, ThemeFontSizes } from '@/types';
export interface StyledColumnProps {
    hasIcon: boolean;
}
export interface StyledWrapperProps {
    hasSublineDescription?: boolean;
}
export interface AssetTileListItemProps {
    imageHeight?: string;
    imageMaxWidth?: number;
    imageMinWidth?: number;
    imageWidth?: string;
    loading?: boolean;
    assetImage?: string;
    showImage?: boolean;
    imageLink?: string;
    lazyLoadImage?: boolean;
}
export interface AssetTileListItemChildProps {
    headerFontSize?: ThemeFontSizes | FontSizeMap;
    loading?: boolean;
    provider?: string;
    interaction?: string;
    completed?: boolean;
    bookmarked?: boolean;
    showComplete?: boolean;
    showBookmark?: boolean;
    iconsComponent?: ReactNode;
    iconsRight?: boolean;
    interactionShippingInfo?: string;
    sellerLink?: JSX.Element;
    showImage?: boolean;
    hasTitleIcon?: boolean;
    showInteractions?: boolean;
    showProvider?: boolean;
    description?: string;
    sublinePrice?: boolean;
    title: string;
    titleIconOnClick?: (event: MouseEvent, { asset, index, assetsPerSlide, pageNumber, context, }: {
        asset: Asset;
        index?: number;
        assetsPerSlide?: number;
        pageNumber?: number;
        context?: string;
    }) => void;
    onClick?: (event: MouseEvent, { asset, index, assetsPerSlide, pageNumber, context, }: {
        asset: Asset;
        index?: number;
        assetsPerSlide?: number;
        pageNumber?: number;
        context?: string;
    }) => void;
    titleLink?: string;
}
//# sourceMappingURL=AssetTileListItem.interface.d.ts.map