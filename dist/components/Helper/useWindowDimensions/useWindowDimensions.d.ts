declare type breakpointValue = 1472 | 1232 | 1008 | 752 | 512;
export declare type breakpointName = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export interface WindowDimensions {
    width: number;
    height: number;
    breakpoint: breakpointValue | 0;
    breakpointName: breakpointName;
}
export declare const getWindowDimensions: () => WindowDimensions;
export declare const useWindowDimensions: (delay?: number | 'frame') => WindowDimensions;
export {};
//# sourceMappingURL=useWindowDimensions.d.ts.map