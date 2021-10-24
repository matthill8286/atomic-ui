import { BadgeType } from '@/components/Atoms/Badge'
import {
  AssetTypeName,
  Skills,
  Interaction,
  Provider,
  Timebox,
  CollectionData,
} from '@/components/Organisms/AssetTile'
import { FeatureListType } from '@/components/Molecules/FeatureList'

export type AssetType = { __typename: string; name: AssetTypeName; id: number }

export interface Asset {
  numberOfAssets?: CollectionData['numberOfAssets']
  completionPercentage?: CollectionData['completionPercentage']
  totalAssetDuration?: CollectionData['totalAssetDuration']
  __typename?: string
  provider: Provider
  interaction: Interaction
  timebox?: Timebox
  url: string
  author?: string
  featureLabel?: string
  eventDate?: string
  competencyLabel?: string
  embedVideoURL: string
  niceName?: string
  coverImage?: string
  embedded?: boolean
  creator?: string
  embedVideoLink?: string
  locked?: boolean
  providerId?: number
  screenshotOverride?: string
  name?: string
  type: AssetType
  typeId?: number
  duration: string
  durationType?: string
  published?: string
  sponsored?: boolean
  language?: string
  mainFeatures?: FeatureListType[] | null
  competencies?: (Skills | null)[]
  id: number
  description: string
  title: string
  image: string
  badges?: (BadgeType | null)[] | null
  restriction?: string
  partOfSession?: string
  hasLiveChat?: boolean
  tileImageURL?: string
  to?: string
}

export interface ResponsiveImageProps {
  src: string
  srcSet?: string
}
