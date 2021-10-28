import React, { FC, MouseEvent } from 'react';
import { ActionLinkProps, GroupedActionLinksProps, QuickAction } from '@/components/Molecules/ActionLink';
import { PaddingProps } from '@/types';
export declare type NavigationButtonType = {
    href?: string;
    actionLabel?: string | undefined;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
};
export declare type NavigationMenuListProps = {
    navActionList: QuickAction[];
    onClick: (e: MouseEvent<HTMLElement>) => void;
    actionButton?: NavigationButtonType;
    flexed?: boolean;
} & PaddingProps;
export declare const StyledNavigationMenuOption: import("styled-components").StyledComponent<({ links, fontSize, color, padding, flexed, dropdownFlexed, testIdSuffix, }: {
    links: QuickAction[];
    fontSize: string;
    color: string;
    padding?: string | import("../../../types").VerticalPaddingMap | undefined;
    flexed?: boolean | undefined;
    dropdownFlexed?: boolean | undefined;
    testIdSuffix?: string | undefined;
}) => JSX.Element, import("../../../types").Theme, GroupedActionLinksProps, never>;
export declare const StyledActionLink: import("styled-components").StyledComponent<React.FC<ActionLinkProps>, import("../../../types").Theme, ActionLinkProps, never>;
export declare const NavigationMenuList: FC<NavigationMenuListProps>;
//# sourceMappingURL=NavigationMenuList.d.ts.map