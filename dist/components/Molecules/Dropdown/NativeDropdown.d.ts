import React from 'react';
import { RotationValues } from '@/components/Atoms/Icon';
export interface NativeDropdownProps {
    className?: string;
    children?: HTMLOptionElement[] | React.ReactElement<HTMLOptionElement>[];
    margin?: string;
    padding?: string;
    icon?: React.ReactElement;
    iconMobile?: React.ReactElement;
    iconRotate?: RotationValues;
    iconMobileRotate?: RotationValues;
    noBorder?: boolean;
    withBgColor?: boolean;
    value: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
}
export declare const NativeDropdown: React.FC<NativeDropdownProps>;
//# sourceMappingURL=NativeDropdown.d.ts.map