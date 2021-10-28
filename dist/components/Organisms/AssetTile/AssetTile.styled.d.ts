/// <reference types="react" />
import { AssetTileOrientation, StyledContentContainerProps, StyledResponsiveContainerProps, StyledTileProps } from './AssetTile.interface';
/**
 * Small helper function which returns `true` ifAssetTile is in landscape mode
 */
export declare const isPortrait: (orientation: AssetTileOrientation) => boolean;
export declare const StyledTile: import("styled-components").StyledComponent<"div", import("../../..").Theme, StyledTileProps, never>;
export declare const StyledResponsiveContainer: import("styled-components").StyledComponent<"div", import("../../..").Theme, StyledResponsiveContainerProps, never>;
export declare const StyledMediaContainer: import("styled-components").StyledComponent<"div", import("../../..").Theme, {
    orientation: AssetTileOrientation;
    imageHeight?: string | undefined;
    width?: string | undefined;
    isDisabled?: boolean | undefined;
    isCompact?: boolean | undefined;
}, never>;
export declare const StyledCardWrapper: import("styled-components").StyledComponent<"div", import("../../..").Theme, {
    isDisabled?: boolean | undefined;
}, never>;
export declare const StyledLinearGradient: import("styled-components").StyledComponent<"div", import("../../..").Theme, {}, never>;
export declare const StyledContentContainer: import("styled-components").StyledComponent<"div", import("../../..").Theme, StyledContentContainerProps, never>;
export declare const StyledHeadingContainer: import("styled-components").StyledComponent<"div", import("../../..").Theme, {
    isDisabled?: boolean | undefined;
    onClick?: any;
}, never>;
export declare const StyledAdditionalContent: import("styled-components").StyledComponent<"div", import("../../..").Theme, {}, never>;
export declare const StyledDivider: import("styled-components").StyledComponent<import("react").FC<import("../../Atoms/Divider").DividerProps>, import("../../..").Theme, {}, never>;
//# sourceMappingURL=AssetTile.styled.d.ts.map