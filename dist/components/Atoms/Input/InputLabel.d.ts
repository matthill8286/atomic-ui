import { FC, ReactElement } from 'react';
import { DropdownProps } from '@/components/Molecules/Dropdown/Dropdown.interface';
import { ThemeColors } from '@/types/theme';
import { InputProps, InputStyle } from './Input.interface';
export interface InputLabelProps {
    children: ReactElement<InputProps | DropdownProps>;
    color: ThemeColors;
    htmlFor?: string;
    inputStyle: InputStyle;
    label: string;
    shrink: boolean;
}
export declare const InputLabel: FC<InputLabelProps>;
//# sourceMappingURL=InputLabel.d.ts.map