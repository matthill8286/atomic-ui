import React from 'react';
import { ThemeColors } from '@/types';
export interface TableRowProps {
    children?: React.ReactNode;
    collapsible?: boolean;
    isReversed?: boolean;
    verticalAlign?: 'top' | 'middle' | 'bottom';
    disableHover?: boolean;
    className?: string;
    textColor?: ThemeColors;
    hoverColor?: ThemeColors;
    backgroundColor?: ThemeColors;
}
export declare const StyledGhostRow: import("styled-components").StyledComponent<"div", import("../../../types").Theme, {}, never>;
export declare const StyledGhostSprite: import("styled-components").StyledComponent<"div", import("../../../types").Theme, {
    isReversed?: boolean | undefined;
}, never>;
export declare const StyledColoredData: import("styled-components").StyledComponent<"div", import("../../../types").Theme, {
    showPercentage?: number | undefined;
    color?: string | undefined;
}, never>;
export declare const StyledSvgMarker: import("styled-components").StyledComponent<"div", import("../../../types").Theme, {}, never>;
export declare const TableRow: React.FC<TableRowProps>;
//# sourceMappingURL=TableRow.d.ts.map