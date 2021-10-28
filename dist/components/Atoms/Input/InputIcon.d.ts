import React, { ReactNode } from 'react';
import { TranslatedText } from '@/types/global';
import { IconSize } from './Input.interface';
export declare type InputIconState = 'default' | 'valid' | 'error';
export interface InputIconProps {
    icon?: ReactNode;
    iconLabel?: TranslatedText;
    iconSize?: IconSize;
    iconState: InputIconState;
    onClick?: React.MouseEventHandler<HTMLDivElement> | React.MouseEventHandler<HTMLElement>;
}
export declare const InputIcon: (props: InputIconProps) => JSX.Element;
//# sourceMappingURL=InputIcon.d.ts.map