import React from 'react';
import { SponsoringDetails } from '@/components/Organisms/AssetTile';
interface AssetSponsoringProps {
    sponsoringDetails: SponsoringDetails;
    layout?: 'carousel' | 'tile';
    maxWidth?: string;
}
export declare const AssetSponsoring: React.FC<AssetSponsoringProps>;
export declare const StyledSponsoringWrapper: import("styled-components").StyledComponent<React.FC<import("../../../Helper/FlexBox").FlexItemProps>, import("../../../..").Theme, {
    layout: AssetSponsoringProps['layout'];
}, never>;
export declare const StyledSponsoringIconWrapper: import("styled-components").StyledComponent<"div", import("../../../..").Theme, {}, never>;
export {};
//# sourceMappingURL=AssetSponsoring.d.ts.map