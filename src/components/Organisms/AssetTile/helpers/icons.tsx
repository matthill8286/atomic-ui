import React from 'react'
import {
  IconArticle,
  IconOnlineCourse,
  IconSaveToPlaylist,
  IconAsset,
  IconAssetTime,
  IconPercentage,
  StyleguideVideoThin,
  StyleguidePodcast,
} from '@/svgs'
import {
  AssetTypeName,
  AssetTypeVariants,
  MetaItem,
  MetaPayload,
} from '@/components/Organisms/AssetTile'

export type AssetTileVariantProps = AssetTypeVariants
type AssetTileVariant = React.ReactElement<AssetTileVariantProps>

export enum AssetTileIcons {
  Video = 'Video',
  Article = 'Article',
  Podcast = 'Podcast',
  Online = 'Online course',
  Playlist = 'Playlist',
  Webinar = 'Webinar',
}

const icons: Record<AssetTileIcons, AssetTileVariant> = {
  [AssetTileIcons.Video]: <StyleguideVideoThin />,
  [AssetTileIcons.Article]: <IconArticle />,
  [AssetTileIcons.Podcast]: <StyleguidePodcast />,
  [AssetTileIcons.Online]: <IconOnlineCourse />,
  [AssetTileIcons.Playlist]: <IconSaveToPlaylist />,
  [AssetTileIcons.Webinar]: <StyleguideVideoThin />,
}

const getIconByTypeName = (typeName: AssetTypeName): JSX.Element => {
  const iconsComponent = icons[typeName]
  if (!iconsComponent) {
    return <IconArticle />
  }

  return icons[typeName]
}

export const getMetaItemList = ({ duration, type, completedStatus, numberOfAssets }: MetaItem) => {
  const payload: MetaPayload[] = []

  if (type) {
    payload.push({
      text: type,
      icon: getIconByTypeName(type),
    })
  }

  if (numberOfAssets) {
    payload.push({
      text: numberOfAssets,
      icon: <IconAsset />,
    })
  }

  if (duration) {
    payload.push({
      text: `${duration}`,
      icon: <IconAssetTime />,
    })
  }

  if (completedStatus) {
    payload.push({
      text: completedStatus,
      icon: <IconPercentage />,
    })
  }

  return payload
}
