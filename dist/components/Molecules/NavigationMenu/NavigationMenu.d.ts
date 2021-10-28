import React, { FC } from 'react';
import { NavigationButtonType, NavigationMenuListProps } from './NavigationMenuList';
import { ThemeColors } from '@/types';
export interface NavigationMenuProps {
    className?: string;
    index?: number;
    button?: NavigationButtonType | undefined;
    testIdSuffix?: string;
    iconAsMainUi?: boolean;
    initialLink?: string;
    pictureSrc?: string;
    copyColor?: ThemeColors;
    navActionList: NavigationMenuListProps['navActionList'];
    extendedNavigationHandler?: (item?: NavigationMenuListProps) => void;
}
export declare const StyledCopy: import("styled-components").StyledComponent<React.FC<import("../../Atoms/Typography/CopyText/CopyText.interface").CopyTextProps>, import("../../../types").Theme, {}, never>;
export declare const NavigationMenu: FC<NavigationMenuProps>;
//# sourceMappingURL=NavigationMenu.d.ts.map