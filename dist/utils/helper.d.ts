import { Theme, ThemeColors } from '@/types';
export interface ChangeColorProps {
    theme?: Theme;
    defaultColor: ThemeColors;
    color?: ThemeColors;
}
export declare const isSaiyanTheme: () => boolean;
export declare const isAlternateTheme: () => boolean;
export declare const getColor: (changeColorProps: ChangeColorProps) => ThemeColors;
export declare const useTheme: () => Theme;
export declare const containsHtmlTags: RegExp;
//# sourceMappingURL=helper.d.ts.map