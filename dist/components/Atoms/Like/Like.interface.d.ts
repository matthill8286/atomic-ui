import { ComponentType, ReactElement } from 'react';
import { MouseEvent } from 'react';
import { ThemeColors, ThemeFontLineHeight, ThemeFontSizes } from '@/types/theme';
export declare type LikeAs = string | JSX.IntrinsicElements | ComponentType<any>;
export declare type LikeSize = 'small' | 'large';
declare type CursorType = 'initial' | 'pointer';
export interface LikeProps {
    bold?: boolean;
    className?: string;
    cursor?: CursorType;
    color?: ThemeColors;
    decorationColor?: ThemeColors;
    disabled?: boolean;
    fontSize?: ThemeFontSizes;
    iconLeft?: ReactElement;
    iconRight?: ReactElement;
    inline?: boolean;
    lineHeight?: ThemeFontLineHeight;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    scale?: LikeSize;
    copy?: string;
    likes?: string;
    underline?: boolean;
}
export interface StyledLikeProps {
    color?: ThemeColors;
    cursor?: CursorType;
    hasIconLeft: boolean;
    hasIconRight: boolean;
    isBold: boolean;
    isDisabled: boolean;
    isInline: boolean;
    isLarge: boolean;
    isSmall: boolean;
    isUnderlined?: boolean;
    copy?: string;
    likes?: string;
}
export {};
//# sourceMappingURL=Like.interface.d.ts.map