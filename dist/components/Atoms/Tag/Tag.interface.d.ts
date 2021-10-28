import { Padding, ThemeColors, ThemeFontWeights } from '@/types/theme';
export interface TagProps {
    text: string;
    href?: string;
    targetBlank?: boolean;
    marginRight?: boolean;
    marginBottom?: boolean;
    allowPadding?: boolean;
    padding?: Padding;
    color?: ThemeColors;
    weight?: ThemeFontWeights;
    className?: string;
}
export interface StyledTagWrapperProps {
    hasLink?: boolean;
    marginRight?: boolean;
    marginBottom?: boolean;
    color?: ThemeColors;
    curved?: boolean;
    padding?: Padding;
}
export interface TagTextProps {
    color?: ThemeColors;
    weight?: ThemeFontWeights;
}
//# sourceMappingURL=Tag.interface.d.ts.map