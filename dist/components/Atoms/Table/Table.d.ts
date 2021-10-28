import React from 'react';
import { TranslatedText } from '@/types/global';
export interface TableProps {
    children: React.ReactNode;
    layout?: string;
    withBorderRadius?: boolean;
    fullBorder?: boolean;
    isScrollable?: boolean;
    className?: string;
    withBackground?: boolean;
    ariaLabel?: TranslatedText;
}
export declare const StyledFixedTable: import("styled-components").StyledComponent<"div", import("../../..").Theme, {}, never>;
export declare const StyledScrollTable: import("styled-components").StyledComponent<"div", import("../../..").Theme, {
    isMMTheme: boolean;
}, never>;
export declare const Table: React.FC<TableProps>;
//# sourceMappingURL=Table.d.ts.map