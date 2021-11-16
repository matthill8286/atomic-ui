import { storiesOf } from '@storybook/react'
import React from 'react'
import { FlexBox } from '@/components/Helper/FlexBox'
import {
  IconArrowRightCircle,
  IconArticle,
  IconBookmark,
  IconClose,
  IconCompleteChecked,
  IconDone,
  IconUseful,
  SocialFacebook,
  StyleguideArrowRightCircle,
} from '@matthill8286/atomic-icon-library'
import { Icon } from './Icon'
import { Spacer } from '@/components/Atoms/Spacer'

import Readme from './Icon.readme.md'
import { IconButton } from '@/components/Atoms/Button'

storiesOf('Design System/Atoms/Icon', module)
  .add(
    'Icons',
    () => {
      return (
        <>
          <Icon color={'primary'}>
            <IconArticle />
          </Icon>
          <Spacer size={'xl'} />
          <Icon rotate={90}>
            <IconCompleteChecked />
          </Icon>
          <Spacer size={'xl'} />
          <Icon height="md" width="md">
            <IconBookmark />
          </Icon>
          <Spacer size={'xl'} />
          <Icon height="sm" width="sm">
            <IconClose />
          </Icon>
          <Spacer size={'xl'} />
          <Icon height="lg" width="lg" color={'secondary'}>
            <IconUseful height="lg" width="lg" />
          </Icon>
          <Spacer size={'xl'} />
          <Icon height={'md'} width={'md'} color={'primary'}>
            <StyleguideArrowRightCircle />
          </Icon>
        </>
      )
    },
    {
      info: Readme,
    }
  )
  .add(
    'Rotated icon',
    () => {
      return (
        <Icon height={'md'} width={'md'} rotate={90}>
          <IconArrowRightCircle fill={'primary'} />
        </Icon>
      )
    },
    {
      info: Readme,
    }
  )
  .add('With border', () => {
    return (
      <FlexBox>
        <Icon withBorder width={25} height={25} color="primary">
          <SocialFacebook />
        </Icon>
      </FlexBox>
    )
  })
  .add('Large primary icon button', () => {
    return (
      <FlexBox>
        <IconButton round width={65} height={65} actionType="primary">
          <IconDone fill={'white'} />
        </IconButton>
      </FlexBox>
    )
  })
