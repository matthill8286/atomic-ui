import React from 'react';
import { ThemeColors } from '@/types';
export interface TableCellProps {
    children?: React.ReactNode;
    cellType?: 'td' | 'th';
    borderDirection?: 'bottom' | 'right';
    noBorder?: boolean;
    cellWidth?: number;
    mobileHeadline?: boolean;
    noPadding?: boolean;
    collapsible?: boolean;
    textAlign?: 'left' | 'right' | 'center';
    fullBorder?: boolean;
    colSpan?: number;
    className?: string;
    cellColor?: ThemeColors;
}
export declare const TableCell: React.FC<TableCellProps>;
//# sourceMappingURL=TableCell.d.ts.map