declare type DisplayTypes = 'radio' | 'button';
declare type SelectableSizes = 'large' | 'small';
declare type SelectableTypes = 'checkbox' | 'radio';
export declare type SelectableState = 'idle' | 'error' | 'disabled';
export interface SelectableProps {
    errorMessage?: string;
    displayType?: DisplayTypes;
    icon?: JSX.Element;
    isChecked?: boolean;
    label: React.ReactChild | React.ReactChild[];
    name: string;
    onChangeValue: (isChecked: boolean, value?: string) => void;
    selectableId: string;
    selectableSize?: SelectableSizes;
    state?: SelectableState;
    type: SelectableTypes;
    value?: string;
}
export declare type CheckboxProps = Omit<SelectableProps, 'type'>;
export declare type RadioButtonProps = Omit<SelectableProps, 'type'>;
export interface StyledNativeSelectableProps {
    selectableSize: SelectableSizes;
    type: SelectableTypes;
    state: SelectableState;
}
export interface StyledSelectedCheckMarkProps {
    selectableSize: SelectableSizes;
    state: SelectableState;
}
export interface StyledLabelProps {
    selectableSize: SelectableSizes;
    type: string;
    state: SelectableState;
    style?: string;
}
export {};
//# sourceMappingURL=Selectable.interface.d.ts.map