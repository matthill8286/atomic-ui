import * as React from 'react';
export interface ReadMoreLabelProps {
    isOpen?: boolean;
    collapsedHeight?: number;
    htmlFor: string;
    showMoreLabel: string;
    showLessLabel: string;
    onClick?: () => void;
    onChange?: (collapsed: boolean) => void;
}
export declare const ReadMoreLabel: React.FC<ReadMoreLabelProps>;
//# sourceMappingURL=ReadMoreLabel.d.ts.map