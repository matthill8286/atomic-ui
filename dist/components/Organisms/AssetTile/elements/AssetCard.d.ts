import React from 'react';
import { CardNoBorder, CardOverflow } from '@/components/Atoms/Card';
import { Elevation, ThemeColors } from '@/types/theme';
import { BadgeType } from '@/components/Atoms/Badge';
interface AssetCardProps {
    fullHeight?: boolean;
    isDisabled?: boolean;
    noBorder?: CardNoBorder;
    badges?: (BadgeType | null)[];
    cardHeight?: string;
    borderColor?: ThemeColors;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    elevationHover?: Elevation;
    overflow?: CardOverflow;
}
export declare const AssetCard: React.FC<AssetCardProps>;
export {};
//# sourceMappingURL=AssetCard.d.ts.map