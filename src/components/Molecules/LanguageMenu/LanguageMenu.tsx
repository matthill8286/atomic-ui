import React, { FC, useEffect, useRef, useState } from 'react'
import { useDropdownState } from '@/components/Helper/useDropdownState'
import {
  StyledContainer,
  StyledDropdown,
} from '@/components/Molecules/DropdownButton/DropdownButton'
import { LanguageButton } from './LanguageButton'
import { LanguageMenuList } from './LanguageMenuList'
import { StyleguideGlobeThin } from '@matthill8286/jsx-icon-library'

export type LanguageMenuOption = {
  label: string
  id: number
  url?: string
  to?: string
}

export interface LanguageMenuProps {
  className?: string
  languages: LanguageMenuOption[]
  testIdSuffix?: string
  extendedLanguageHandler: (item: LanguageMenuOption) => void
  setupCurrentIndex?: number
  isMobile?: boolean
}

export const LanguageMenu: FC<LanguageMenuProps> = ({
  className,
  languages = [],
  testIdSuffix,
  extendedLanguageHandler,
  setupCurrentIndex = -1,
  isMobile = false,
}) => {
  const { element, toggleDropdown, showDropdown } = useDropdownState<HTMLDivElement>()
  const [currentIndex, setCurrentIndex] = useState<number>(setupCurrentIndex)
  const ref = useRef<HTMLElement>(null)

  const onToggleDropdown = () => {
    toggleDropdown()
  }

  const handleLanguageClick = (index, item) => {
    if (showDropdown) {
      toggleDropdown()
    }

    setCurrentIndex(index)

    if (extendedLanguageHandler) {
      extendedLanguageHandler(item)
    }
  }

  const handleClickOutside = (event: Event): void => {
    if (!ref.current?.contains(event.target as Node) && showDropdown) {
      toggleDropdown()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  const myLanguageContent = (
    <LanguageMenuList
      languages={languages}
      onClick={handleLanguageClick}
      currentIndex={currentIndex}
    />
  )

  return (
    <StyledContainer
      className={className}
      ref={element}
      data-test={`language-dropdown-${testIdSuffix}`}>
      <LanguageButton
        data-test="ewb-app-header-language-button"
        onClick={onToggleDropdown}
        isOpen={showDropdown}
        primaryIcon={<StyleguideGlobeThin />}
      />
      <StyledDropdown isMobile={isMobile} showDropdown={showDropdown}>
        {myLanguageContent}
      </StyledDropdown>
    </StyledContainer>
  )
}
