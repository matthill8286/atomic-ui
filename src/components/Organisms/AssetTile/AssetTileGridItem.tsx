import React, { useRef } from 'react'
import { AssetTileVariantProps } from '@/components/Organisms/AssetTile/helpers/layout'
import { useHistory } from 'react-router-dom'
import {
  AssetCard,
  AssetFeatured,
  AssetImage,
  AssetTileContent,
  AssetTileMeta,
  AssetSchedule,
  StyledBookmarkPlaceholder,
} from '@/components/Organisms/AssetTile/elements'
import { AssetLocked } from '@/components/Organisms/AssetTile/elements/AssetLocked'
import {
  isPortrait,
  StyledContentContainer,
  StyledDivider,
  StyledHeadingContainer,
  StyledResponsiveContainer,
  StyledTile,
  StyledAdditionalContent,
} from '@/components/Organisms/AssetTile/AssetTile.styled'
import {
  AssetStrategy,
  AssetTileLayout,
  MetaItem,
} from '@/components/Organisms/AssetTile/AssetTile.interface'
import { getMetaItemList } from '@/components/Organisms/AssetTile/helpers/icons'
import { AssetSponsoring } from '@/components/Organisms/AssetTile/elements/AssetSponsoring'
import { ShowMore } from '@/components/Atoms/ShowMore'
import { CopyText } from '@/components/Atoms/Typography'

const DEFAULT_LINE_LIMIT = 2

export const AssetTileGridItem: React.FC<AssetTileVariantProps> = ({
  badgeActionType = 'prominent',
  assetView = 'list',
  strategyType = AssetStrategy.none,
  children,
  color,
  elevation = 0,
  elevationHover = 0,
  isCollection,
  isOpenAsset = false,
  headlineLimitLines = DEFAULT_LINE_LIMIT,
  limitContentLines = DEFAULT_LINE_LIMIT,
  assetSponsoring,
  icon,
  mainLink,
  badges,
  competencyLabel,
  showBadges = true,
  showBookmark = true,
  showLock = false,
  showSkills = true,
  showAssetMeta = true,
  showProvider = true,
  showFeatured = false,
  isDisabled,
  noBorder,
  lazyloadLowQuality = false,
  layout = AssetTileLayout.gridItem,
  loading = false,
  sponsoringDetails,
  asset,
  renderAddToBookmarkButton,
  showMoreText,
  showLessText,
  showMoreNumOfLines,
  showMoreAlignment,
  fadeOutColor,
  lazyLoad,
  roundImages,
  onClick,
  onCompleteClick,
  onPictureClick,
  onHeadingClick,
  onLockClick,
  orientation = 'portrait',
  videoFallbackImage,
  ...rest
}) => {
  if (!asset) {
    return null
  }

  const history = useHistory()
  const ref = useRef(null)

  const { title, image, provider, duration, type, interaction, id } = asset

  const metaInputs: MetaItem | any = isCollection
    ? {
        duration: asset?.totalAssetDuration,
        type: null,
        completedStatus: asset?.completionPercentage,
        numberOfAssets: asset?.numberOfAssets,
      }
    : isOpenAsset
    ? {
        duration: asset?.eventDate,
        type: type?.name,
        completedStatus: null,
        numberOfAssets: null,
      }
    : { duration, type: type?.name, completedStatus: asset?.completionPercentage }

  const metaItems = getMetaItemList({ ...metaInputs })
  const useOverride = asset?.type?.name === 'Video' && !asset?.image

  const imageDimensions =
    orientation === 'portrait'
      ? { height: '200px', width: '100%', minHeight: '200px', maxWidth: '100%' }
      : { height: '300px', width: '100%', minHeight: '300px', maxWidth: '100%' }

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

  const assetMediaChildren = (
    <>
      <StyledBookmarkPlaceholder>
        {showBookmark &&
          renderAddToBookmarkButton &&
          renderAddToBookmarkButton({
            title,
            provider,
            duration,
            type,
            completed: interaction?.completed,
            bookmarked: interaction?.bookmarked,
            id,
          })}
      </StyledBookmarkPlaceholder>
      {showLock && !loading && <AssetLocked color="grey4" locked={asset?.locked} />}
    </>
  )

  return (
    <StyledTile ref={ref} orientation={orientation} {...rest}>
      <AssetCard
        elevationHover={elevationHover}
        isDisabled={asset?.locked || isDisabled}
        badges={badges}
        noBorder={noBorder}
        borderColor="grey2">
        <StyledResponsiveContainer orientation={orientation} aria-orientation="horizontal">
          <AssetImage
            lazyLoad={lazyLoad}
            loading={!!loading}
            assetImage={useOverride ? videoFallbackImage : image}
            rounded={roundImages}
            onPictureClick={onTileClickHandler}
            title={title}
            {...imageDimensions}>
            {showFeatured && !loading && (
              <AssetFeatured loading={loading} featuredLabel={asset?.featureLabel} color="grey5" />
            )}
            {strategyType === AssetStrategy.timebox && !loading && (
              <AssetSchedule timebox={asset?.timebox} color="white" />
            )}
          </AssetImage>
          {isPortrait(orientation) && <StyledDivider color="primary" height="xs" />}
          <StyledContentContainer aria-orientation="horizontal">
            {assetMediaChildren}
            {!loading && assetSponsoring?.isSponsored && (
              <AssetSponsoring layout="tile" sponsoringDetails={assetSponsoring} />
            )}
            <StyledHeadingContainer>
              <AssetTileContent
                loading={!!loading}
                provider={provider?.name ?? undefined}
                isDisabled={isDisabled}
                isCompact={!showProvider}
                description={title}
                onHeadingClick={onTileClickHandler}
                skills={asset?.competencies}
                showSkills={showSkills}
                limitContentLines={limitContentLines}
              />
            </StyledHeadingContainer>
            {!isPortrait(orientation) && (
              <StyledAdditionalContent>
                <ShowMore
                  lineHeight={19}
                  fontSize={14}
                  fontColor="grey5"
                  loading={loading}
                  fadeOutBackgroundColor={fadeOutColor}
                  labelAlignment={showMoreAlignment}
                  fadeOutHeight={35}
                  numOfLines={showMoreNumOfLines || 4}
                  showMoreText={showMoreText || 'Show more'}
                  showLessText={showLessText || 'Show less'}>
                  {asset?.description && (
                    <CopyText tag="p" padding="0" margin="xxs 0" color="grey5" display="flex">
                      {asset?.description.replace(/(<([^>]+)>)/gi, '')}
                    </CopyText>
                  )}
                </ShowMore>
              </StyledAdditionalContent>
            )}
            {children}
            {showAssetMeta && (
              <AssetTileMeta
                isCompact={isCollection}
                loading={!!loading}
                alignSelf="flex-end"
                isDisabled={isDisabled}
                onClick={onTileClickHandler}
                metaItems={metaItems}
              />
            )}
          </StyledContentContainer>
        </StyledResponsiveContainer>
      </AssetCard>
    </StyledTile>
  )
}
