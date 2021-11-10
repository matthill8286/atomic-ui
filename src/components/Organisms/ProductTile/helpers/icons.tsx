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
} from '@matthill8286/atomic-icon-library'
import {
  ProductTypeName,
  ProductTypeVariants,
  MetaItem,
  MetaPayload,
} from '@/components/Organisms/ProductTile'

export type ProductTileVariantProps = ProductTypeVariants
type ProductTileVariant = React.ReactElement<ProductTileVariantProps>

export enum ProductTileIcons {
  Video = 'Video',
  Article = 'Article',
  Podcast = 'Podcast',
  Online = 'Online course',
  Playlist = 'Playlist',
  Webinar = 'Webinar',
}

const icons: Record<ProductTileIcons, ProductTileVariant> = {
  [ProductTileIcons.Video]: <StyleguideVideoThin />,
  [ProductTileIcons.Article]: <IconArticle />,
  [ProductTileIcons.Podcast]: <StyleguidePodcast />,
  [ProductTileIcons.Online]: <IconOnlineCourse />,
  [ProductTileIcons.Playlist]: <IconSaveToPlaylist />,
  [ProductTileIcons.Webinar]: <StyleguideVideoThin />,
}

const getIconByTypeName = (typeName: ProductTypeName): JSX.Element => {
  const iconsComponent = icons[typeName]
  if (!iconsComponent) {
    return <IconArticle />
  }

  return icons[typeName]
}

export const getMetaItemList = ({
  duration,
  type,
  completedStatus,
  numberOfProducts,
}: MetaItem) => {
  const payload: MetaPayload[] = []

  if (type) {
    payload.push({
      text: type,
      icon: getIconByTypeName(type),
    })
  }

  if (numberOfProducts) {
    payload.push({
      text: numberOfProducts,
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
