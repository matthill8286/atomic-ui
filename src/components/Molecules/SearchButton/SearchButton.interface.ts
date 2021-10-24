import { ReactElement } from 'react'
import { IconProps } from '@/components/Atoms/Icon'
import { InputProps } from '@/components/Atoms/Input'
import { ThemeColors } from '@/types'

export type SearchStyle = 'default' | 'dense' | 'large'
export type SearchType = 'text' | 'search'
export type SearchMode = 'none' | 'text' | 'search'
export type SearchState = 'idle' | 'valid' | 'error'

export type MapSearchStateToColor = {
  [key in SearchState]: ThemeColors
}

export interface SearchIconSize {
  height: number
  width: number
}

export interface SearchButtonProps extends InputProps {
  searchStyle?: SearchStyle
  searchType?: SearchType
  state?: SearchState
  searchProps?: React.InputHTMLAttributes<HTMLInputElement>
  searchIcon?: ReactElement<IconProps>
}
