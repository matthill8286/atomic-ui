import { Asset, AssetType } from '@/types/asset';
import React from 'react';
import { AssetStrategy, AssetTileLayout, AssetTileOrientation, AssetView, Provider, SponsoringDetails } from '@/components/Organisms/AssetTile';
import { SlidesPerPageSettings } from '@/components/Molecules/ScrollSnapSlider';
import { AnyStyledComponent } from 'styled-components';
export interface ConfigProps {
    withOverflow?: boolean;
    withPadding?: boolean;
    hideLeftOverflow?: boolean;
}
export declare type ClickHandlerAvailableParams = {
    asset: Asset | Partial<Asset>;
    index: number;
    assetsPerSlide: number;
    pageNumber: number;
    context: string;
};
export declare type ScrollAssetCarouselProps = {
    NoAssetsComponent: JSX.Element | null;
    onAssetClick?: ({ asset, index, assetsPerSlide, pageNumber, context, }: {
        asset: Asset | Partial<Asset>;
        index: number;
        assetsPerSlide: number;
        pageNumber: number;
        context: string;
    }) => void;
    onSlideChange: ({ assets, direction, assetAmount, pageNumber, context, }: {
        assets: (Asset | Partial<Asset>)[];
        direction: string;
        assetAmount: number;
        pageNumber: number;
        context: string;
    }) => void;
    onInView?: ({ context }: {
        context: string;
    }) => void;
    onLockClick?: ({ asset, index, assetsPerSlide, pageNumber, context, }: {
        asset: Asset | Partial<Asset>;
        index: number;
        assetsPerSlide: number;
        pageNumber: number;
        context: string;
    }) => void;
    headline?: string;
    dataTest?: string;
    redirectPath?: string;
    withScrollbar?: boolean;
} & ScrollAssetCarouselDefaultProps;
export interface ScrollAssetCarouselDefaultProps {
    loading: boolean;
    loadingOperation?: boolean;
    promoted?: JSX.Element | boolean;
    promotedIndex?: number;
    assets: (Asset | Partial<Asset>)[];
    sponsoringDetails?: SponsoringDetails | undefined;
    withOverflow?: boolean;
    withPadding?: boolean;
    hideLeftOverflow?: boolean;
    arrowPrevClass?: AnyStyledComponent;
    arrowNextClass?: AnyStyledComponent;
    context?: string;
    playlistOrientation?: AssetTileOrientation;
    title?: JSX.Element;
    tileMargin?: string;
    lazyLoad?: boolean;
    withLQIP?: boolean;
    withNativeLoading?: boolean;
    showBadges?: boolean;
    showBookmark?: boolean;
    showSkills?: boolean;
    showLock?: boolean;
    showProvider?: boolean;
    videoFallbackImage?: string;
    playlistLayout?: AssetTileLayout;
    playlistView?: AssetView;
    strategyType?: AssetStrategy;
    withGrid?: boolean;
    showArrows?: boolean;
    fixedArrowPosition?: boolean;
    zeroArrowPosition?: boolean;
    tileWidth?: number;
    slidesPerPageSettings: SlidesPerPageSettings;
    hideDummies?: boolean;
    disabledAssetIndexes?: number[];
    renderAddToBookmarkButton?: (AssetForBookmarking: {
        id?: number | undefined;
        bookmarked?: boolean;
        title?: string;
        provider?: Provider | undefined;
        duration?: string | undefined;
        type?: AssetType;
        completed?: any;
        assetIndex?: number;
        playlistId?: string | undefined;
    }) => JSX.Element | React.ReactNode;
    customSliderSettings?: Record<string, unknown>;
}
export interface CarouselWrapperProps {
    tileMargin: string;
    setFixedWidth?: boolean;
    tileWidth?: number;
}
export interface StyledTileWrapperProps {
    withLabels?: boolean;
    hideDummy?: boolean;
}
//# sourceMappingURL=ScrollAssetCarousel.interface.d.ts.map