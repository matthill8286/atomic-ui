import React from 'react';
import { TypoProps } from '../Typography/Typo/Typo.interface';
interface SkeletonInlineItemProps extends TypoProps {
    text?: string;
    length?: number;
    minLength?: number;
    newLine?: boolean;
    animated?: boolean;
}
export declare const StyledSkeletonInlineItem: import("styled-components").StyledComponent<React.FC<TypoProps>, import("../../..").Theme, SkeletonInlineItemProps, never>;
export declare const SkeletonInlineItem: React.FC<SkeletonInlineItemProps>;
export {};
//# sourceMappingURL=SkeletonInlineItem.d.ts.map