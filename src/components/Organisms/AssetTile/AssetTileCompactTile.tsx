import React from 'react'
import { AssetTileVariantProps } from '@/components/Organisms/AssetTile/helpers/layout'
import { useHistory } from 'react-router-dom'
import { NativeLazyLoadOptions } from '@/components/Atoms/Picture'
import { Card } from '@/components/Atoms/Card'
import {
  AssetTileCompact as CompactAssetTile,
  AssetTileCompactElement,
} from '@/components/Organisms/AssetTileCompact'
import { IconButton } from '@/components/Atoms/Button'
import { Icon } from '@/components/Atoms/Icon'
import { StyleguideBookmarkActive, StyleguideCheckmarkCircle } from '@/svgs'

export const AssetTileCompactTile: React.FC<AssetTileVariantProps> = ({
  competencyLabel,
  placeCard = false,
  showImage = true,
  showInteractions = true,
  loading = false,
  isDisabled,
  asset,
  mainLink,
  onClick,
  onLockClick,
}) => {
  if (!asset || !Object.keys(asset).length) {
    return null
  }

  const history = useHistory()

  const { title, image, provider, duration, competencies, type, interaction, id } = asset

  const onTileClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (loading || isDisabled) {
        return null
      }

      if (typeof onClick === 'function') {
        onClick(event)
      }

      if (mainLink) {
        // navigate to mainLink
        if (mainLink.to) return history.push(mainLink.to)
        if (mainLink.href) return (window.location.href = mainLink.href)
      }
    },
    [history, mainLink, onClick]
  )

  const onLockedClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (loading) {
        return null
      }

      if (typeof onLockClick === 'function') {
        onLockClick(event)
      }
    },
    [onLockClick]
  )

  const onTileClickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) =>
    asset?.locked ? onLockedClick(event) : onTileClick(event)

  const item = (
    <CompactAssetTile
      loading={loading}
      showImage={showImage}
      assetImage={image}
      title={title}
      onClick={onTileClickHandler}
      lazyLoadImage={NativeLazyLoadOptions.Eager}>
      <AssetTileCompactElement
        title={asset?.title}
        provider={provider?.name}
        competency={competencies?.[0]?.text || competencyLabel}
        type={asset?.type?.name}
        description={asset?.description}
        loading={loading}
        showInteractions={showInteractions}
        iconsComponent={
          <>
            {interaction?.bookmarked && (
              <IconButton isFlat actionType="ghost">
                <Icon width={20} height={20} color="grey5">
                  <StyleguideBookmarkActive height="sm" width="sm" fill="grey2" />
                </Icon>
              </IconButton>
            )}
            {interaction?.completed.status && (
              <IconButton isFlat actionType="ghost">
                <Icon width={20} height={20} color="grey5">
                  <StyleguideCheckmarkCircle />
                </Icon>
              </IconButton>
            )}
          </>
        }
      />
    </CompactAssetTile>
  )

  return (
    <>
      {placeCard ? (
        <Card elevation={0} noBorder={[]} padding="xs" shape="rounded-xl" surface="white">
          {item}
        </Card>
      ) : (
        item
      )}
    </>
  )
}
