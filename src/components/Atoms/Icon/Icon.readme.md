## How to use?
Import the `Icon` component and also import the SVG you want to use directly from the `@excelwithbusiness/webmobile-svg-library` module and nest it. The `Icon` component itself has the Prop `rotate` to allow a rotation of a SVG.

```javascript
import { Icon } from '@/components/Atoms/Icon'
import { IconArrow } from '@excelwithbusiness/webmobile-svg-library'

<Icon>
  <IconArrow />
</Icon>

<Icon rotate={90}> 
  <IconArrow />
</Icon>
```

  &nbsp;

## List of existing Icons

```js

IconAdd

IconArticle

IconBackUi

IconBookmark

IconBookmarkActive

IconCheckmarkCircle

IconCheckmarkCircleOutlined

IconCheckmarkSquare

IconCheckmarkSquareOutlined

IconClear

IconClearCircle

IconClearCircleOutlined

IconClearSquare

IconClearSquareOutlined

IconCross

IconDone

IconFastForward

IconFastRewind

IconFilter

IconForward

IconHeart

IconHeartOutlined

IconHelp

IconHelpOutlined

IconInfo

IconInfoOutined

IconMenuIcon

IconNext

IconPause

IconPlay

IconPlayOutlined

IconSearch

IconSettings

IconSettingsOutlined

IconSkip

IconSkipNext

IconSkipPrevious

IconVolumeDown

IconVolumeLow

IconVolumeMinus

IconVolumeMute

IconVolumeOff

IconVolumePlus

IconVolumeUp

```
