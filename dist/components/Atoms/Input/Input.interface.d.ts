import { ReactElement, ReactNode, Ref } from 'react';
import ReactInputMask, { Props as InputMaskProps } from 'react-input-mask';
import { IconProps } from '@/components/Atoms/Icon';
import { TranslatedText } from '@/types/global';
import { BoxDimensions, ThemeColors } from '@/types/theme';
export declare type HTMLText = HTMLInputElement;
export declare type InputMode = 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
export declare type InputState = 'idle' | 'valid' | 'error' | 'disabled';
export declare type InputStyle = 'default' | 'dense' | 'large';
export declare type InputType = 'text' | 'date' | 'password' | 'number' | 'tel' | 'email';
export declare type InputValue = string | number;
export declare type MapStateToColor = {
    [key in InputState]: ThemeColors;
};
export interface InputEvents {
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    onClickIcon?: React.MouseEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLInputElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLInputElement>;
}
export interface TextAreaEvents {
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    onClick?: React.MouseEventHandler<HTMLTextAreaElement>;
    onClickIcon?: React.MouseEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLTextAreaElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLTextAreaElement>;
}
export interface IconSize {
    height: number;
    width: number;
}
export interface InputProps extends InputEvents {
    autofocus?: boolean;
    className?: string;
    errorMessage?: TranslatedText;
    helper?: ReactNode;
    helpText?: string;
    iconLabel?: TranslatedText;
    inputIcon?: ReactElement<IconProps>;
    inputIconSize?: IconSize;
    inputMaskProps?: InputMaskProps;
    inputMaskRef?: Ref<ReactInputMask>;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    inputRef?: Ref<HTMLInputElement>;
    inputStyle?: InputStyle;
    inputType?: InputType;
    label?: TranslatedText;
    margin?: BoxDimensions;
    padding?: BoxDimensions;
    placeholder?: TranslatedText;
    state?: InputState;
    value?: InputValue;
}
export interface InputAreaProps extends TextAreaEvents {
    autofocus?: boolean;
    className?: string;
    errorMessage?: TranslatedText;
    helper?: ReactNode;
    helpText?: string;
    iconLabel?: TranslatedText;
    inputIcon?: ReactElement<IconProps>;
    inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    inputRef?: Ref<HTMLTextAreaElement>;
    inputStyle?: InputStyle;
    inputType?: InputType;
    label?: TranslatedText;
    margin?: BoxDimensions;
    padding?: BoxDimensions;
    placeholder?: TranslatedText;
    rows?: number;
    state?: InputState;
    value?: InputValue;
}
//# sourceMappingURL=Input.interface.d.ts.map