import * as React from 'react';
import { ThemeFontSizes } from '@/types/theme';
import { Provider as ProviderType, Skills } from '../AssetTile.interface';
interface StyledElementProps {
    isDisabled?: boolean;
    isCompact?: boolean;
}
export interface AssetTitleProps extends StyledElementProps {
    fontSize?: ThemeFontSizes;
    isCompact?: boolean;
    loading?: boolean;
    limitContentLines?: number;
    renderSkills?: JSX.Element | undefined;
    provider?: ProviderType['name'] | undefined;
    onHeadingClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    description?: string | null;
    withEllipsis?: boolean;
    skills?: (Skills | null)[];
    competencyLabel?: string;
    showSkills?: boolean;
}
export declare const StyledSkills: import("styled-components").StyledComponent<"div", import("../../../../types/theme").Theme, StyledElementProps, never>;
export declare const AssetTileContent: React.FC<AssetTitleProps>;
export {};
//# sourceMappingURL=AssetTileContent.d.ts.map