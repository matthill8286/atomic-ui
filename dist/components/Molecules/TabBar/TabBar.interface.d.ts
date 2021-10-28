import { CSSProperties } from 'react';
import { Elevation, ThemeColors } from '@/types/theme';
import { FlexDirectionProperty } from 'csstype';
declare type TranslationText = string | JSX.Element;
export declare type TabId = string;
export declare type TabItemClick = (id: TabId, data?: TabData) => void;
export interface TabData {
    [key: string]: any;
}
export interface Tab {
    id: TabId;
    label: TranslationText;
    data?: TabData;
    isDisabled?: boolean;
}
export interface TabItemProps extends Tab {
    className?: string;
    isSelected?: boolean;
    onClick: TabItemClick;
    tabGroupName: string;
    enableSemanticTheme?: boolean;
    surfaceColor?: ThemeColors;
}
export interface TabBarProps {
    className?: string;
    style?: CSSProperties;
    isFixed?: boolean;
    onChange?: TabItemClick;
    selected?: TabId;
    noBorder?: boolean;
    flexDirection?: FlexDirectionProperty;
    elevation?: Elevation;
    tabGroupName: string;
    tabs: Tab[];
    changeDelay?: number;
    enableSemanticTheme?: boolean;
    surfaceColor?: ThemeColors | undefined;
}
export {};
//# sourceMappingURL=TabBar.interface.d.ts.map