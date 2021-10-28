import { AssetTypeVariants, MetaItem, MetaPayload } from '@/components/Organisms/AssetTile';
export declare type AssetTileVariantProps = AssetTypeVariants;
export declare enum AssetTileIcons {
    Video = "Video",
    Article = "Article",
    Podcast = "Podcast",
    Online = "Online course",
    Playlist = "Playlist",
    Webinar = "Webinar"
}
export declare const getMetaItemList: ({ duration, type, completedStatus, numberOfAssets }: MetaItem) => MetaPayload[];
//# sourceMappingURL=icons.d.ts.map