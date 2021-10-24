import { BadgeType } from '@/components/Atoms/Badge'
import { AssetWrapperProps } from './LazyAssetCarousel.interface'

const isBadgeType = (badge: BadgeType | null): badge is BadgeType => typeof badge !== null

export const useBadges = ({
  asset,
  playlistView,
  showBadges = true,
}: Pick<AssetWrapperProps, 'asset' | 'showBadges' | 'playlistView'>): BadgeType[] => {
  const badges =
    (playlistView === 'collection' &&
      asset?.__typename &&
      ([{ name: asset?.__typename, actionType: 'prominent' }] as BadgeType[]).filter(
        isBadgeType
      )) ||
    []

  if (showBadges) {
    return badges
  }
  return []
}
