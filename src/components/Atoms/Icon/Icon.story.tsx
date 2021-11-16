import { storiesOf } from '@storybook/react'
import React from 'react'
import { FlexBox } from '@/components/Helper/FlexBox'
import {
  OtherArrowRightCircle,
  OtherBookmark,
  OtherClose,
  OtherCompleteChecked,
  OtherDone,
  OtherUseful,
  OtherArticle,
  OtherFacebook,
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
            <OtherArticle />
          </Icon>
          <Spacer size={'xl'} />
          <Icon rotate={90}>
            <OtherCompleteChecked />
          </Icon>
          <Spacer size={'xl'} />
          <Icon height="md" width="md">
            <OtherBookmark />
          </Icon>
          <Spacer size={'xl'} />
          <Icon height="sm" width="sm">
            <OtherClose />
          </Icon>
          <Spacer size={'xl'} />
          <Icon height="lg" width="lg" color={'secondary'}>
            <OtherUseful height="lg" width="lg" />
          </Icon>
          <Spacer size={'xl'} />
          <Icon height={'md'} width={'md'} color={'primary'}>
            <OtherArrowRightCircle />
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
          <OtherArrowRightCircle fill={'primary'} />
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
          <OtherFacebook />
        </Icon>
      </FlexBox>
    )
  })
  .add('Large primary icon button', () => {
    return (
      <FlexBox>
        <IconButton round width={65} height={65} actionType="primary">
          <OtherDone fill={'white'} />
        </IconButton>
      </FlexBox>
    )
  })
