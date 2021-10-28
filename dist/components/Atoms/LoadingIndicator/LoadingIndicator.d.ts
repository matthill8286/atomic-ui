import React from 'react';
export declare type LoadingIndicatorColor = 'white' | 'black' | 'primary';
export interface StyledLoadingIndicatorProps {
    isVisible: boolean;
    size: number;
    barWidth: number;
    color: LoadingIndicatorColor;
}
export interface LoadingIndicatorProps {
    isVisible: boolean;
    size?: number;
    barWidth?: number;
    color?: LoadingIndicatorColor;
}
export declare const StyledLoadingWrapperAlternate: import("styled-components").StyledComponent<"ul", import("../../..").Theme, StyledLoadingIndicatorProps, never>;
export declare const LoadingIndicator: React.FC<LoadingIndicatorProps>;
//# sourceMappingURL=LoadingIndicator.d.ts.map