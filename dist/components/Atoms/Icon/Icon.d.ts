import { FlexAlignItemsOptions } from '@/components/Helper/FlexBox';
import { PaddingProps, Size, ThemeColors } from '@/types';
export declare type RotationValues = 0 | 45 | 90 | 180 | 270 | -45 | -90 | -180 | -270;
export interface IconProps {
    rotate?: RotationValues;
    color?: ThemeColors;
    withBorder?: boolean;
    padding?: PaddingProps['padding'];
    width?: number | keyof Omit<Size, 'xxxs'>;
    height?: number | keyof Omit<Size, 'xxxs'>;
    animate?: boolean;
    display?: string;
    alignSelf?: FlexAlignItemsOptions;
}
export declare const Icon: import("styled-components").StyledComponent<"div", import("../../../types").Theme, IconProps, never>;
//# sourceMappingURL=Icon.d.ts.map