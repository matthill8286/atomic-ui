import React from 'react';
interface ItemProps {
    order: number;
}
export declare const StyledText: import("styled-components").StyledComponent<"div", import("../../..").Theme, {}, never>;
export declare const StyledImage: import("styled-components").StyledComponent<"div", import("../../..").Theme, ItemProps, never>;
export declare const StyledRow: import("styled-components").StyledComponent<"div", import("../../..").Theme, {}, never>;
export declare type ImageAlignment = 'right' | 'left';
export interface Image {
    alt: string | null;
    url: string;
    mobile?: {
        url: string;
    };
    tablet?: {
        url: string;
    };
}
export interface ImageAndTextProps {
    image: Image;
    imageAlignment: ImageAlignment;
    withLQIP?: boolean;
    contentful?: boolean;
}
export declare const ImageAndText: React.FC<ImageAndTextProps>;
export {};
//# sourceMappingURL=ImageAndText.d.ts.map