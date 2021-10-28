import React, { FC, ReactPropTypes } from 'react';
import { ThemeColors } from '@/types';
export interface TopRightProps {
    color?: ThemeColors;
    StyledPosition: FC<any>;
    icon: JSX.Element;
    onOptionClick?: any;
    outlined?: boolean;
    showOptions?: boolean;
    modifiers?: keyof ReactPropTypes;
}
export declare const StyledBottomRight: import("styled-components").StyledComponent<"div", import("../../../../types").Theme, {}, never>;
export declare const StyledBottomLeft: import("styled-components").StyledComponent<"div", import("../../../../types").Theme, {}, never>;
export declare const StyledTopLeft: import("styled-components").StyledComponent<"div", import("../../../../types").Theme, {}, never>;
export declare const StyledIconButton: import("styled-components").StyledComponent<React.FC<import("../../../Atoms/Button").IconButtonProps>, import("../../../../types").Theme, {
    modifiers?: "ref" | "children" | "key" | undefined;
}, never>;
export declare const TopRight: React.FC<TopRightProps>;
//# sourceMappingURL=AssetOptions.d.ts.map