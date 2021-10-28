import { StyledTeaserContentContainerProps, StyledIconProps, StyledPictureContainerProps, StyledResponsiveImageContainerProps, StyledTeaserProps, StyledTextLinkContainerProps } from './Teaser.interface';
import { TeaserOrientation } from '@/components/Organisms/Teasers';
/**
 * Small helper function which returns `true` if teaser is in landscape mode
 */
export declare const isPortrait: (orientation: TeaserOrientation) => boolean;
export declare const StyledTeaser: import("styled-components").StyledComponent<"div", import("../../../..").Theme, StyledTeaserProps, never>;
export declare const StyledResponsiveContainer: import("styled-components").StyledComponent<"div", import("../../../..").Theme, StyledResponsiveImageContainerProps, never>;
export declare const StyledPictureContainer: import("styled-components").StyledComponent<"div", import("../../../..").Theme, StyledPictureContainerProps, never>;
export declare const StyledContentContainer: import("styled-components").StyledComponent<"div", import("../../../..").Theme, StyledTeaserContentContainerProps, never>;
export declare const StyledHeadingContainer: import("styled-components").StyledComponent<"div", import("../../../..").Theme, {
    growHeadline: boolean;
}, never>;
export declare const StyledInfoTextContainer: import("styled-components").StyledComponent<"div", import("../../../..").Theme, {}, never>;
export declare const StyledInfoTextChildren: import("styled-components").StyledComponent<"div", import("../../../..").Theme, {}, never>;
export declare const StyledLinkListContainer: import("styled-components").StyledComponent<"div", import("../../../..").Theme, {}, never>;
export declare const StyledLinkListItemSpace: import("styled-components").StyledComponent<"div", import("../../../..").Theme, {}, never>;
export declare const StyledTextLinkContainer: import("styled-components").StyledComponent<"div", import("../../../..").Theme, StyledTextLinkContainerProps, never>;
export declare const StyledLinkContainer: import("styled-components").StyledComponent<"div", import("../../../..").Theme, StyledTextLinkContainerProps, never>;
export declare const StyledIcon: import("styled-components").StyledComponent<"div", import("../../../..").Theme, import("../../../Atoms/Icon").IconProps & StyledIconProps, never>;
export declare const StyledDummyLink: import("styled-components").StyledComponent<"div", import("../../../..").Theme, {}, never>;
//# sourceMappingURL=Teaser.styled.d.ts.map