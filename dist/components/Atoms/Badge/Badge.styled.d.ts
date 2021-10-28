/// <reference types="react" />
import { ThemedStyledProps } from '@/styles/styled';
import { Theme } from '@/types/theme';
import { StyledBadgeProps } from './Badge.interface';
declare type ThemedBadgeProps = ThemedStyledProps<StyledBadgeProps, Theme>;
export declare const skewLeft: ({ actionType, theme }: ThemedBadgeProps) => import("styled-components").FlattenInterpolation<ThemedStyledProps<StyledBadgeProps, Theme>>;
export declare const skewRight: ({ actionType, theme }: ThemedBadgeProps) => import("styled-components").FlattenInterpolation<ThemedStyledProps<StyledBadgeProps, Theme>>;
export declare const StyledTypo: import("styled-components").StyledComponent<import("react").FC<import("../Typography/Typo/Typo.interface").TypoProps>, Theme, StyledBadgeProps, never>;
export declare const StyledBadgeLineWrapper: import("styled-components").StyledComponent<"div", Theme, StyledBadgeProps, never>;
export declare const StyledBadgeWrapper: import("styled-components").StyledComponent<"div", Theme, StyledBadgeProps, never>;
export declare const StyledOverflow: import("styled-components").StyledComponent<"div", Theme, {}, never>;
export {};
//# sourceMappingURL=Badge.styled.d.ts.map