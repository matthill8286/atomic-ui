import { PaddingMap, ThemeColors, ThemeFontSizes } from '@/types';
import { QuickAction } from '../ActionLink.interface';
export declare type GroupedActionLinksProps = {
    links: QuickAction[];
    fontSize: ThemeFontSizes;
    color: ThemeColors;
    flexed?: boolean;
    padding?: PaddingMap;
    dropdownFlexed?: boolean;
};
export declare const GroupedActionLinks: ({ links, fontSize, color, padding, flexed, dropdownFlexed, testIdSuffix, }: {
    links: QuickAction[];
    fontSize: ThemeFontSizes;
    color: ThemeColors;
    padding?: PaddingMap;
    flexed?: boolean;
    dropdownFlexed?: boolean;
    testIdSuffix?: string;
}) => JSX.Element;
//# sourceMappingURL=GroupedActionLinks.d.ts.map