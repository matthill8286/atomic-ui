import { BoxDimensions, MarginMap, PaddingMap, Size, Theme, VerticalMarginMap, VerticalPaddingMap } from '@/types/theme';
/**
 * @description utility function to calc the values of margin and padding
 * @deprecated getBoxDimension is replaced by margin-function and padding-function in order to achieve a consistent working method with margin props and padding props
 */
export declare const getBoxDimension: (theme: Theme, boxDimensions?: BoxDimensions) => BoxDimensions;
export declare const margin: ({ theme, margin }: {
    theme: Theme;
    margin?: string | VerticalMarginMap | undefined;
}) => string | undefined;
export declare const padding: ({ theme, padding }: {
    theme: Theme;
    padding?: string | VerticalPaddingMap | undefined;
}) => string | undefined;
export declare const handleBoxDimensions: (props: {
    theme: Theme;
    dimensions: MarginMap | PaddingMap | string;
    propertyName: 'margin' | 'padding';
}) => string;
export declare const getBoxDimensionStrings: (theme: Theme, dimensions?: BoxDimensions) => string | undefined;
export declare const getBoxDimensionResponsiveObjects: (theme: Theme, boxDimensions: VerticalMarginMap | VerticalPaddingMap, propertyName: 'margin' | 'padding') => string;
export declare const getSizeInPx: (size: number | keyof Omit<Size, 'xxxs'>, themeSizes: Omit<Size, 'xxxs'>) => string;
//# sourceMappingURL=sc-shared-functions.d.ts.map