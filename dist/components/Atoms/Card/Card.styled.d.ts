/// <reference types="react" />
import { Margin, Padding, VerticalMargin, VerticalMarginMap, VerticalPadding, VerticalPaddingMap } from '@/types/theme';
import { Corners, Shape, StyledBadgeWrapperProps, StyledCardProps, StyledDividerProps } from './Card.interface';
export declare const StyledBadgeLineWrapper: import("styled-components").StyledComponent<"div", import("../../../types/theme").Theme, StyledBadgeWrapperProps, never>;
export declare const handlePadding: (baseSpacing: Record<string, unknown>, padding: VerticalPadding | VerticalPaddingMap | Padding) => string;
export declare const handleMargin: (baseSpacing: Record<string, unknown>, margin: VerticalMarginMap | VerticalMargin | Margin) => string;
export declare const handleShape: (shape: Shape | Corners<Shape>) => ({ theme }: {
    theme: any;
}) => string;
export declare const StyledCard: import("styled-components").StyledComponent<"div", import("../../../types/theme").Theme, StyledCardProps, never>;
export declare const StyledFeaturedAssetsPicture: import("styled-components").StyledComponent<import("react").FC<import("../Picture").PictureProps>, import("../../../types/theme").Theme, {}, never>;
export declare const StyledFeaturedAssetsContainer: import("styled-components").StyledComponent<"div", import("../../../types/theme").Theme, {}, never>;
export declare const StyledFeaturedAssetSpacing: import("styled-components").StyledComponent<"div", import("../../../types/theme").Theme, {}, never>;
export declare const StyledDivider: import("styled-components").StyledComponent<"div", import("../../../types/theme").Theme, StyledDividerProps, never>;
export declare const StyledCardWrapper: import("styled-components").StyledComponent<"div", import("../../../types/theme").Theme, {
    fullHeight: boolean;
    elevationHover?: 0 | 2 | 3 | 4 | 1 | undefined;
    cardHeight?: string | undefined;
}, never>;
//# sourceMappingURL=Card.styled.d.ts.map