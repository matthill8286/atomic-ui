import React from 'react';
import { ActionElement } from '@/components/Organisms/CallToActionPanel/CallToActionElement';
import { AssetTileAsset } from '@/components/Organisms/AssetTile';
import { ShowMoreProps } from '@/components/Atoms/ShowMore';
interface ItemProps {
    order: number;
}
export declare const StyledCtaTextColumn: import("styled-components").StyledComponent<"div", import("../../..").Theme, {
    alignment: CallToActionPanelProps['alignment'];
}, never>;
export declare const StyledCtaImageColumn: import("styled-components").StyledComponent<"div", import("../../..").Theme, ItemProps & {
    alignment: CallToActionPanelProps['alignment'];
}, never>;
export declare const StyledCtaRow: import("styled-components").StyledComponent<"section", import("../../..").Theme, import("../../Atoms/Section").SectionProps, never>;
export declare type CtaImageAlignment = 'right' | 'left';
export declare type ImageHeight = 'sm' | 'md' | 'lg';
export interface CTSImage {
    alt: string;
    url: string;
    mobile?: {
        url: string;
    };
    tablet?: {
        url: string;
    };
}
export interface CallToActionPanelProps {
    image?: CTSImage;
    svg?: JSX.Element;
    alignment: CtaImageAlignment;
    withLQIP?: boolean;
    asset?: AssetTileAsset;
    element: ActionElement;
    showMore?: ShowMoreProps;
    isOpenAsset?: boolean;
    showFeatured?: boolean;
    showReadMore?: boolean;
    onAssetClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    richTextCopy?: string | React.ReactNode;
}
export declare const CallToActionPanel: React.FC<CallToActionPanelProps>;
export {};
//# sourceMappingURL=CallToActionPanel.d.ts.map