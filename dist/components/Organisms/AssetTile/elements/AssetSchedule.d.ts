import React from 'react';
import { ThemeColors } from '@/types';
declare type TimeBoxValues = string | null;
declare type Timebox = {
    start?: TimeBoxValues | undefined;
    end?: TimeBoxValues | undefined;
};
export interface AssetSchedule {
    timebox?: Timebox | undefined;
    color?: ThemeColors;
}
export declare const StyledIcon: import("styled-components").StyledComponent<"div", import("../../../../types").Theme, import("../../../Atoms/Icon").IconProps, never>;
export declare const StyledLiveLabel: import("styled-components").StyledComponent<"div", import("../../../../types").Theme, import("../../../Atoms/Icon").IconProps, never>;
export declare const AssetSchedule: React.FC<AssetSchedule>;
export {};
//# sourceMappingURL=AssetSchedule.d.ts.map