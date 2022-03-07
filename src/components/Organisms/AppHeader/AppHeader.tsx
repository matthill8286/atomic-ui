import React, { useCallback } from 'react'
import { Divider } from '@/components/Atoms/Divider'
import { Picture } from '@/components/Atoms/Picture'
import { GroupedActionLinks } from '@/components/Molecules/ActionLink'
import {
  StyledActionItems,
  StyledHeaderWrapper,
  StyledItemWrapper,
  StyledLogo,
  StyledSection,
} from '@/components/Organisms/AppHeader/AppHeader.styled'
import { AppHeaderProps } from '@/components/Organisms/AppHeader/AppHeader.interface'

export const AppHeaderComponent = React.memo(
  ({ headerContent, renderSearchBar, logo, onLogoClick }: AppHeaderProps) => {
    const internalLogoClick = useCallback(() => onLogoClick?.(), [])

    return (
      <StyledSection>
        <Divider color="primary" height="xs" />
        <StyledHeaderWrapper paddingString="sm md">
          {logo && (
            <StyledLogo>
              <Picture
                alt="thumbnail"
                onClick={() => internalLogoClick()}
                src={logo.url}
                width="107px"
                height="64px"
              />
            </StyledLogo>
          )}
          <StyledActionItems>
            {headerContent?.searchEnabled && (
              <StyledItemWrapper>{renderSearchBar}</StyledItemWrapper>
            )}
            {headerContent?.links ? (
              <StyledItemWrapper>
                <GroupedActionLinks links={[...headerContent.links]} />
              </StyledItemWrapper>
            ) : null}
          </StyledActionItems>
        </StyledHeaderWrapper>
      </StyledSection>
    )
  }
)
