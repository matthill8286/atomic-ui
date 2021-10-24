import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { StyleguideGlobe, IconUser } from '@excelwithbusiness/webmobile-svg-library'
import { DropdownButton } from './DropdownButton'

storiesOf('Design System/Molecules/Dropdown Button', module)
  .add('Default', () => (
    <DropdownButton isOpen={false} label="Dropdown Label" onClick={action('Button Clicked')} />
  ))
  .add('User Button', () => (
    <DropdownButton
      width={35}
      height={35}
      primaryIcon={<IconUser height={35} width={35} />}
      isOpen={false}
      onClick={action('Button Clicked')}
    />
  ))
  .add('User Button with picture', () => (
    <DropdownButton
      width={35}
      height={35}
      isOpen={false}
      onClick={action('Button Clicked')}
      pictureSrc="https://image.shutterstock.com/image-photo/cute-little-red-kitten-sleeps-600w-235089946.jpg"
    />
  ))
  .add('Icon Language Button open', () => (
    <DropdownButton
      secondaryIcon
      isOpen
      onClick={action('Button Clicked')}
      primaryIcon={<StyleguideGlobe />}
    />
  ))
  .add('Icon Language Button closed', () => (
    <DropdownButton
      secondaryIcon
      isOpen={false}
      onClick={action('Button Clicked')}
      primaryIcon={<StyleguideGlobe />}
    />
  ))
