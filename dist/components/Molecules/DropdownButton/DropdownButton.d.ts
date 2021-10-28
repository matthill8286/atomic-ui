import React, { FunctionComponent } from 'react';
export interface DropdownButtonProps {
    label?: string;
    onClick: React.MouseEventHandler;
    additionalLabel?: string;
    isOpen: boolean;
    width?: string | number;
    height?: string | number;
    primaryIcon?: JSX.Element;
    secondaryIcon?: boolean;
    className?: string;
    pictureSrc?: string;
}
export declare const StyledContainer: import("styled-components").StyledComponent<"div", import("../../..").Theme, {}, never>;
export declare const StyledDropdown: import("styled-components").StyledComponent<React.FC<import("../../Atoms/Card").CardProps>, import("../../..").Theme, Partial<React.PropsWithChildren<import("../../Atoms/Card").CardProps>> & {
    [others: string]: any;
} & {
    showDropdown: boolean;
    isMobile: boolean;
}, React.ReactText>;
export declare const DropdownButton: FunctionComponent<DropdownButtonProps>;
//# sourceMappingURL=DropdownButton.d.ts.map