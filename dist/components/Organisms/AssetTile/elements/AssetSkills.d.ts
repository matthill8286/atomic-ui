import React from 'react';
import { ThemeColors } from '@/types';
import { Skills } from '../AssetTile.interface';
export interface AssetSkill {
    competencyLabel?: string;
    showSkills?: boolean;
    skills?: (Skills | null)[];
    loading: boolean;
    onSkillsClick?: (e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<React.ReactElement>) => void;
    color?: ThemeColors;
}
export declare const AssetSkills: React.FC<AssetSkill>;
//# sourceMappingURL=AssetSkills.d.ts.map