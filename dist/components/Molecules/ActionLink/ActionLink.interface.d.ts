import React, { MouseEvent } from 'react';
import { TranslatedTextType } from '@/types';
import { LinkProps } from '@/components/Atoms/Link';
export interface ActionLinkProps extends LinkProps {
    children: TranslatedTextType | React.ReactNode;
}
export interface QuickAction {
    actionLabel: string;
    id?: string;
    href?: string | null;
    to?: string;
    target?: string;
    branded?: boolean;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    links: QuickAction[] | [];
}
//# sourceMappingURL=ActionLink.interface.d.ts.map