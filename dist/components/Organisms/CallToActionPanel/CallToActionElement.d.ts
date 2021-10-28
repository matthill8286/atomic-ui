import React from 'react';
import { ShowMoreProps } from '@/components/Atoms/ShowMore';
export declare type ActionElement = {
    headline?: string;
    copyText?: string;
    href?: string;
    route?: string;
    buttonLabel?: string;
};
export interface CallToActionElementProps {
    element: ActionElement;
    showMore?: ShowMoreProps;
    showReadMore: boolean;
    richTextCopy: string | React.ReactNode;
}
export declare const CallToActionElement: React.FC<CallToActionElementProps>;
//# sourceMappingURL=CallToActionElement.d.ts.map