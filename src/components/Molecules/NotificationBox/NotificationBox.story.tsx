import { action } from '@storybook/addon-actions'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ButtonActionType } from '@/components/Atoms/Button'
import { NotificationBox } from './NotificationBox'
import {
  AnimationType,
  ArrowPosition,
  ButtonLayout,
  NotificationBoxProps,
  NotificationBoxType,
  NotificationButton,
  NotificationContentSort,
  ToolTipData,
} from './NotificationBox.interface'

const animation: AnimationType[] = ['fadeIn', 'fadeOut', 'shake']
const arrowPosition: ArrowPosition[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
const types: NotificationBoxType[] = ['alert', 'error', 'info', 'success']
const buttonLayout: ButtonLayout[] = ['column', 'row']
const actionButtonTypes: ButtonActionType[] = [
  'ghost',
  'primary',
  'prominent',
  'secondary',
  'inverted',
  'outlined',
]

const knobs = (): NotificationBoxProps => {
  return {
    body: text(
      'Body',
      'Please complete the assets in the collection before this one to unlock this asset'
    ),
    hasTitleIcon: boolean('Icon', true),
    isClosable: boolean('Closable', true),
    title: text('Title', 'Asset not available yet!'),
    type: select('Type', types, types[1]),
    animation: select('Animation', animation, undefined),
    buttonLayout: select('Button Layout', buttonLayout, buttonLayout[0]),
  }
}
const buttonKnobs = (): NotificationButton =>
  ({
    actionBtnLabel: text('Button Label', 'OK'),
    onClick: action('click'),
    actionType: select('Button Type #1', actionButtonTypes, 'primary'),
  } as NotificationButton)

const tooltipKnobs = (): ToolTipData => {
  return {
    arrowleft: number('Arrow left', 0),
    arrowPosition: select('Arrow Position', arrowPosition, arrowPosition[0]),
    left: number('Left', 40),
    top: number('Top', 40),
  }
}

storiesOf('Design System/Molecules/Notification Box', module)
  .add('Default', () => <NotificationBox {...knobs()} buttons={[{ ...buttonKnobs() }]} />)
  .add('Default, no button', () => <NotificationBox {...knobs()} />)
  .add('Title only', () => <NotificationBox {...knobs()} body="" isClosable={false} />)
  .add('Body only', () => <NotificationBox {...knobs()} title="" isClosable={false} />)
  .add('Title and button', () => (
    <NotificationBox
      {...knobs()}
      buttons={[
        { actionBtnLabel: 'Self Destruct', onClick: action('onClick'), actionType: 'primary' },
      ]}
      body=""
    />
  ))
  .add('As ToolTip', () => (
    <NotificationBox
      {...knobs()}
      buttons={[
        { actionBtnLabel: 'Self Destruct', onClick: action('onClick'), actionType: 'primary' },
      ]}
      body=""
      tooltip={{ ...tooltipKnobs() }}
    />
  ))
  .add('With two buttons', () => (
    <NotificationBox
      {...knobs()}
      buttons={[
        {
          actionBtnLabel: 'Button One',
          actionType: select('Button Type #1', actionButtonTypes, 'outlined'),
          onClick: action('onClickButon One'),
        },
        {
          actionBtnLabel: 'Button Two',
          actionType: select('Button Type #2', actionButtonTypes, 'primary'),
          href: 'https://www.google.co.uk?learning',
          target: '_blank',
        },
      ]}
      tooltip={{ ...tooltipKnobs() }}
    />
  ))

  .add('With links', () => (
    <BrowserRouter>
      <NotificationBox
        {...knobs()}
        links={[
          { label: 'Link One', to: 'https://www.google.co.uk?learning' },
          { label: 'Link Two', onClick: () => {} },
        ]}
        tooltip={{ ...tooltipKnobs() }}
      />
    </BrowserRouter>
  ))

  .add('With links and buttons', () => (
    <BrowserRouter>
      <NotificationBox
        {...knobs()}
        buttons={[
          {
            actionBtnLabel: 'Button',
            actionType: select('Button Type #1', actionButtonTypes, 'primary'),
            onClick: action('onClick'),
          },
        ]}
        links={[
          {
            label: 'Link',
            to: 'https://www.google.co.uk?learning',
            target: '_blank',
            decorationColor: 'prominent',
            bold: true,
            iconLeft: null,
            inline: false,
            fontSize: 'sm',
          },
        ]}
        sort={select(
          'Sort',
          [NotificationContentSort.LinksButtons, NotificationContentSort.ButtonsLinks],
          NotificationContentSort.ButtonsLinks
        )}
        alignLinks="center"
        tooltip={{ ...tooltipKnobs() }}
      />
    </BrowserRouter>
  ))
