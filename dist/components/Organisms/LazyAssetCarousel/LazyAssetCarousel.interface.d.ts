import React from 'react';
import { Asset, AssetType } from '@/types/asset';
import { AssetStrategy, AssetTileAsset, AssetTileLayout, AssetTileOrientation, AssetView, Provider, SponsoringDetails } from '@/components/Organisms/AssetTile';
export declare type ClickHandlerAvailable = {
    asset: Asset | Partial<Asset>;
    index: number;
    assetsPerSlide: number;
    pageNumber: number;
    context: string;
};
export interface AssetWrapperProps {
    asset: AssetTileAsset;
    playlistView: AssetView;
    showBadges?: boolean;
}
export declare type AssetCarouselProps = {
    onAssetClick?: ({ asset, index, assetsPerSlide, pageNumber, context, }: {
        asset: Asset;
        index: number;
        assetsPerSlide: number;
        pageNumber: number;
        context: string;
    }) => void;
    onSlideChange?: ({ assets, direction, assetAmount, pageNumber, context, numberOfPages, }: {
        assets: Asset[];
        direction: string;
        assetAmount: number;
        pageNumber: number;
        context: string;
        numberOfPages: number;
    }) => void;
    onLockClick?: ({ asset, index, assetsPerSlide, pageNumber, context, }: {
        asset: Asset;
        index: number;
        assetsPerSlide: number;
        pageNumber: number;
        context: string;
    }) => void;
    customSlickSettings?: Record<string, unknown>;
} & AssetCarouselDefaultProps;
export interface CarouselConfigProps {
    withOverflow?: boolean;
    withPadding?: boolean;
    hideLeftOverflow?: boolean;
    arrows?: boolean;
    dots?: boolean;
    brightArrows?: boolean;
}
export interface AssetCarouselDefaultProps {
    loading: boolean;
    lazyLoad?: boolean;
    assets: Asset[];
    context: string;
    withOverflow?: boolean;
    withPadding?: boolean;
    hideLeftOverflow?: boolean;
    smallSlides?: number;
    mediumSlides?: number;
    largeSlides?: number;
    brightArrows?: boolean;
    arrows?: boolean;
    dots?: boolean;
    promoted?: boolean;
    tileWidth?: number;
    title: JSX.Element | undefined;
    fixedWidth?: boolean;
    promotedIndex?: number;
    showRating?: boolean;
    smallConfig?: CarouselConfigProps;
    mediumConfig?: CarouselConfigProps;
    largeConfig?: CarouselConfigProps;
    showBadges?: boolean;
    showBookmark?: boolean;
    showSkills?: boolean;
    showLock?: boolean;
    showProvider?: boolean;
    videoFallbackImage?: string;
    playlistLayout?: AssetTileLayout;
    playlistView?: AssetView;
    strategyType?: AssetStrategy | undefined;
    playlistOrientation?: AssetTileOrientation;
    disabledAssetIndexes?: number[];
    sponsoringDetails?: SponsoringDetails | undefined;
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
}
export interface StyledAssetTileWrapperProps {
    withLabels: boolean;
}
//# sourceMappingURL=LazyAssetCarousel.interface.d.ts.map