import React from 'react';
import { Elevation, ThemeColors } from '@/types/theme';
export interface SiteMenuItemProps {
    itemId: string;
    title: string;
    surfaceColor?: ThemeColors;
}
export interface SiteMenuProps {
    enableSemanticTheme?: boolean;
    surfaceColor?: ThemeColors;
    isFixed?: boolean;
    menuItems?: SiteMenuItemProps[];
    noBorder?: boolean;
    elevation?: Elevation;
    activeItemId?: string;
    scrollOffset?: number;
    changeDelay?: number;
    onTracking?: (e: string) => void;
    onChange?: (id: string, title: string) => void;
}
export declare const SiteMenu: React.FC<SiteMenuProps>;
//# sourceMappingURL=SiteMenu.d.ts.map