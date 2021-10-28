import * as React from 'react';
import { CardNoBorder, FeaturedAssetProps } from '@/components/Atoms/Card';
import { Elevation } from '@/types';
import { TeaserLink } from '../Teasers.interface';
import { BadgeType } from '@/components/Atoms/Badge';
export declare type TopTeaserBackgroundVariant = 'upsetRect' | 'tongue' | 'rect';
export interface TopTeaserProps {
    smallHeadline?: string;
    background?: string;
    headline: string;
    contentText?: string;
    assetImage?: string;
    backgroundImage?: string;
    backgroundImageDesktop?: string;
    lazyload?: boolean;
    lazyloadBackgroundImage?: boolean;
    lazyloadLowQuality?: boolean;
    featuredAssetImages?: FeaturedAssetProps[];
    limitLines?: number;
    tags?: string[];
    backgroundVariant?: TopTeaserBackgroundVariant;
    elevation?: Elevation;
    elevationHover?: Elevation;
    link?: TeaserLink;
    noBorder?: CardNoBorder;
    fixedImageHeight?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    clickableWithoutLink?: boolean;
    contentful?: boolean;
    inView?: boolean;
    badges?: BadgeType[];
}
export interface StyledTopTeaserMainContainerProps {
    isClickable: boolean;
}
export interface TopTeaserInfoProps {
    contentText?: string;
    tags?: string[];
    limitLines?: number;
}
export interface StyledTopTeaserTongueProps {
    height: number;
}
export interface StyledTopTeaserUpsetRectProps {
    image?: string;
    imageDesktop?: string;
    hasAsset: boolean;
}
export interface StyledTopTeaserRectProps {
    image?: string;
    imageDesktop?: string;
    inView?: boolean;
    lazyLoadImage?: string;
    lazyLoading?: boolean;
    hasAsset?: boolean;
    lazyloadBackgroundImage?: boolean;
}
export interface TopTeaserBackgroundProps {
    image?: string;
    imageDesktop?: string;
    lazyloadBackgroundImage?: boolean;
    backgroundVariant: TopTeaserBackgroundVariant;
    hasAsset: boolean;
    theme?: string;
}
export interface TopTeaserMainHeadingProps {
    headline: string;
    themeName?: string;
    limitLines: number;
}
export interface StyledTopTeaserAssetContainerProps {
    fixedImageHeight: boolean;
}
export interface StyledTopTeaserTagWrapperProps {
    limitLines: number;
}
export interface TopTeaserTagsProps {
    tags?: string[];
}
export interface StyledTopTeaserTagWrapper {
    limitLines: number;
}
export interface StyledTopTeaserInfoContainerProps {
    hasTags: boolean;
    hasAsset: boolean;
    backgroundVariant: TopTeaserBackgroundVariant;
}
export interface StyledInfoContainerContentProps {
    hasBadges: boolean;
}
//# sourceMappingURL=AssetTeaser.interface.d.ts.map