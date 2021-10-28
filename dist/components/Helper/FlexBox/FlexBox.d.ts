import { FC } from 'react';
export declare type FlexAlignItemsOptions = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
export interface FlexBoxProps {
    debug?: boolean;
    display?: 'flex' | 'inline-flex';
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    alignItems?: FlexAlignItemsOptions;
}
export declare const FlexBox: FC<FlexBoxProps>;
export interface FlexItemProps {
    debug?: boolean;
    order?: number;
    flex?: string;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    padding?: boolean;
}
export declare const FlexItem: FC<FlexItemProps>;
//# sourceMappingURL=FlexBox.d.ts.map