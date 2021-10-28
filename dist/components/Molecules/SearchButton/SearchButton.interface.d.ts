import { ReactElement } from 'react';
import { IconProps } from '@/components/Atoms/Icon';
import { InputProps } from '@/components/Atoms/Input';
import { ThemeColors } from '@/types';
export declare type SearchStyle = 'default' | 'dense' | 'large';
export declare type SearchType = 'text' | 'search';
export declare type SearchMode = 'none' | 'text' | 'search';
export declare type SearchState = 'idle' | 'valid' | 'error';
export declare type MapSearchStateToColor = {
    [key in SearchState]: ThemeColors;
};
export interface SearchIconSize {
    height: number;
    width: number;
}
export interface SearchButtonProps extends InputProps {
    searchStyle?: SearchStyle;
    searchType?: SearchType;
    state?: SearchState;
    searchProps?: React.InputHTMLAttributes<HTMLInputElement>;
    searchIcon?: ReactElement<IconProps>;
}
//# sourceMappingURL=SearchButton.interface.d.ts.map