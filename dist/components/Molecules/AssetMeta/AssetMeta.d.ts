import React from 'react';
import { TagProps } from '@/components/Atoms/Tag/Tag.interface';
import { FeatureListType } from '@/components/Molecules/FeatureList';
export interface AssetMetaProps {
    isShareInteraction?: boolean;
    isBookmarkInteraction?: boolean;
    isCreatePlaylistInteraction?: boolean;
    isLandingPage?: boolean;
    bookmarked?: boolean;
    completed?: boolean;
    saved?: boolean;
    shared?: boolean;
    shareHandler?: () => void;
    bookmarkHandler?: () => void;
    savePlaylistHandler?: () => void;
    launchHandler?: () => void;
    hideLaunched?: boolean;
    completedHandler?: () => void;
    trackingHandler?: () => void;
    buttonTextLaunch?: string;
    buttonTextComplete?: string;
    list: FeatureListType[];
    competencyCopy: string;
    tags: TagProps[];
    chatSrc?: string;
    chatMaxHeight?: string | number;
}
export declare const AssetMeta: React.FC<AssetMetaProps>;
//# sourceMappingURL=AssetMeta.d.ts.map