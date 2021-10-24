import React from 'react'
import { DropdownProps } from '../Dropdown'

export type SearchDropDownListType = 'custom' | 'native'

export interface SearchDropdownPropsEnhanced extends DropdownProps {
  showSearchDropdown: boolean
  toggleSearchDropdown: () => void
}

export interface SearchListProps {
  active: boolean
  isSearchable: boolean
}

export interface StyledSearchDropdownProps {
  hasLabel: boolean
  curvedWithShadow?: boolean
}

export interface SearchDropdownOptionProps {
  label?: string
  provider?: string
  type?: string
  competency?: string
  id?: string
  url?: string
  active?: boolean
  ref?: React.Ref<HTMLDivElement>
  onClick?: React.MouseEventHandler<HTMLLIElement>
}

export interface SearchDropdownProps {
  className?: string
  index: number
  inputValue: string | undefined
  options: SearchDropdownOptionProps[]
  initializeOpen?: boolean
  errorMessage?: string
  searchPlaceholder?: string
  onSelectChange: (item: SearchDropdownOptionProps, index: number) => void
  onInputChange: React.ChangeEventHandler<HTMLInputElement>
}
