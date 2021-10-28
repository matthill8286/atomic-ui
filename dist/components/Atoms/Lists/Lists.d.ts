import React from 'react';
import { ThemeColors } from '@/types';
interface ListsProps extends React.HTMLProps<HTMLElement> {
    icon?: boolean;
    ordered?: boolean;
    children: React.ReactNode;
    withMargin?: boolean;
    color?: ThemeColors;
}
export declare const Lists: React.FC<ListsProps>;
export {};
//# sourceMappingURL=Lists.d.ts.map