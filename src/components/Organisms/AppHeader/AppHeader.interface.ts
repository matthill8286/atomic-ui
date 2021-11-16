import { QuickAction } from '@/components/Molecules/ActionLink'
import { Image } from '@/components/Organisms/ImageAndText'
import React from 'react'

export type HeaderContent = {
  id: string | number
  links?: QuickAction[]
  searchEnabled?: boolean
  searchLabel?: string
}

export interface AppHeaderProps {
  headerContent: HeaderContent
  searchQuery?: string
  renderSearchBar?: JSX.Element | null
  logo: Image
  onLogoClick?: (event?: React.MouseEvent) => void
}
