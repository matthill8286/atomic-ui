import React from 'react';
import { RotationValues } from '@/components/Atoms/Icon';
export declare type DropDownListType = 'custom' | 'native';
import { IconProps } from '@/components/Atoms/Icon';
export interface DropdownProps {
    autoComplete?: string;
    initialIndex?: number;
    label?: string;
    listType?: DropDownListType;
    onChange?: (index: number) => void;
    options: DropdownOptionProps[];
    curvedWithShadow?: boolean;
    svgIcon?: React.ReactElement;
    iconRotate?: RotationValues;
    isSelectDisplayed?: boolean;
    isLanguageDropdown?: boolean;
    placeholder?: string;
    withBackground?: boolean;
    noBorder?: boolean;
}
export interface DropdownPropsEnhanced extends DropdownProps {
    showDropdown: boolean;
    toggleDropdown: () => void;
    iconLeft?: boolean;
}
export interface IconPropsEnhanced extends IconProps {
    iconLeft?: boolean;
}
export interface ListProps {
    active: boolean;
    isSearchable: boolean;
    iconLeft?: boolean;
}
export interface StyledDropdownProps {
    hasLabel: boolean;
    withBackground?: boolean;
    noBorder?: boolean;
}
export interface StyledDropdownOptionProps {
    active: boolean;
    onClick: React.MouseEventHandler<HTMLLIElement>;
    checkmark?: boolean;
}
export interface DropdownOptionProps {
    label: string;
    id?: string;
    url?: string;
}
export interface SearchableDropdownProps {
    className?: string;
    index: number;
    inputValue: string | undefined;
    label?: string;
    options: DropdownOptionProps[];
    initializeOpen?: boolean;
    errorMessage?: string;
    onSelectChange: (item: DropdownOptionProps, index: number) => void;
    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
}
//# sourceMappingURL=Dropdown.interface.d.ts.map