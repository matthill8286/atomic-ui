export interface GridProps {
    align?: 'left' | 'right';
    fixedColumnWidth?: boolean;
    tag?: keyof JSX.IntrinsicElements | React.ComponentType;
    noPadding?: boolean;
    className?: string;
}
export interface StyledGridProps {
    align?: 'left' | 'right';
    fixedColumnWidth?: boolean;
    noPadding?: boolean;
}
export interface RowProps {
    noMargin?: boolean;
    tag?: keyof JSX.IntrinsicElements | React.ComponentType;
    className?: string;
}
export interface StyledRowProps {
    noMargin?: boolean;
    className?: string;
}
export declare type TwelveColumn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare type FourColumn = 0 | 1 | 2 | 3 | 4;
export declare type EightColumn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export declare type Alignment = 'bottom' | 'middle' | 'top';
export declare type Justification = 'flex-start' | 'center' | 'stretch' | 'flex-end';
export interface CellProps {
    align?: Alignment;
    justify?: Justification;
    alignHeight?: boolean;
    noMargin?: boolean;
    columns?: TwelveColumn;
    order?: TwelveColumn;
    colsXs?: FourColumn;
    colsSm?: EightColumn;
    colsMd?: EightColumn;
    colsLg?: TwelveColumn;
    colsXl?: TwelveColumn;
    tag?: keyof JSX.IntrinsicElements | React.ComponentType;
    className?: string;
}
export interface OffsetProps {
    columns?: TwelveColumn;
    colsXs?: FourColumn;
    colsSm?: EightColumn;
    colsMd?: EightColumn;
    colsLg?: TwelveColumn;
    colsXl?: TwelveColumn;
    tag?: keyof JSX.IntrinsicElements | React.ComponentType;
}
export interface StyledCellProps {
    align?: Alignment;
    justify?: Justification;
    alignHeight?: boolean;
    noMargin?: boolean;
    columns?: TwelveColumn;
    order?: TwelveColumn;
    colsXs?: FourColumn;
    colsSm?: EightColumn;
    colsMd?: EightColumn;
    colsLg?: TwelveColumn;
    colsXl?: TwelveColumn;
    className?: string;
}
//# sourceMappingURL=Grid.interface.d.ts.map