import * as React from 'react';
import { Size, ThemeColors } from '@/types/theme';
export interface DividerProps {
    color: ThemeColors;
    height?: number | keyof Omit<Size, 'xxxs'>;
}
export declare const Divider: React.FC<DividerProps>;
//# sourceMappingURL=Divider.d.ts.map