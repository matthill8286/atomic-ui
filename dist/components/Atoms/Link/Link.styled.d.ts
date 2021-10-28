import React from 'react';
import { Theme } from '@/types/theme';
import { LinkRouterProps, StyledLinkProps } from './Link.interface';
export declare const linkStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<StyledLinkProps, Theme>>;
export declare const StyledLinkAnchor: import("styled-components").StyledComponent<"a", Theme, StyledLinkProps, never>;
export declare const StyledLinkButton: import("styled-components").StyledComponent<"button", Theme, StyledLinkProps, never>;
export declare const StyledLinkRouter: import("styled-components").StyledComponent<React.FunctionComponent<LinkRouterProps<HTMLAnchorElement | HTMLButtonElement>>, Theme, StyledLinkProps, never>;
export declare const StyledIconWrapper: import("styled-components").StyledComponent<"span", Theme, StyledLinkProps, never>;
export declare const Text: import("styled-components").StyledComponent<React.FC<import("../Typography/CopyText/CopyText.interface").CopyTextProps>, Theme, {
    isInline: boolean;
    isBranded?: boolean | undefined;
}, never>;
//# sourceMappingURL=Link.styled.d.ts.map