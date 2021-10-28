import React from 'react';
import { ButtonProps } from '@/components/Atoms/Button/Button.interface';
import { Corners, Shape } from '@/components/Atoms/Card/Card.interface';
import { LinkProps } from '@/components/Atoms/Link';
import { FontSizeMap } from '@/components/Atoms/Typography/Typo/Typo.interface';
import { FlexAlignItemsOptions } from '@/components/Helper/FlexBox';
import { BoxDimensions, ThemeFontSizes } from '@/types';
export declare type AnimationType = 'fadeIn' | 'fadeOut' | 'shake';
export declare type ArrowPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export declare type NotificationBoxType = 'alert' | 'error' | 'info' | 'success' | 'hot';
export declare type ButtonLayout = 'row' | 'column';
export interface ToolTipData {
    arrowPosition: ArrowPosition;
    arrowleft?: number;
    left: number;
    top: number;
    bottom?: number;
    width?: number;
}
export interface NotificationLink extends Partial<Pick<LinkProps, 'href' | 'onClick' | 'to' | 'decorationColor' | 'bold' | 'inline' | 'fontSize' | 'target'>> {
    label: string;
    iconLeft?: React.ReactElement | null;
}
export interface NotificationButton extends Partial<Pick<ButtonProps, 'actionType' | 'onClick' | 'href' | 'target'>> {
    actionBtnLabel: string;
}
export interface NotificationEvents {
    buttons?: NotificationButton[];
    onClose?: (event: React.MouseEvent<HTMLElement>) => void;
}
export declare enum NotificationContentSort {
    ButtonsLinks = "buttonsLinks",
    LinksButtons = "linksButtons"
}
export interface NotificationBoxProps extends NotificationEvents, Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    animation?: AnimationType;
    body?: string;
    bodyFontSize?: ThemeFontSizes | FontSizeMap;
    bodyMargin?: string | BoxDimensions;
    buttonLayout?: ButtonLayout;
    links?: NotificationLink[];
    cardShape?: Shape | Corners<Shape>;
    hasTitleIcon?: boolean;
    maxWidth?: string;
    isTitleFontBold?: boolean;
    isClosable?: boolean;
    rootPosition?: 'relative' | 'absolute';
    title?: string | React.ReactElement;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    tooltip?: ToolTipData;
    type?: NotificationBoxType;
    titleIconSelfAlign?: FlexAlignItemsOptions;
    sort?: NotificationContentSort;
    alignLinks?: 'left' | 'center';
}
//# sourceMappingURL=NotificationBox.interface.d.ts.map