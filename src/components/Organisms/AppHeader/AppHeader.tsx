import isEmpty from 'lodash/isEmpty'
import React, { useCallback } from 'react'
import { Button } from '@/components/Atoms/Button'
import { Divider } from '@/components/Atoms/Divider'
import { Picture } from '@/components/Atoms/Picture'
import { GroupedActionLinks, GroupedActionLinksProps } from '@/components/Molecules/ActionLink'
import { LanguageMenu, LanguageMenuOption } from '@/components/Molecules/LanguageMenu'
import {
  NavigationButtonType,
  NavigationMenu,
  NavigationMenuListProps,
} from '@/components/Molecules/NavigationMenu'
import {
  StyledActionItems,
  StyledHeaderWrapper,
  StyledItemWrapper,
  StyledLogo,
  StyledSection,
} from './AppHeader.styled'
import { useTheme } from '@/utils/helper'
import { Image } from '@/components/Organisms/ImageAndText'

export type HeaderContent = {
  id: string | number
  links?: GroupedActionLinksProps['links']
  searchEnabled?: boolean
  searchLabel?: string
  languageMenuEnabled?: boolean
  hideMenu?: boolean
  hideLinks?: boolean
  filter?: {
    enabled?: boolean
    placeholder?: string
  }
  menus?: {
    links: NavigationMenuListProps['navActionList']
  }
}

export interface AppHeaderProps {
  headerContent: HeaderContent
  searchQuery?: string
  languages?: LanguageMenuOption[]
  button?: NavigationButtonType | undefined
  renderSearchBar?: JSX.Element | null
  logoRef: Image
  logoUrl?: string
  langIndex?: number
  onButtonClick?: (event?: React.MouseEvent) => void
  onLanguageChoice?: (id?: string | number) => void
  setFilter?: (event?: React.MouseEvent) => void
  clearFilter?: (event?: React.MouseEvent) => void
  onLogoClick?: (event?: React.MouseEvent) => void
  filter?: JSX.Element
}

export const AppHeaderComponent = React.memo(
  ({
    headerContent,
    languages,
    button,
    onButtonClick,
    renderSearchBar,
    onLanguageChoice,
    logoUrl,
    setFilter,
    clearFilter,
    onLogoClick,
    langIndex,
    filter,
  }: AppHeaderProps) => {
    const internalLogoClick = useCallback(() => onLogoClick?.(), [])
    const internalLanguageSelection = useCallback(id => onLanguageChoice?.(id), [])
    const { header } = useTheme()

    return (
      <StyledSection color="white">
        <Divider color="primary" height="xs" />
        <StyledHeaderWrapper padding={`${header.padding}`}>
          {logoUrl && (
            <StyledLogo>
              <Picture
                alt="thumbnail"
                onClick={() => internalLogoClick()}
                src={logoUrl}
                width="107px"
                height="64px"
              />
            </StyledLogo>
          )}
          <StyledActionItems>
            {headerContent?.links && !isEmpty(headerContent?.links) && (
              <StyledItemWrapper>
                <GroupedActionLinks
                  color="grey4"
                  padding="0 sm"
                  fontSize="sm"
                  links={[...headerContent.links]}
                />
              </StyledItemWrapper>
            )}
            {headerContent?.filter &&
              !isEmpty(headerContent?.filter) &&
              headerContent?.filter.enabled && <StyledItemWrapper>{filter}</StyledItemWrapper>}
            {headerContent?.searchEnabled && (
              <StyledItemWrapper>{renderSearchBar}</StyledItemWrapper>
            )}
            {headerContent.languageMenuEnabled &&
              headerContent?.menus &&
              !isEmpty(headerContent?.menus) && (
                <StyledItemWrapper>
                  <NavigationMenu
                    button={button}
                    navActionList={[...headerContent?.menus[0].links]}
                  />
                </StyledItemWrapper>
              )}
            {Array.isArray(languages) && languages.length && (
              <StyledItemWrapper>
                <LanguageMenu
                  extendedLanguageHandler={item => internalLanguageSelection(item?.id)}
                  languages={languages}
                  setupCurrentIndex={langIndex}
                />
              </StyledItemWrapper>
            )}
            {button && button.href && (
              <StyledItemWrapper>
                <Button
                  actionType="ghost"
                  color="grey5"
                  size="sm"
                  onClick={onButtonClick}
                  href={button.href}>
                  {button.actionLabel}
                </Button>
              </StyledItemWrapper>
            )}
          </StyledActionItems>
        </StyledHeaderWrapper>
      </StyledSection>
    )
  }
)
