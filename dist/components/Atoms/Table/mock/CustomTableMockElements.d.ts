import React from 'react';
import { ThemeFontSizes, ThemeFontWeights } from '@/types/theme';
interface TableTitleProps {
    assetName: string;
    provider: string;
}
interface TableWithDescriptionProps {
    assetWithTitle: TableTitleProps;
    description?: string;
}
interface TableDataProps {
    asset: TableWithDescriptionProps;
    subTexts: string[];
}
export declare const StyledTableDescription: import("styled-components").StyledComponent<React.FC<import("../../Typography/CopyText/CopyText.interface").CopyTextProps>, import("../../../..").Theme, {}, never>;
export declare const StyledTableDataWrapper: import("styled-components").StyledComponent<React.FC<import("../../../..").FlexItemProps>, import("../../../..").Theme, {}, never>;
export declare const TableTitle: React.FC<TableTitleProps>;
export declare const TableWithDescription: React.FC<TableWithDescriptionProps>;
export declare const TableData: React.FC<TableDataProps>;
interface CustomTextProps {
    text: string;
    textWeight?: ThemeFontWeights;
    fontSize?: ThemeFontSizes;
    additionalInfo?: string;
    additionalInfoTextAlign?: 'left' | 'right';
}
export declare const CustomText: React.FC<CustomTextProps>;
export {};
//# sourceMappingURL=CustomTableMockElements.d.ts.map