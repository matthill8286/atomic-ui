import React, { FC } from 'react';
import { BadgeActionType, BadgeType } from '@/components/Atoms/Badge';
import { Asset, AssetType, Elevation, ThemeColors, ThemeFontSizes } from '@/types';
import { FeatureListType } from '@/components/Molecules/FeatureList';
import { FlexAlignItemsOptions } from '@/components/Helper';
import { CardNoBorder } from '@/components/Atoms/Card';
export declare enum AssetTileLayout {
    auto = "auto",
    listItem = "listItem",
    gridItem = "gridItem",
    compact = "compact"
}
/** AssetTileOrientation `landscape | portrait` use portrait on mobile and landscape on desktop */
export declare type AssetTileOrientation = 'landscape' | 'portrait' | undefined;
/** AssetTileSize  use small on mobile and large on desktop */
export declare type AssetTileSize = 'auto' | 'large' | 'small';
export declare type AssetView = 'list' | 'collection' | 'compact' | 'sponsored' | 'disabled';
export declare type playlistView = 'list' | 'collection' | 'disabled';
export declare enum AssetStrategy {
    structured = "1",
    timebox = "2",
    none = "none"
}
export interface SponsoringDetails {
    isSponsored: boolean;
    showUppercase: boolean;
    label: string;
    infoText: string;
    title: string;
}
export interface CollectionData extends Partial<Asset> {
    totalAssetDuration: number | undefined;
    completionPercentage: number | undefined;
    numberOfAssets: number | undefined;
    title: string;
    pid?: string | undefined;
}
export interface AssetTileProps {
    /**  image padding for asset images */
    badgeActionType?: BadgeActionType;
    badges?: (BadgeType | null)[];
    borderColor?: ThemeColors;
    fullHeight?: boolean;
    isCompact?: boolean;
    expanded?: boolean;
    isOpenAsset?: boolean;
    eventDate?: string;
    isCollection?: boolean;
    placeCard?: boolean;
    assetIndex?: number;
    collectionData?: CollectionData;
    assetSponsoring?: SponsoringDetails | undefined;
    assetView?: AssetView;
    headerFontSize?: string;
    strategyType?: AssetStrategy | undefined;
    color?: ThemeColors;
    elevation?: Elevation;
    iconsRight?: boolean;
    inView?: boolean;
    elevationHover?: Elevation;
    noBorder?: CardNoBorder;
    headlineLimitLines?: number;
    limitContentLines?: number;
    roundImages?: boolean;
    icon?: React.ReactElement;
    lazyloadLowQuality?: boolean;
    orientation?: AssetTileOrientation;
    competencyLabel?: string;
    size?: AssetTileSize;
    fontSize?: ThemeFontSizes;
    mainLink?: any;
    isDisabled?: boolean;
    isMobileView?: boolean;
    layout?: AssetTileLayout;
    lazyLoad?: boolean;
    loading?: boolean;
    loadingOperation?: boolean;
    locked?: boolean;
    showBadges?: boolean;
    showLock?: boolean;
    showBookmark?: boolean;
    showProvider?: boolean;
    showFeatured?: boolean;
    showLikes?: boolean;
    showInteractions?: boolean;
    showOptions?: boolean;
    showSkills?: boolean;
    showImage?: boolean;
    showComplete?: boolean;
    showAssetMeta?: boolean;
    showMoreText?: string;
    showLessText?: string;
    showMoreNumOfLines?: number;
    showMoreAlignment?: FlexAlignItemsOptions;
    fadeOutColor?: string;
    videoFallbackImage?: string;
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
    onHeadingClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onOptionsClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onPictureClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onLockClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | undefined;
    onCompleteClick?: ((ev: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    asset: Asset | Partial<Asset>;
    sponsoringDetails?: SponsoringDetails;
    withEllipsis?: boolean;
    withLQIP?: boolean;
    withNativeLoading?: boolean;
}
export interface StyledResponsiveContainerProps {
    orientation: AssetTileOrientation;
    loading?: boolean;
    isSmall?: boolean;
}
export interface StyledDivider {
    height?: string;
}
export interface StyledTileProps {
    orientation: AssetTileOrientation;
}
export interface ContentTextProps {
    contentText?: string;
    loading: boolean;
    isDisabled?: boolean;
    limitContentLines?: number;
}
export interface TileSettings {
    showAssetMeta?: boolean;
    sponsoringDetails?: undefined;
    showLock?: boolean;
    showSkills?: boolean;
    withEllipsis: boolean;
    headlineLimitLines: number;
    fontSize?: string;
    loading: boolean | undefined;
    showBookmark?: boolean | undefined;
    showFeatured?: boolean | undefined;
}
export interface MediaProps {
    AssetMediaWrapper: FC<any>;
    children?: React.ReactNode;
    isCompact?: boolean;
    lazyLoad?: boolean;
    loading?: boolean;
    maxWidth?: string;
    minWidth?: string;
    minHeight?: string;
    height?: string;
    width?: string;
    hasBottomMargin?: boolean;
    hasSideMargin?: boolean;
    unsupportedMedia?: boolean;
    orientation: AssetTileOrientation;
    onMediaClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    assetImage?: string | null;
    videoFallbackImage?: string;
    mediaType?: string;
    isDisabled?: boolean;
    title?: string | null;
}
export interface EmbeddedMedia {
    embedUrl: string;
    canBeEmbedded: boolean;
}
export interface AssetInteractions {
    bookmarked: boolean;
    completed: boolean;
    shared: boolean;
    available: boolean;
}
export interface AssetHeadingProps {
    headline: string;
    headlineLimitLines?: number;
    isSmall?: boolean;
    loading: boolean;
}
export interface StyledMediaProps {
    isSmall?: boolean;
    imageHeight?: string;
    isDisabled?: boolean;
    hasBottomMargin?: boolean;
    hasSideMargin?: boolean;
    orientation: AssetTileOrientation;
}
export interface StyledContentContainerProps {
    isSmall?: boolean;
    hasIcon?: boolean;
}
export declare type Provider = {
    __typename: string;
    id: number;
    name: string;
    logoUrl?: string;
};
export declare type Type = {
    __typename?: string;
    id?: number;
    name?: string;
};
export declare type Interaction = {
    __typename: string;
    launched: boolean;
    bookmarked: boolean;
    completed: Completed;
};
declare type Completed = {
    status: boolean;
    rating: string;
    locked: boolean;
};
export declare type Timebox = {
    __typename?: string;
    start?: string;
    end?: string;
};
export interface AssetTileAsset {
    __typename?: string;
    provider: Provider;
    interaction: Interaction;
    timebox?: Timebox;
    url: string;
    author?: string;
    embedVideoURL: string;
    niceName?: string;
    coverImage?: string;
    competency?: string;
    completed?: boolean;
    embedUrl?: boolean;
    creator?: string;
    embedVideoLink?: string;
    locked?: boolean;
    providerId?: number;
    screenshotOverride?: string;
    name?: string;
    type?: {
        __typename: string;
        name: AssetTypeName;
        id: number;
    };
    typeId?: number;
    duration?: string;
    durationType?: string;
    published?: string;
    sponsored?: boolean;
    language?: string;
    mainFeatures?: FeatureListType[] | null;
    competencies?: (Skills | null)[];
    id: number;
    description: string;
    title: string;
    image: string | undefined;
    badges?: (BadgeType | null)[] | null;
    restriction?: string;
    partOfSession?: string;
}
export interface Skills {
    id?: number;
    text?: string;
    __typename: string;
}
export declare type MetaItem = {
    numberOfAssets?: string | undefined;
    completedStatus?: string | undefined;
    duration?: string;
    type?: AssetTypeName;
};
export declare type MetaPayload = {
    icon?: JSX.Element;
    text?: Type['name'] | string;
};
export interface AssetTileMetaProps {
    metaItems?: MetaPayload[];
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    alignSelf?: FlexAlignItemsOptions;
    loading: boolean;
    inPlaylist?: boolean;
    isDisabled?: boolean;
    isCompact?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => any;
}
export declare type AssetTypeName = 'Video' | 'Article' | 'Podcast' | 'Online course' | 'Playlist' | 'Live' | 'Sponsored';
export declare type AssetTypeVariants = 'Video' | 'Article' | 'Podcast' | 'Online course' | 'Playlist';
export {};
//# sourceMappingURL=AssetTile.interface.d.ts.map