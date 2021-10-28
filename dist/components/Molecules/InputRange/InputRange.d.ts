import React from 'react';
export declare type InputRangeProps = Pick<JSX.IntrinsicElements['input'], 'name' | 'step' | 'min' | 'max' | 'value'> & {
    markAmount?: number;
    allowMoreThanMax?: boolean;
    withBubble?: boolean;
    showMarks?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
export declare const InputRange: React.FC<InputRangeProps>;
//# sourceMappingURL=InputRange.d.ts.map