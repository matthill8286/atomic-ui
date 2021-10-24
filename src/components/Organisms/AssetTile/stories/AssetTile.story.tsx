import { storiesOf } from '@storybook/react'

import { AssetTileGridItemStory } from '@/components/Organisms/AssetTile/stories/AssetTileGridItemStory'
import { AssetTileListItemStory } from '@/components/Organisms/AssetTile/stories/AssetTileListItemStory'
import { SingleAssetStory } from '@/components/Organisms/AssetTile/stories/SingleAssetStory'

storiesOf('Design System/Organisms/AssetTile', module)
  .add('Grid Item', AssetTileGridItemStory)
  .add('List Item', AssetTileListItemStory)
  .add('Single Asset', SingleAssetStory)
