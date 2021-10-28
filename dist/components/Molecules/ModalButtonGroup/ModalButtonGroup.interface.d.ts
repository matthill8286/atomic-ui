import { ButtonProps } from '@/components/Atoms/Button';
export declare type ModalButtonGroupAlignment = 'space-between' | 'right' | 'center';
export interface ModalButtonProps extends ButtonProps {
    onClick?: () => void;
    buttonLabel?: string | React.ReactNode;
    href?: string;
}
export interface ModalButtonGroupProps {
    className?: string;
    key?: string;
    buttonAlignment?: ModalButtonGroupAlignment;
    buttonWidth?: number;
    primaryButtonProps?: ModalButtonProps;
    secondaryButtonProps?: ModalButtonProps;
    showButtonSeparator?: boolean;
}
//# sourceMappingURL=ModalButtonGroup.interface.d.ts.map