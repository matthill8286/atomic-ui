import React from 'react';
import { FoldableProps, FoldableState } from './Foldable.interface';
export declare const StyledFoldable: import("styled-components").StyledComponent<"div", import("../../..").Theme, {
    looksOpenFromBreakpoint?: number | undefined;
}, never>;
export declare class Foldable extends React.Component<FoldableProps, FoldableState> {
    private entryRef;
    private standardDuration;
    private maxDuration;
    constructor(props: FoldableProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: FoldableProps): void;
    render(): JSX.Element;
    private _afterTransition;
    private _scrollToElement;
    private _updateHeightBeforeTransition;
    private _getDuration;
    private _getAnimationType;
    private _updateTransition;
    private _applyTransition;
    private _getHeight;
}
//# sourceMappingURL=Foldable.d.ts.map