import * as React from 'react';
import { FontSizeMap } from '@/components/Atoms/Typography/Typo/Typo.interface';
import { ThemeFontSizes, ThemeFontWeights } from '@/types';
interface AssetTitleProps {
    headerFontSize?: ThemeFontSizes | FontSizeMap;
    headerFontWeight?: ThemeFontWeights;
    href?: string;
    target?: string;
    loading?: boolean;
    provider?: string;
    showProvider?: boolean;
    description?: string;
    sublinePrice?: string;
    title: string;
    energyEfficiencySlot?: JSX.Element | null;
    onClick?: () => void;
}
export declare const AssetHeader: React.FC<AssetTitleProps>;
export {};
//# sourceMappingURL=AssetHeader.d.ts.map