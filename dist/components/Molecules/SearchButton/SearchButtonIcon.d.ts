import React, { ReactNode } from 'react';
import { TranslatedText } from '@/types/global';
import { IconSize } from '@/components/Atoms/Input';
export declare type SearchButtonIconState = 'default' | 'valid' | 'error';
export interface SearchButtonIconProps {
    icon?: ReactNode;
    iconLabel?: TranslatedText;
    iconSize?: IconSize;
    iconState: SearchButtonIconState;
    onClick?: React.MouseEventHandler<HTMLDivElement> | React.MouseEventHandler<HTMLElement>;
}
export declare const SearchButtonIcon: (props: SearchButtonIconProps) => JSX.Element;
//# sourceMappingURL=SearchButtonIcon.d.ts.map