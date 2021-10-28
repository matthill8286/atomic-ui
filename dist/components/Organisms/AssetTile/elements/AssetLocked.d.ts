import React from 'react';
import { ThemeColors } from '@/types';
export interface AssetLockedProps {
    color?: ThemeColors;
    onLockClick?: ((ev: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    outlined?: boolean;
    locked?: boolean;
}
export declare const AssetLocked: React.FC<AssetLockedProps>;
//# sourceMappingURL=AssetLocked.d.ts.map