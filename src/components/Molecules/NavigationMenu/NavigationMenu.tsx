import React, { FC, useEffect, useRef } from 'react'
import { useDropdownState } from '@/components/Helper/useDropdownState'
import {
  StyledContainer,
  StyledDropdown,
} from '@/components/Molecules/DropdownButton/DropdownButton'
import { NavigationButton } from './NavigationButton'
import {
  NavigationButtonType,
  NavigationMenuList,
  NavigationMenuListProps,
} from './NavigationMenuList'
import { CopyText } from '@/components/Atoms/Typography'
import { breakpoints, styled } from '@/styles'
import { ThemeColors } from '@/types'
import { useWindowDimensions } from '@/components/Helper'

export interface NavigationMenuProps {
  className?: string
  index?: number
  button?: NavigationButtonType | undefined
  testIdSuffix?: string
  iconAsMainUi?: boolean
  initialLink?: string
  pictureSrc?: string
  copyColor?: ThemeColors
  navActionList: NavigationMenuListProps['navActionList']
  extendedNavigationHandler?: (item?: NavigationMenuListProps) => void
}

export const StyledCopy = styled(CopyText)`
  ${({ theme }) => `
    display: flex;
    width: 100%;

    :hover {
        cursor: pointer;
    }
  `}
`

export const NavigationMenu: FC<NavigationMenuProps> = ({
  className,
  navActionList = [],
  button,
  testIdSuffix,
  extendedNavigationHandler,
  iconAsMainUi = true,
  initialLink,
  copyColor,
  pictureSrc,
}) => {
  const { element, toggleDropdown, showDropdown } = useDropdownState<HTMLDivElement>()
  const { breakpoint: currentBreakpoint } = useWindowDimensions()
  const isMobile = currentBreakpoint < breakpoints.md

  const ref = useRef<HTMLElement>(null)

  const onToggleDropdown = () => {
    toggleDropdown()
  }

  const handleMenuItemClick = item => {
    if (showDropdown) {
      toggleDropdown()
    }

    if (extendedNavigationHandler) {
      extendedNavigationHandler(item)
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

  const myNavigationContent = (
    <NavigationMenuList
      navActionList={navActionList}
      actionButton={button}
      flexed
      padding="sm"
      onClick={handleMenuItemClick}
    />
  )

  return (
    <StyledContainer
      className={className}
      ref={element}
      data-test={`navigation-dropdown-${testIdSuffix}`}>
      {iconAsMainUi ? (
        <NavigationButton
          height={40}
          width={40}
          data-test="ewb-app-header-navigation-button"
          onClick={onToggleDropdown}
          isOpen={showDropdown}
          pictureSrc={pictureSrc}
        />
      ) : (
        <StyledCopy
          color={copyColor}
          fontSize="sm"
          margin="auto"
          data-test="ewb-header-navigation-link"
          onClick={onToggleDropdown}>
          {initialLink}
        </StyledCopy>
      )}
      <StyledDropdown isMobile={isMobile} surface="white" showDropdown={showDropdown}>
        {myNavigationContent}
      </StyledDropdown>
    </StyledContainer>
  )
}
