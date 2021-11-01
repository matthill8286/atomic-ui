import React from 'react'
import { IconButton } from '@/components/Atoms/Button'
import { Card } from '@/components/Atoms/Card'
import { Icon } from '@/components/Atoms/Icon'
import { Tag } from '@/components/Atoms/Tag'
import { TagProps } from '@/components/Atoms/Tag/Tag.interface'
import { FlexBox, FlexItem } from '@/components/Helper/FlexBox'
import { FeatureList, FeatureListType } from '@/components/Molecules/FeatureList'
import {
  IconBookmark,
  IconBookmarkActive,
  IconCheckmarkCircle,
  IconCheckmarkCircleOutlined,
  StyleguideExpand,
  IconSaveToPlaylist,
  IconShare,
} from '@matthill8286/jsx-icon-library'
import { CompetencyText, CompleteButton, IconsWrapper, LaunchButton } from './AssetMeta.styled'
import { isNonEmptyString } from '@/components/Helper/String'
import { EmbeddedWrapper } from '@/components/Atoms/EmbeddedPlayer'

export interface AssetMetaProps {
  isShareInteraction?: boolean
  isBookmarkInteraction?: boolean
  isCreatePlaylistInteraction?: boolean
  isLandingPage?: boolean
  bookmarked?: boolean
  completed?: boolean
  saved?: boolean
  shared?: boolean
  shareHandler?: () => void
  bookmarkHandler?: () => void
  savePlaylistHandler?: () => void
  launchHandler?: () => void
  hideLaunched?: boolean
  completedHandler?: () => void
  trackingHandler?: () => void
  buttonTextLaunch?: string
  buttonTextComplete?: string
  list: FeatureListType[]
  competencyCopy: string
  tags: TagProps[]
  chatSrc?: string
  chatMaxHeight?: string | number
}

export const AssetMeta: React.FC<AssetMetaProps> = ({
  isShareInteraction = false,
  isBookmarkInteraction = false,
  isCreatePlaylistInteraction = false,
  isLandingPage = false,
  hideLaunched = false,
  bookmarked,
  completed,
  shareHandler,
  bookmarkHandler,
  savePlaylistHandler,
  launchHandler,
  completedHandler,
  buttonTextLaunch,
  buttonTextComplete,
  list,
  competencyCopy,
  tags = [],
  chatSrc = '',
  chatMaxHeight,
}): JSX.Element => {
  return (
    <FlexBox flexDirection="column" alignItems="center">
      <IconsWrapper>
        {isBookmarkInteraction && (
          <FlexItem padding>
            <IconButton
              round
              size="md"
              weight="bold"
              onClick={bookmarkHandler}
              actionType="darkBorder"
              height={45}
              width={45}>
              {bookmarked ? <IconBookmarkActive /> : <IconBookmark />}
            </IconButton>
          </FlexItem>
        )}
        {isShareInteraction && (
          <FlexItem padding>
            <IconButton
              round
              size="md"
              weight="bold"
              onClick={shareHandler}
              actionType="darkBorder"
              height={45}
              width={45}>
              <IconShare />
            </IconButton>
          </FlexItem>
        )}
        {isCreatePlaylistInteraction && (
          <FlexItem padding>
            <IconButton
              round
              size="md"
              weight="bold"
              onClick={savePlaylistHandler}
              actionType="darkBorder"
              height={45}
              width={45}>
              <IconSaveToPlaylist />
            </IconButton>
          </FlexItem>
        )}
      </IconsWrapper>
      {isNonEmptyString(chatSrc) ? (
        <EmbeddedWrapper embedUrl={chatSrc} aspect="1/4" maxHeight={chatMaxHeight} />
      ) : (
        <Card elevation={1} shape="rounded-small" padding="lg">
          {!hideLaunched && (
            <LaunchButton weight="bold" curved fullWidth onClick={launchHandler}>
              <Icon width={20} height={20} color="white">
                <StyleguideExpand fill={'white'} />
              </Icon>
              {buttonTextLaunch}
            </LaunchButton>
          )}
          {!isLandingPage && (
            <CompleteButton
              color="primary"
              weight="bold"
              curved
              actionType="outlined"
              fullWidth
              onClick={completedHandler}>
              <Icon width={25} height={25} color="primary">
                {completed ? <IconCheckmarkCircle /> : <IconCheckmarkCircleOutlined />}
              </Icon>
              {buttonTextComplete}
            </CompleteButton>
          )}
          {list && <FeatureList list={list} />}
          <CompetencyText padding="sm 0">{competencyCopy}</CompetencyText>
          <FlexBox flexWrap="wrap">
            {tags.map(({ text }: { text: TagProps['text'] }, idx: number) => (
              <FlexItem key={`Tag-${idx}`}>
                {text && (
                  <Tag
                    color="primary"
                    marginBottom
                    marginRight
                    padding={{ left: 'lg', right: 'lg' }}
                    text={text}
                    weight="semibold"
                  />
                )}
              </FlexItem>
            ))}
          </FlexBox>
        </Card>
      )}
    </FlexBox>
  )
}

AssetMeta.displayName = 'AssetMeta'
