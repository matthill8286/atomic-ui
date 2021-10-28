import React from 'react';
export interface StyledAssetInformationProps {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export interface AssetInformationProps {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    label?: string;
    provider?: string;
    type?: string | undefined | null;
    competency?: string;
    id?: string;
    url?: string;
}
export declare const StyledAssetInformation: import("styled-components").StyledComponent<"div", import("../../../..").Theme, StyledAssetInformationProps, never>;
export declare const StyledInformationTypo: import("styled-components").StyledComponent<React.FC<import("../../../Atoms/Typography/Typo/Typo.interface").TypoProps>, import("../../../..").Theme, {}, never>;
export declare const AssetInformation: React.FC<AssetInformationProps>;
//# sourceMappingURL=AssetInformation.d.ts.map