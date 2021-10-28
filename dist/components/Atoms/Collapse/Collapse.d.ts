import * as React from 'react';
export interface CollapseProps {
    isOpen?: boolean;
    isControlled?: boolean;
    collapsedHeight?: number;
    onClick?: () => void;
    onChange?: (collapsed: boolean) => void;
}
export declare const Collapse: React.FC<CollapseProps>;
//# sourceMappingURL=Collapse.d.ts.map