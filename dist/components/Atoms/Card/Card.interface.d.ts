import { Elevation, Margin, Padding, Position, ThemeColors, VerticalMargin, VerticalMarginMap, VerticalPadding, VerticalPaddingMap } from '@/types/theme';
import { BadgeActionType, BadgeType } from '../Badge/Badge.interface';
import { TranslatedText } from '@/types/global';
import React from 'react';
export interface Corners<S> {
    bottomLeft: S;
    bottomRight: S;
    topLeft: S;
    topRight: S;
}
export declare type Shape = 'rounded-xl' | 'rounded-big' | 'rounded-small' | 'sharp';
export declare type Surface = 'white' | 'grey' | 'black' | 'primary' | 'selected' | 'clear';
export declare type CardOverflow = 'none' | 'hidden';
export declare type CardDisplay = 'flex' | 'block';
export declare type CardNoBorder = Position | Position[] | 'none';
export declare type ClickHandler = (ev: React.MouseEvent<HTMLDivElement>) => void;
export interface StyledCardProps {
    badgeActionType?: BadgeActionType;
    badges?: BadgeType[];
    borderColor?: ThemeColors;
    borderWidth: number;
    center?: boolean;
    children: React.ReactNode;
    className?: string;
    cardHeight?: string;
    contentWidth?: string;
    display?: CardDisplay;
    dividerWidth?: string | number;
    elevation: Elevation;
    elevationHover?: Elevation;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    fullHeight?: boolean;
    margin?: VerticalMarginMap | VerticalMargin | Margin;
    noBorder?: CardNoBorder;
    overflow?: CardOverflow;
    padding?: VerticalPaddingMap | VerticalPadding | Padding;
    shape?: Shape | Corners<Shape>;
    showDivider?: boolean;
    surface?: Surface;
    textColor?: ThemeColors;
}
export interface CardA11yProps {
    ariaLabel?: TranslatedText;
    ariaLabelledby?: string;
}
export interface CardProps extends CardA11yProps {
    badgeActionType?: BadgeActionType;
    badges?: (BadgeType | null)[];
    floatingAssetRow?: boolean;
    borderColor?: ThemeColors;
    borderWidth?: number;
    center?: boolean;
    children?: React.ReactNode;
    className?: string;
    contentWidth?: string;
    cardHeight?: string;
    display?: CardDisplay;
    dividerWidth?: string | number;
    elevation: Elevation;
    elevationHover?: Elevation;
    featuredAssetImages?: FeaturedAssetProps[];
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    fullHeight?: boolean;
    id?: string;
    margin?: VerticalMarginMap | VerticalMargin | Margin;
    noBorder?: CardNoBorder;
    onClick?: ClickHandler;
    overflow?: CardOverflow;
    padding?: VerticalPaddingMap | VerticalPadding | Padding;
    shape?: Shape | Corners<Shape>;
    showDivider?: boolean;
    surface?: Surface;
    textColor?: ThemeColors;
}
export interface StyledBadgeWrapperProps {
    children: JSX.Element;
    badges?: BadgeType[];
    badgeActionType?: BadgeActionType;
}
export interface StyledDividerProps {
    dividerWidth?: string | number;
}
export interface FeaturedAssetProps {
    image: string;
}
export interface FeaturedAssetRowProps {
    floatingAssetRow?: boolean;
    featuredAssetImages?: FeaturedAssetProps[];
}
export interface StyledBadgeWrapperProps {
    children: JSX.Element;
    badges?: BadgeType[];
    badgeActionType?: BadgeActionType;
}
export interface StyledIconWrapperProps {
    icon?: JSX.Element;
}
export interface StyledDividerProps {
    dividerWidth?: string | number;
}
//# sourceMappingURL=Card.interface.d.ts.map