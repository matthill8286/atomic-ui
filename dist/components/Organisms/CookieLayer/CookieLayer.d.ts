import * as React from 'react';
import { ButtonProps } from '@/components/Atoms/Button';
export declare type CookieButtonGroupAlignment = 'space-between' | 'right' | 'center';
export interface CookieButtonProps extends ButtonProps {
    onClick?: () => void;
    buttonLabel?: string | React.ReactNode;
    href?: string;
}
export interface CookieButtonGroupProps {
    className?: string;
    key?: string;
    buttonAlignment?: CookieButtonGroupAlignment;
    buttonWidth?: number;
    primaryButtonProps?: CookieButtonProps;
    secondaryButtonProps?: CookieButtonProps;
    showButtonSeparator?: boolean;
}
interface CookieLayerProps {
    position: string;
    mainContent?: any;
    buttonAlignment?: CookieButtonGroupAlignment;
    buttonWidth?: number;
    primaryButtonProps?: CookieButtonProps;
    secondaryButtonProps?: CookieButtonProps;
    showButtonSeparator?: boolean;
}
export declare const CookieButtonGroup: React.FC<CookieButtonGroupProps>;
export declare const CookieLayer: React.FC<CookieLayerProps>;
export {};
//# sourceMappingURL=CookieLayer.d.ts.map