import * as React from 'react';
import { ButtonProps } from './Button.interface';
export interface IconButtonProps extends ButtonProps {
    width?: number | string;
    height?: number | string;
    isInputIcon?: boolean;
    isFlat?: boolean;
}
export interface StyledIconButtonProps extends IconButtonProps {
    width: number | string;
    height: number | string;
    isFlat?: boolean;
}
export declare const StyledIconButton: import("styled-components").StyledComponent<React.FC<ButtonProps>, import("../../..").Theme, StyledIconButtonProps, never>;
export declare const IconButton: React.FC<IconButtonProps>;
//# sourceMappingURL=IconButton.d.ts.map